'use client';

import React from 'react';

const MainPageSection = () => {
  return (
    <div className="hero-section" style={styles.heroSection}>
      <div className="typewriter" style={styles.typewriter}>
        More building. Less <span className="highlight special-blue">testing.</span>
        <span className="cursor" style={styles.cursor}></span>
      </div>
    </div>
  );
};

const styles = {
  heroSection: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40vh',
    backgroundColor: 'black',
  },
  typewriter: {
    fontSize: '2em',
    fontWeight: 'bold',
    color: 'white',
    position: 'relative' as 'relative', // Adding type assertion for TypeScript
    display: 'inline-block',
  },
  cursor: {
    display: 'inline-block',
    width: '2px',
    height: '1em',
    backgroundColor: 'var(--color-primary)',
    animation: 'blink 0.7s infinite',
    marginLeft: '2px',
    verticalAlign: 'text-bottom',
  },
};

export default MainPageSection;