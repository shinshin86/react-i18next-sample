import React from 'react';
import logo from './logo.svg';
import './App.css';
import './i18n';
import { withTranslation, Trans } from 'react-i18next';

const FILE_NAME = 'src/App.js';

const langTextMap = {
  en: 'Language',
  ja: '言語',
};

function App({ t, i18n }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Trans i18nKey="Save to Reload text">
            Edit <code>{{ filename: FILE_NAME }}</code> and save to reload.
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
          <p>
            {t('Change Language', { langText: langTextMap[i18n.language] })}
          </p>
          <button onClick={() => i18n.changeLanguage('en')}>en</button>
          <button onClick={() => i18n.changeLanguage('ja')}>ja</button>
        </div>
      </header>
    </div>
  );
}

export default withTranslation()(App);
