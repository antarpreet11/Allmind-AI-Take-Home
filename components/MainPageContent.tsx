'use client';

import React from 'react';
import Typewriter from 'typewriter-effect';

const MainPageSection = () => {
  return (
    <div className="hero-section" style={styles.heroSection}>
      <div className="typewriter" style={styles.typewriter}>
        <Typewriter
          options={{
            autoStart: true,
            delay: 50, 
            deleteSpeed: 25, 
            cursor: '<span style="color: #3B44C6;" id="typewriter-cursor">|</span>', 
          }}
          onInit={(typewriter) => {
            typewriter.typeString('More building. Less <span class="highlight special-blue">labeling.</span>')
              .pauseFor(1000)
              .deleteChars(9)
              .typeString('<span class="highlight special-blue">reviewing.</span>')
              .pauseFor(1000)
              .deleteChars(10)
              .typeString('<span class="highlight special-blue">testing.</span>')
              .callFunction(() => {
                const cursorElement = document.getElementById('typewriter-cursor');
                if (cursorElement) {
                  cursorElement.style.display = 'none';
                }
              })
              .start();
          }}
        />
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