import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaPhone } from 'react-icons/fa';

const Home = () => {
  const impactStats = [
    { label: 'Avg. Velocity Gain', value: '8 mph' },
    { label: 'Bat Speed Increase', value: '12%' },
    { label: 'Speed Improvement', value: '0.4s' },
    { label: 'Success Rate', value: '94%' },
  ];

  const features = [
    { title: 'Custom Baseball Plans', description: 'Programs tailored for hitters, pitchers, and position players.', icon: '⚾' },
    { title: 'Performance Metrics', description: 'Track velocity, bat speed, agility, and recovery.', icon: '📊' },
    { title: 'Video Tutorials', description: 'Step-by-step drills from real baseball coaches.', icon: '🎥' },
    { title: 'Recovery & Nutrition', description: 'Strengthen body and mind with sport-specific guidance.', icon: '💪' },
  ];

  return (
    <div className="page home-page">
      <section className="hero-section" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-copy">
          <span className="eyebrow">Baseball Performance</span>
          <h1 className="page-title">Train harder, move faster, and hit harder.</h1>
          <p className="page-subtitle">
            RM Showcase is built for baseball players who want more than a static website. It's your training partner, your progress tracker, and your go-to resource for hitting, pitching, strength, and recovery.
          </p>
          <div className="hero-actions">
            <Link to="/training-app" className="button primary"><FaPlay /> Open Training Hub</Link>
            <Link to="/contact" className="button secondary"><FaPhone /> Book a Free Call</Link>
          </div>
        </div>

        <div className="hero-card">
          <h3>Fast Track Performance</h3>
          <p className="rich-text-block">
            See real training results with a complete baseball program that blends technical drills, strength work, analytics, and athlete support.
          </p>
          <div className="hero-stat-grid" style={{ marginTop: '24px' }}>
            {impactStats.map((stat) => (
              <div key={stat.label} className="small-card">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">What You Get</h2>
        <div className="feature-grid">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2 className="section-title">Built for Baseball</h2>
        <div className="hero-card rich-text-block">
          <p>
            RM Showcase is a practice-ready baseball training companion. The platform delivers structured drills, measurable metrics, and coaching guidance for every phase of development: off-season strength, spring training readiness, and in-season performance maintenance.
          </p>
          <ul style={{ marginTop: '18px' }}>
            <li>Hitting mechanics and pitch recognition</li>
            <li>Arm health, velocity development, and recovery routines</li>
            <li>Athlete-specific strength, speed, and flexibility plans</li>
          </ul>
        </div>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2 className="section-title">Why Athletes Choose RM Showcase</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Athlete" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '16px' }} />
            <h3>"I gained 8 mph on my fastball"</h3>
            <p>Elite pitching drills and strength cycles helped me hit new personal bests in velocity.</p>
          </div>
          <div className="testimonial-card">
            <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Athlete" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '16px' }} />
            <h3>"My bat speed is finally consistent"</h3>
            <p>The hitting evaluation and drills helped me square up the ball more often in game situations.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

