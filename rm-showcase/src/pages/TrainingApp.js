import React, { useState, useEffect } from 'react';
import { FaSave, FaPlus } from 'react-icons/fa';

const programTemplates = {
  beginner: [
    { day: 'Monday', workout: 'Warm-up, throwing mechanics, catch-and-release', duration: '35 min' },
    { day: 'Tuesday', workout: 'Medicine ball throws, mobility, light strength', duration: '40 min' },
    { day: 'Wednesday', workout: 'Tee drills, bat speed work, footwork', duration: '45 min' },
  ],
  intermediate: [
    { day: 'Monday', workout: 'Velocity circuit, weighted throws, fielding', duration: '50 min' },
    { day: 'Tuesday', workout: 'Hitting drills, launch angle training, sprint work', duration: '55 min' },
    { day: 'Wednesday', workout: 'Core stability, throws from the stretch, recovery', duration: '50 min' },
  ],
  advanced: [
    { day: 'Monday', workout: 'Live bullpens, weighted tosses, agility ladder', duration: '70 min' },
    { day: 'Tuesday', workout: 'Power hitting, situational training, mobility circuit', duration: '75 min' },
    { day: 'Wednesday', workout: 'Explosive strength, pitching analytics, recovery', duration: '70 min' },
  ],
};

const supplements = [
  { name: 'Whey Protein', benefit: 'Supports muscle recovery and lean gains.' },
  { name: 'Creatine Monohydrate', benefit: 'Improves strength, power, and sprint performance.' },
  { name: 'Omega-3', benefit: 'Supports joint health and recovery.' },
];

const trainingVideos = [
  { title: 'Velocity Development Drills', url: 'https://www.youtube.com/embed/2ORArs-bZKs' },
  { title: 'Hitting Mechanics Breakdown', url: 'https://www.youtube.com/embed/t-RqA-ZN1G0' },
  { title: 'Arm Care Routine', url: 'https://www.youtube.com/embed/RWv8ZYpC5Iw' },
];

const testimonialEntries = [
  { quote: 'I added 8 mph to my fastball and gained plate discipline in two months.', name: 'Marcus K.', stat: 'Fastball +8 mph' },
  { quote: 'This training system made my swing faster and more consistent in games.', name: 'Tyler S.', stat: 'Bat speed +11%' },
  { quote: 'The recovery plan kept me healthy through tournament season.', name: 'Andre H.', stat: '0 injuries in season' },
];

const performanceMetrics = [
  { label: 'Velocity', value: 79, unit: 'mph' },
  { label: 'Bat Speed', value: 71, unit: 'mph' },
  { label: '60-Yard Dash', value: 6.82, unit: 's' },
];

const TrainingApp = () => {
  const [selectedProgram, setSelectedProgram] = useState('beginner');
  const [programDrills, setProgramDrills] = useState(programTemplates.beginner);
  const [progress, setProgress] = useState(46);
  const [customDrill, setCustomDrill] = useState('');
  const [notes, setNotes] = useState('Review your swing path after every session.');
  const [status, setStatus] = useState('');
  const [focusedMetric, setFocusedMetric] = useState('Velocity');

  useEffect(() => {
    const savedProgress = localStorage.getItem('rm-progress');
    const savedNotes = localStorage.getItem('rm-notes');
    const savedProgram = localStorage.getItem('rm-program');

    if (savedProgress) setProgress(Number(savedProgress));
    if (savedNotes) setNotes(savedNotes);
    if (savedProgram && programTemplates[savedProgram]) {
      setSelectedProgram(savedProgram);
      setProgramDrills(programTemplates[savedProgram]);
    }
  }, []);

  useEffect(() => {
    setProgramDrills(programTemplates[selectedProgram]);
    localStorage.setItem('rm-program', selectedProgram);
  }, [selectedProgram]);

  const updateProgress = (value) => {
    setProgress(value);
    localStorage.setItem('rm-progress', value);
  };

  const addCustomDrill = (e) => {
    e.preventDefault();
    const trimmed = customDrill.trim();
    if (!trimmed) {
      setStatus('Please add a drill description first.');
      return;
    }

    setProgramDrills((current) => [...current, { day: 'Bonus', workout: trimmed, duration: '20 min' }]);
    setCustomDrill('');
    setStatus('Custom drill added to your plan.');
  };

  const saveNotes = () => {
    localStorage.setItem('rm-notes', notes);
    setStatus('Training notes saved locally.');
  };

  return (
    <div className="page training-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Baseball Training Hub</h1>
          <p className="page-subtitle">Build a baseball-specific performance plan, track velocity and bat speed, and stay consistent with drills designed for hitters and pitchers.</p>
        </div>
        <div className="hero-card">
          <h3>Daily focus</h3>
          <p className="rich-text-block">Improve mechanics with targeted drills, maintain arm health, and use performance data to measure real progress.</p>
        </div>
      </div>

      <section style={{ marginTop: '36px' }}>
        <h2 className="section-title">Program Builder</h2>
        <div className="program-grid">
          <div className="hero-card">
            <div className="form-group">
              <label htmlFor="program-level">Training level</label>
              <select id="program-level" value={selectedProgram} onChange={(e) => setSelectedProgram(e.target.value)}>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div className="metric-grid">
              {programDrills.map((item, index) => (
                <div key={index} className="metric-card">
                  <h3>{item.day}</h3>
                  <p>{item.workout}</p>
                  <p style={{ marginTop: '10px', fontWeight: 700 }}>{item.duration}</p>
                </div>
              ))}
            </div>

            <form onSubmit={addCustomDrill} style={{ marginTop: '24px' }}>
              <div className="form-group">
                <label htmlFor="custom-drill">Add custom drill</label>
                <input id="custom-drill" value={customDrill} onChange={(e) => setCustomDrill(e.target.value)} placeholder="Example: reverse toss combo" />
              </div>
              <button type="submit" className="button primary"><FaPlus /> Add Drill</button>
            </form>
          </div>

          <div className="hero-card">
            <h3>Weekly training plan</h3>
            <ul className="list-group">
              {programDrills.map((item, index) => (
                <li key={index}>
                  <strong>{item.day}</strong> — {item.workout}
                  <span style={{ float: 'right', opacity: 0.8 }}>{item.duration}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2 className="section-title">Performance Tracker</h2>
        <div className="program-grid">
          <div className="hero-card">
            <p className="rich-text-block">Use the progress slider to track momentum and measure how close you are to your next performance milestone.</p>
            <div className="form-group">
              <label htmlFor="progress">Training progress: {progress}%</label>
              <input id="progress" type="range" min="0" max="100" value={progress} onChange={(e) => updateProgress(Number(e.target.value))} />
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="metric-list">
              {performanceMetrics.map((metric) => (
                <div key={metric.label} className="metric-item">
                  <span>{metric.label}</span>
                  <span className="stat-chip">{metric.value}{metric.unit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-card">
            <div className="form-group">
              <label htmlFor="focus-metric">Focus metric</label>
              <select id="focus-metric" value={focusedMetric} onChange={(e) => setFocusedMetric(e.target.value)}>
                <option>Velocity</option>
                <option>Bat Speed</option>
                <option>Agility</option>
              </select>
            </div>
            <div className="rich-text-block" style={{ marginTop: '16px' }}>
              <p><strong>Current focus:</strong> {focusedMetric}</p>
              <p>Each drill and workout in this program supports your chosen metric, helping you train with clear purpose.</p>
            </div>
            <div className="form-group" style={{ marginTop: '24px' }}>
              <label htmlFor="session-notes">Session notes</label>
              <textarea id="session-notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
            </div>
            <button type="button" onClick={saveNotes} className="button secondary"><FaSave /> Save Notes</button>
            {status && <p className={`form-status ${status.includes('saved') ? 'success' : 'error'}`}>{status}</p>}
          </div>
        </div>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2 className="section-title">Supplements & Recovery</h2>
        <div className="feature-grid">
          {supplements.map((item) => (
            <div key={item.name} className="feature-card">
              <h3>{item.name}</h3>
              <p>{item.benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2 className="section-title">Training Videos</h2>
        <div className="video-grid">
          {trainingVideos.map((video) => (
            <div key={video.title} className="video-card">
              <h3>{video.title}</h3>
              <iframe src={video.url} title={video.title} allowFullScreen />
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2 className="section-title">Results from Athletes</h2>
        <div className="testimonial-grid">
          {testimonialEntries.map((item, index) => (
            <div key={index} className="testimonial-card">
              <h3>"{item.quote}"</h3>
              <p style={{ marginTop: '16px', opacity: 0.9 }}>{item.name}</p>
              <p style={{ marginTop: '10px', fontWeight: 700 }}>{item.stat}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TrainingApp;
