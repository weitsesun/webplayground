import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Post'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Posts/>
        </p>
      </header>
    </div>
  );
}

export default App;
