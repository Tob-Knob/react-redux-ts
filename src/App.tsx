import React from 'react';
import { Container, Typography, Box, Link } from "@mui/material";
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <Link
            color="inherit"
            href='https://reactjs.org/'
            target="_blank"
            rel="noopener noreferrer">
              React
            </Link>
          <span>, </span>
          <Link
            color="inherit"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </Link>
          <span>, </span>
          <Link
            color="inherit"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </Link>
          ,<span> and </span>
          <Link
            color="inherit"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </Link>
        </span>
      </header>
    </div>
  );
}

export default App;
