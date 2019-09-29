import React from 'react';
import logo from './logo.svg';
import './App.css';
import './i18n';
import { withTranslation, Trans } from 'react-i18next';

function changeLanguage(i18n, lang) {
  i18n.changeLanguage(lang);
}

function App({ t, i18n }) {
  const filename = 'src/App.js';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Trans i18nKey="Save to Reload text">
            Edit <code>{{ filename }}</code> and save to reload.
          </Trans>
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
