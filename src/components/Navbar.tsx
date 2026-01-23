import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Navbar.css'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.span>
        </Link>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => `navbar-item ${isActive ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => `navbar-item ${isActive ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink 
            to="/learning" 
            className={({ isActive }) => `navbar-item ${isActive ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Learning
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `navbar-item ${isActive ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `navbar-item ${isActive ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
