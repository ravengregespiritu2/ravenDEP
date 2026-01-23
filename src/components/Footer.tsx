import React from 'react'
import './Footer.css'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3>Let's Connect</h3>
          <div className="social-links">
            <a href="https://github.com/ravengregespiritu2" target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/raven-greg-espiritu-7229633a7/" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
            <a href="https://twitter.com/ravengregxxxx" target="_blank" rel="noopener noreferrer" className="social-link">
              Twitter
            </a>
          </div>
        </div>
        <p className="footer-text">&copy; {currentYear} All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
