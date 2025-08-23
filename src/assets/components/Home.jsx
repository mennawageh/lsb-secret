
import React from 'react';
import web from '../img/web.png';



const Home = ({ onGetItNow }) => {
  return (
    <section className="home_page">
     
      <div className="home_content">
        <p className="text">welcome to</p>
        <h1 className="gradient-text">L S B</h1>
        <h1 className="gradient-text">SECRET</h1>
        <p className="text">Protecting your words, pixel by pixel.</p>
        <button
          onClick={onGetItNow}
          className="git_it_button"
        >
          Get it Now  →
        </button>
       
      </div>
      <div className="home_image">
        <img
          src={web} className='hand_lock_photo' alt="hand_lock." />
      </div>
    </section>
  );
};

export default Home;