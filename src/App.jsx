import { useState, StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import Homepage from './pages/Homepage';
import Melbourne from './pages/cities/Melbourne';
// import About from './pages/About';
// import Awardees from './pages/Awardees';

function AppContent() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cities/melbourne" element={<Melbourne />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/awardees" element={<Awardees />} /> */}
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
