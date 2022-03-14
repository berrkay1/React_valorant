import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppLevelProvider from './context/AppLeveContext';

ReactDOM.render(
  <React.StrictMode>
    <AppLevelProvider>
    <App />
    </AppLevelProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
