import React from 'react'
import { motion } from 'framer-motion'
import { portfolioContent } from '../data/portfolioContent'
import './Learning.css'

const Learning: React.FC = () => {
  const { learningPath } = portfolioContent

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="learning">
      <div className="learning-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="learning-header"
        >
          <h1>{learningPath.title}</h1>
          <p>{learningPath.subtitle}</p>
        </motion.div>

        <motion.div
          className="learning-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {learningPath.areas.map((area, index) => (
            <motion.div
              key={index}
              className="learning-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="learning-header-section">
                <h2>{area.title}</h2>
                <span className="learning-status">{area.status}</span>
              </div>
              <p className="learning-description">{area.description}</p>

              <div className="learning-resources">
                <h3>Resources</h3>
                <ul>
                  {area.resources.map((resource, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      viewport={{ once: true }}
                    >
                      <span className="resource-dot">→</span>
                      {resource}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="learning-progress">
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: '65%' }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
                <span className="progress-text">In Progress</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="growth-mindset"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Growth Mindset Philosophy</h2>
          <div className="philosophy-items">
            <div className="philosophy-item">
              <div className="philosophy-icon">📈</div>
              <h3>Continuous Learning</h3>
              <p>Technology evolves rapidly. I dedicate time each week to learning new tools, frameworks, and best practices.</p>
            </div>
            <div className="philosophy-item">
              <div className="philosophy-icon">🎯</div>
              <h3>Strategic Growth</h3>
              <p>My learning path is intentional—expanding beyond current comfort zones to build full-stack capabilities and explore emerging technologies.</p>
            </div>
            <div className="philosophy-item">
              <div className="philosophy-icon">🚀</div>
              <h3>From Learning to Building</h3>
              <p>Knowledge without application is incomplete. Each new skill is integrated into real projects that solve meaningful problems.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Learning
