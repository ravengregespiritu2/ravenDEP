import React from 'react'
import { useTheme } from '../context/ThemeContext'
import './ThemeToggle.css'

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="theme-icon">{isDark ? '☀️' : '🌙'}</span>
    </button>
  )
}

export default ThemeToggle
