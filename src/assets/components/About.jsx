
import React from 'react';
import logo21 from '../img/logo21.png';


const About = () => (
  <section className="about_page">
    
    <img src={logo21} alt="logo" />
    <div className='about_app_content'>
      <div>
        <h1>01</h1>
        <p >Our app is a simple yet powerful tool for secure communication.
          It allows you to embed secret messages inside photos using a technique known as image steganography.
          Users can type a message, select an image, and with a single click,
          hide that message within the image pixels—completely invisible to the naked eye.
        </p>

      </div>
      <div>
        <h1>02</h1>
        <p>The app also includes a message extraction tool,
          so anyone with the app can retrieve the hidden message from a shared image, as long as they know to look for it.
        </p>
      </div>
      <div>
        <h1>03</h1>
        <p>We’ve made this app available on both desktop and mobile,
          so whether you're working from your computer or your phone, you can create and decode secret messages anytime,
          anywhere.
        </p>
      </div>
    </div>


    <div className='about_team_content'>
      <h1>Developed by <span> ChromaCrypt </span>  team  </h1>
      <p>We are a passionate team of student developers committed to creating innovative digital tools that merge technology with
         creativity. Our project introduces a unique desktop and mobile application that allows users to send secret messages in 
         a secure and creative way.</p>
    </div>

  </section>
);

export default About;