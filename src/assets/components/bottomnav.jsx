import React from "react";
import { FaHome, FaInfoCircle, FaDownload, FaStar } from "react-icons/fa";

const BottomNav = ({ activePage, setActivePage }) => {
  return (
    <nav className="bottom-nav">
      <button
        className={`nav-item ${activePage === "Home" ? "active" : ""}`}
        onClick={() => setActivePage("Home")}
      >
        <FaHome />
        <span>Home</span>
      </button>

      <button
        className={`nav-item ${activePage === "About" ? "active" : ""}`}
        onClick={() => setActivePage("About")}
      >
        <FaInfoCircle />
        <span>About</span>
      </button>

      <button
        className={`nav-item ${activePage === "Features" ? "active" : ""}`}
        onClick={() => setActivePage("Features")}
      >
        <FaStar />
        <span>Features</span>
      </button>

      <button
        className={`nav-item ${activePage === "Download" ? "active" : ""}`}
        onClick={() => setActivePage("Download")}
      >
        <FaDownload />
        <span>Download</span>
      </button>
      <button
        className={`nav-item ${activePage === "Documentation" ? "active" : ""}`}
        onClick={() => setActivePage("Documentation")}>
        <FaInfoCircle />
        <span>Docs</span>
        </button>
      
    </nav>
  );
};

export default BottomNav;
