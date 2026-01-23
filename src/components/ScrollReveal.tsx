import React, { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  const directionOffset = {
    up: { y: 100, x: 0 },
    down: { y: -100, x: 0 },
    left: { x: 100, y: 0 },
    right: { x: -100, y: 0 },
  }

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        ...Object.keys(directionOffset[direction]).reduce(
          (acc, key) => ({ ...acc, [key]: 0 }),
          {}
        ),
        transition: { duration: 0.6, delay, ease: 'easeOut' },
      })
    }
  }, [isInView, controls, delay, direction])

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      animate={controls}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
