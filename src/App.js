import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import Link from './Link';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Navigation />
        <Link />
      </header>
    </div>
  );
}

export default App;
