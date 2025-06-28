
import React from 'react';
import logo from '../img/logo.png';
import mac from '../img/mac.png';
import windows from '../img/windows.png';
import linux from '../img/linux.png';
import android from '../img/android.png';

const Download = () => (
  <section className="download_page">
    <div className="Desktop_downloading">
      <h1 className=" ">Download <span> L S B  </span> SECRET </h1>
      <p>Click the button below to download the latest version for your device.</p>
      <div className="download_buttons">
        <div>
          <img src={windows} alt="windows_logo" />
          <a href="#" className="">
            <button>Windows </button>
          </a>
        </div>
        <div> 
          <img src={linux} alt="linux_logo" />
          <a href="#" className="">
          <button>Linux</button>
        </a></div>
        <div>  
          <img src={mac} alt="mac_logo" />
           <a href="#" className="">
          <button>Mac</button>
        </a>
        </div>



      </div>

    </div>
    <div className="android_downloading">
      <h1 className=" ">Download mobile App</h1>
      <p>Click the button below to download the latest version for your phone.</p>
      <img src={android} alt="android_logo" />
      <a href="#" className="">
        <button>Download App</button>
      </a>
    </div>

  

  </section>
);

export default Download;