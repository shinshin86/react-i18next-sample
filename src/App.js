import React from 'react';
import logo from './logo.svg';
import './App.css';
import './i18n';
import { withTranslation } from 'react-i18next';

function App({ t }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('Learn React')}
        </a>
      </header>
    </div>
  );
}

export default withTranslation()(App);
