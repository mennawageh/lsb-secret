
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
          <a href="https://github.com/Yasser0Hamoda/LSB_Secret/releases/download/V1.0.0/LSB_Secret_Installer.exe" download>
            <button>Windows </button>
          </a>
        </div>
      </div>

    </div>
    <div className="android_downloading">
      <h1 className=" ">Download mobile App</h1>
      <p>Click the button below to download the latest version for your phone.</p>
      <img src={android} alt="android_logo" />
      <a href="https://github.com/Yasser0Hamoda/LSB_Secret/releases/download/V1.0.0/LSB_Secret_Installer.exe" className="">
        <button>Download App</button>
      </a>
      <div><br /><br /></div>
    </div>

  

  </section>
);

export default Download;