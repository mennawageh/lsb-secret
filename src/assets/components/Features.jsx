
import React from 'react';
import burglar from '../img/burglar.png';
import extraction from '../img/extraction.png';
import padlock from '../img/padlock.png';
import photo from '../img/photo.png';
import thunderbolt from '../img/thunderbolt.png';
const Features = () => (
  <section className="features_contant">
    <h1 className=""> Our Features</h1>
    <div className='features_container'>
      <div>
        <img src={burglar} alt="hidden" />
      <h2>Hide Messages Inside Images</h2>
      <p>Securely embed any text message into an image using LSB 
        (Least Significant Bit) steganography — no visible changes, no suspicion.</p>
    </div>
    <div>
      <img src={extraction} alt="extraction" />
      <h2>Extract Hidden Messages</h2>
      <p>Easily decode and recover secret messages from 
        images — quick, accurate, and effortless.</p>
    </div>
    <div>
      <img src={padlock} alt="padlock" />
      <h2>Stealth-Level Security</h2>
      <p>Go beyond basic encryption — hide your message where no one would even think to look.
         Perfect for private communication.</p>
    </div>
    </div>
    <div className='features_container'>
       <div>
        <img src={thunderbolt} alt="power" />
      <h2>Minimal & Powerful Interface</h2>
      <p>A clean, focused dark-mode design that keeps you in control — no distractions, 
        just what you need.</p>
    </div>
    <div>
      <img src={photo} alt="photo" />
      <h2> High-Quality Image Support</h2>
      <p>Supports common lossless formats like PNG  to preserve image clarity
         and ensure data integrity.</p>
    </div>
    </div>


  </section>
);

export default Features;
