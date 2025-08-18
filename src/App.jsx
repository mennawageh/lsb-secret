import React, { useState } from 'react';
import Navbar from './assets/components/Navbar';
import Home from './assets/components/Home';
import About from './assets/components/About'
import Download from './assets/components/Download'
import Features from './assets/components/Features'
import BottomNav from './assets/components/bottomnav'
import './index.css';





export default function App() {
  const [activePage, setActivePage] = useState('Home');

  const renderPage = () => {
    switch (activePage) {
      case 'Home': return <Home onGetItNow={() => setActivePage('Download')} />;
      case 'About': return <About />;
      case 'Download': return <Download />;
      case 'Features': return <Features />;
      default: return <Home onGetItNow={() => setActivePage('Download')} />;
    }
  };

  return (
     <div className="min-h-screen bg-black text-white font-sans">
    <Navbar activePage={activePage} setActivePage={setActivePage} />
    {renderPage()}
    <BottomNav activePage={activePage} setActivePage={setActivePage} />
  </div>
  );
}
