import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Send email using mailto
    const emailSubject = `New Contact Form Submission from ${formData.name}`
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    const mailtoLink = `mailto:ravengregjespiritu@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
    
    window.location.href = mailtoLink
    
    // Show success message
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

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
    <section className="contact">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="contact-header"
        >
          <h1>Get In Touch</h1>
          <p>Have a project in mind? Let's create something amazing together!</p>
        </motion.div>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="contact-info">
            <h2>Let's Connect</h2>
            <p>Feel free to reach out through any of these channels:</p>

            <div className="info-items">
              <motion.div
                className="info-item"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <span className="icon">📧</span>
                <div>
                  <h3>Email</h3>
                  <p>ravengregjespiritu@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                className="info-item"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <span className="icon">📱</span>
                <div>
                  <h3>Phone</h3>
                  <p>+63 964 988 7606</p>
                </div>
              </motion.div>

              <motion.div
                className="info-item"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <span className="icon">📍</span>
                <div>
                  <h3>Location</h3>
                  <p>Taguibo Butuan City, PH</p>
                </div>
              </motion.div>
            </div>

            <div className="social-icons">
              <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                GitHub
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                LinkedIn
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                Twitter
              </motion.a>
            </div>
          </motion.div>

          <motion.form variants={itemVariants} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </div>

            <div className="form-group">
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </div>

            <div className="form-group">
              <motion.textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              ></motion.textarea>
            </div>

            <motion.button
              type="submit"
              className={`submit-btn ${submitted ? 'success' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
