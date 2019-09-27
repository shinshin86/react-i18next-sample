import React from 'react';
import logo from './logo.svg';
import './App.css';
import './i18n';
import { withTranslation } from 'react-i18next';

function changeLanguage(i18n, lang) {
  i18n.changeLanguage(lang);
}

function App({ t, i18n }) {
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
        <div>
          <p>Change Language</p>
          <button onClick={() => changeLanguage(i18n, 'en')}>en</button>
          <button onClick={() => changeLanguage(i18n, 'ja')}>ja</button>
        </div>
      </header>
    </div>
  );
}

export default withTranslation()(App);
