import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      <div className="header-brand">RM Showcase</div>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/training-app" className="nav-link">Training</Link>
        <Link to="/testimonials" className="nav-link">Testimonials</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
