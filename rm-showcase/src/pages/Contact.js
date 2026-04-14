import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', text: 'Please complete all required fields.' });
      return;
    }

    try {
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY');
      setStatus({ type: 'success', text: 'Message sent successfully! We will contact you soon.' });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', text: 'Unable to send right now. Please call or email directly.' });
      console.error('EmailJS error:', error);
    }
  };

  return (
    <div className="page contact-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Contact RM Baseball Training</h1>
          <p className="page-subtitle">Schedule a consultation, book a training assessment, or ask about our baseball performance programs.</p>
        </div>
      </div>

      <div className="program-grid" style={{ marginTop: '32px' }}>
        <div className="contact-panel">
          <h3>Send a message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Optional phone" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your goals" required />
            </div>
            <button type="submit" className="button primary">Send Message</button>
            {status && <p className={`form-status ${status.type}`}>{status.text}</p>}
          </form>
        </div>

        <div className="contact-panel">
          <h3>Quick contact</h3>
          <p className="rich-text-block">Want to move faster? Call us directly or email to schedule a free evaluation.</p>
          <ul className="list-group">
            <li><strong>Phone:</strong> <a href="tel:+1234567890" style={{ color: '#26d3c7' }}>(123) 456-7890</a></li>
            <li><strong>Email:</strong> <a href="mailto:info@rmshowcase.com" style={{ color: '#26d3c7' }}>info@rmshowcase.com</a></li>
            <li><strong>Hours:</strong> Mon - Sat, 8am - 7pm</li>
          </ul>
          <div style={{ marginTop: '24px' }}>
            <h3>Why reach out?</h3>
            <p className="rich-text-block">Our coaching approach is built for athletes who want real gains in velocity, speed, and consistency—without guesswork.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
