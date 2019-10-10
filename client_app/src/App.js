import React from 'react';
import Routes from './routes';
import './App.css';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="aircnc" className="brand_img" />

      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
