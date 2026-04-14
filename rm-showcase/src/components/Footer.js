import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>&copy; {new Date().getFullYear()} RM Showcase. All rights reserved.</p>
        <p>Follow us on social media: Instagram | Facebook | Twitter</p>
      </div>
    </footer>
  );
};

export default Footer;

