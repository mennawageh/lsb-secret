import React, { useState, useEffect } from "react";
import { FaLock, FaDesktop, FaMobileAlt, FaGlobe, FaFileAlt, FaUsers } from "react-icons/fa";
import login from '../img/login.png';
import main from '../img/main.png';
import embed from '../img/embed.png';
import extract from '../img/extract.png';
import save from '../img/save.png';
import signup from '../img/signup.png';
const sections = [
  { id: "intro", title: "Introduction", icon: <FaLock /> },
  { id: "platforms", title: "Platforms", icon: <FaDesktop /> },
  { id: "what-is", title: "What is LSB_Secret?", icon: <FaFileAlt /> },
  { id: "how-it-works", title: "How it Works", icon: <FaFileAlt /> },
  { id: "technologies", title: "Technologies Used", icon: <FaFileAlt /> },
  { id: "desktop", title: "Desktop Application", icon: <FaDesktop /> },
  { id: "android", title: "Android App", icon: <FaMobileAlt /> },
  { id: "website", title: "Website", icon: <FaGlobe /> },
  { id: "installation", title: "Installation", icon: <FaFileAlt /> },
  { id: "api", title: "API Documentation", icon: <FaFileAlt /> },
  { id: "license", title: "License", icon: <FaFileAlt /> },
  { id: "team", title: "ChromaCrypt Team", icon: <FaUsers /> },
];

const DocumentationSidebar = () => {
  const [activeSection, setActiveSection] = useState("intro");

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 150;
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i].id);
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(sections[i].id);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="doc-container">
      <nav className="sidebar">
        <ul>
          {sections.map((sec) => (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className={activeSection === sec.id ? "active" : ""}
                onClick={() => setActiveSection(sec.id)}
              >
                <span className="icon">{sec.icon}</span> {sec.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="doc-content">
        <section id="intro">
          <h1><FaLock /> LSB_Secret</h1>
          <p>
            Welcome to <strong>LSB_Secret</strong> — a powerful, secure
            steganography application that lets you embed secret messages inside
            images using the Least Significant Bit (LSB) technique. Designed for
            both Desktop and Mobile, and supported by a dedicated Website, our
            solution ensures message protection, pixel by pixel.
          </p>
        </section>

        <section id="platforms">
          <h2><FaDesktop /> Platforms</h2>
          <ul>
            <li><FaDesktop /> Desktop Application (Windows .exe installer)</li>
            <li><FaMobileAlt /> Android Mobile Application (APK)</li>
            <li><FaGlobe /> Website: Learn more, see features, and download apps</li>
          </ul>
        </section>

        <section id="what-is">
          <h2><FaFileAlt /> What is LSB_Secret?</h2>
          <p>LSB_Secret is a steganography tool that allows users to hide confidential text messages inside images securely. It leverages:</p>
          <ul>
            <li>Compression (to reduce size)</li>
            <li>AES Encryption (for strong security)</li>
            <li>LSB Steganography (to hide message in image)</li>
            <li>History tracking of all embedded messages</li>
          </ul>
        </section>

        <section id="how-it-works">
          <h2><FaFileAlt /> How it Works</h2>
          <h3>User Registration/Login</h3>
          <p>Users can register or login to manage their embedded messages securely.</p>
          <div className="photosDiv">
            <img src={signup} alt="" /><img src={login} alt="" />
          </div>
          <h3>Embed Message</h3>
          <ol>
            <li>Upload image (PNG, JPG, JPEG, BMP)</li>
            <li>Enter a message and a password</li>
            <li>The app compresses + encrypts + embeds the message</li>
          </ol>
            <div className="photosDiv">
            <img src={embed} alt="" />
          </div>
          <h3>Extract Message</h3>
          <ol>
            <li>Upload stego image</li>
            <li>Enter password</li>
            <li>The app decrypts and decompresses to reveal the message</li>
          </ol>
            <div className="photosDiv">
            <img src={extract} alt="" />
            </div>
        </section>

        <section id="technologies" >
          <h2><FaFileAlt /> Technologies Used</h2>
          <ul>
            <li>Python 3.10+</li>
            <li>Flask (REST API backend)</li>
            <li>PyQt6 (Desktop GUI)</li>
            <li>OpenCV (image processing)</li>
            <li>zlib + base64 (compression)</li>
            <li>AES Encryption (cryptography)</li>
            <li>JWT Authentication</li>
            <li>SQLite (for logging and history)</li>
          </ul>
        </section>

        <section id="desktop">
          <h2><FaDesktop /> Desktop Application</h2>
          <ul>
            <li>GUI built with PyQt6</li>
            <li>Local image support</li>
            <li>Secure encryption and compression</li>
            <li>Integrated Flask backend server</li>
            <li>Logs user actions</li>
            <li>Built-in message history viewer</li>
            <li>Installer includes all dependencies</li>
          </ul>
        </section>

        <section id="android">
          <h2><FaMobileAlt /> Android App</h2>
          <ul>
            <li>APK available via website</li>
            <li>Lightweight, clean and user-friendly UI</li>
            <li>Works completely offline</li>
            <li>Compatible with Android 8+</li>
          </ul>
        </section>

        <section id="website">
          <h2><FaGlobe /> Website</h2>
          <ul>
            <li>Info about the project</li>
            <li>Desktop and mobile downloads</li>
            <li>Visual guides and screenshots</li>
            <li>Contact & feedback</li>
          </ul>
        </section>

        <section id="installation">
          <h2><FaFileAlt /> Installation</h2>
          <h3>Desktop</h3>
          <p>
            Download the latest version of <strong>LSB_Secret</strong> from
            dowenload page. Run the installer which will install all dependencies,
            add shortcut to Desktop / Start Menu, and launch the application.
          </p>
          <h3>Android</h3>
          <p>
            Download the APK from dowenload page, install it on your device, and open
            the app to enjoy secure steganography.
          </p>
        </section>

        <section id="api">
          <h2><FaFileAlt /> API Documentation</h2>
          <p>Main endpoints:</p>
          <ul>
            <li>/embed → Hide message inside image</li>
            <li>/extract → Retrieve hidden message from image</li>
            <li>/register → User registration</li>
            <li>/login → User login with JWT tokens</li>
            <li>/save_message → Save encrypted messages</li>
            <li>/get_all_messages → Retrieve saved messages</li>
          </ul>
        </section>

        <section id="license">
          <h2><FaFileAlt /> License</h2>
          <p>MIT License - see the LICENSE file for details.</p>
        </section>

        <section id="team">
          <h2><FaUsers /> ChromaCrypt Team</h2>
          <ul>
            <li>Mahmoud Nader — Software Engineer</li>
            <li>Yasser Hamoda — Penetration Tester & Backend Developer</li>
            <li>Menna Wageh — Frontend Developer & UI/UX Designer</li>
            <li>Malak Alaa — Penetration Tester & UI</li>
            <li>Mohamed Ahmed — Flutter Developer & Frontend Developer</li>
          </ul>
          <p>🎉 Thank you for using LSB_Secret!</p>
          <p>📬 For feedback or contributions, feel free to contact us.</p>
        </section>
      </div>
    </div>
  );
};

export default DocumentationSidebar;
