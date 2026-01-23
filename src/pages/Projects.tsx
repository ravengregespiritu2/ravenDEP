import React from 'react'
import { motion } from 'framer-motion'
import { portfolioContent } from '../data/portfolioContent'
import './Projects.css'

interface Project {
  id: number
  title: string
  category: string
  categoryColor: string
  description: string
  longDescription: string
  features: string[]
  technologies: string[]
  keyAchievements: string[]
  repo: string
  live: string
  image: string
}

const Projects: React.FC = () => {
  const projects: Project[] = portfolioContent.bigThreeProjects

  return (
    <section className="projects">
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>My Work</h1>
          <p>Showcase of my recent projects and achievements</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <div className="project-number">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3>{project.title}</h3>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                <span className="tech-label">Tech Stack:</span>
                <div className="tech-tags">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-link">
                    Code →
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    Live Demo →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
