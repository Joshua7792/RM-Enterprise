import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: 'Alex Johnson', stat: 'Home runs +15%', quote: 'The training programs are top-notch and changed my swing.' },
    { name: 'Maria Garcia', stat: 'Fastball +10 mph', quote: 'Video breakdowns helped me improve my mechanics dramatically.' },
    { name: 'Tom Wilson', stat: '.320 to .380 BA', quote: 'The structured program made my season more consistent.' },
  ];

  return (
    <div className="page testimonials-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Athlete Success Stories</h1>
          <p className="page-subtitle">Real baseball athletes sharing measurable gains from training with RM Showcase.</p>
        </div>
      </div>

      <section style={{ marginTop: '32px' }}>
        <div className="testimonial-grid">
          {testimonials.map((test, index) => (
            <div key={index} className="testimonial-card">
              <h3>"{test.quote}"</h3>
              <p style={{ marginTop: '16px', opacity: 0.9 }}>— {test.name}</p>
              <p style={{ marginTop: '10px', fontWeight: 700 }}>{test.stat}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
