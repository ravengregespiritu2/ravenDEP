import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About: React.FC = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Webpack', 'VS Code'] },
    { category: 'Soft Skills', items: ['Problem Solving', 'Communication', 'Leadership', 'Collaboration'] },
  ]

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      period: '2023 - Present',
      description: 'Leading frontend development team, architecting scalable React applications.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2021 - 2023',
      description: 'Developed and maintained full-stack applications using modern web technologies.',
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Labs',
      period: '2020 - 2021',
      description: 'Built responsive web interfaces and contributed to backend services.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="about">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="about-header"
        >
          <h1>About Me</h1>
          <p>Passionate developer crafting digital experiences</p>
        </motion.div>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="about-text">
            <h2>Who I Am</h2>
            <p>
              I'm a passionate full-stack developer with a keen eye for design and a love for solving complex problems.
              With 5+ years of experience, I've built everything from interactive web applications to scalable backend
              systems.
            </p>
            <p>
              My journey in tech started with a curiosity about how things work, and it has evolved into a career where
              I help businesses and individuals bring their visions to life through technology.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="experience-section">
            <h2>Experience</h2>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3>{exp.title}</h3>
                    <p className="company">{exp.company}</p>
                    <p className="period">{exp.period}</p>
                    <p className="description">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="skills-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>Skills & Expertise</h2>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                className="skill-group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <h3>{skillGroup.category}</h3>
                <ul>
                  {skillGroup.items.map((skill, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.05 * i }}
                      viewport={{ once: true }}
                    >
                      <span className="skill-dot">•</span>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
