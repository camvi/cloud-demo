import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu'
import Verify from './components/Verify'
import Enroll from './components/Enroll'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import './css/fonts.css';
import './css/main.css';

function App() {
  return (
    <HashRouter>
      <div>
        <Header />
        <div className="content">
          <Menu />
          <div className="content-route-wrapper">
            <Routes>
              <Route path="/verify/*" element={<Verify />} />
              <Route path="/enroll/*" element={<Enroll />} />
            </Routes>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
