import React from 'react';

const About = () => {
  return (
    <div className="page about-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">About RM Baseball Training</h1>
          <p className="page-subtitle">Our team builds performance programs designed to increase speed, power, and confidence on the baseball field.</p>
        </div>
      </div>

      <section style={{ marginTop: '32px' }}>
        <div className="hero-card rich-text-block">
          <p>RM Showcase combines baseball-specific drills, strength work, recovery guidance, and data tracking into a single training experience. The goal is measurable improvement for hitters, pitchers, and position players.</p>
          <p style={{ marginTop: '16px' }}>We believe great baseball performance comes from disciplined preparation, the right support, and training that adapts to your season.</p>
        </div>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2 className="section-title">What makes our program different</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Sport-specific plans</h3>
            <p>Every drill and workout is chosen for baseball movement and performance needs.</p>
          </div>
          <div className="feature-card">
            <h3>Actionable metrics</h3>
            <p>Track velocity, bat speed, agility, and recovery so you know exactly where you improve.</p>
          </div>
          <div className="feature-card">
            <h3>Recovery support</h3>
            <p>Programs include arm care, mobility, and nutrition guidance to keep you healthy.</p>
          </div>
          <div className="feature-card">
            <h3>Performance coaching</h3>
            <p>Training plans are designed to help athletes get faster, stronger, and more consistent.</p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2 className="section-title">Training approach</h2>
        <div className="hero-card rich-text-block">
          <ol style={{ paddingLeft: '18px', marginTop: '16px' }}>
            <li><strong>Assess.</strong> Evaluate your strengths and areas to improve.</li>
            <li><strong>Build.</strong> Create a custom plan for your goals and schedule.</li>
            <li><strong>Execute.</strong> Follow drills, track data, and train with consistency.</li>
            <li><strong>Adjust.</strong> Use results to refine your path and keep improving.</li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default About;
