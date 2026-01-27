import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { portfolioContent } from '../data/portfolioContent'
import './Home.css'

const Home: React.FC = () => {
  const { hero } = portfolioContent

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-text"
          >
            <p className="hero-label">Software Developer</p>
            <h1 className="hero-title">
              Hello I'm Raven Greg<br />
              <span className="highlight">{hero.title}</span>
            </h1>
            <p className="hero-description">{hero.description}</p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Link to="/projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Let's Connect
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="hero-image-wrapper"
          >
            <div className="image-frame">
              <img 
                src="/public/formal.png" 
                alt="Profile"
                className="profile-image"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="stats-section"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="stat-item">
            <span className="stat-number">5</span>
            <span className="stat-label">Years of<br />experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10</span>
            <span className="stat-label">Projects<br />completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">6</span>
            <span className="stat-label">Technologies<br />mastered</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">406</span>
            <span className="stat-label">Code<br />commits</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home
