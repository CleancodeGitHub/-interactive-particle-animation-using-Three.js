import React from 'react';
import ParticleAnimation from './components/ParticleAnimation';

function App() {
  return (
    <>
      <ParticleAnimation />
      <div className="overlay" />
      <div className="content">
        <h1 className="title">Interactive Particles✨</h1>
        <p className="subtitle">Move your mouse to interact with the 🔥animation</p>
      </div>
    </>
  );
}

export default App;