import React from 'react';
import ReactDOM from 'react-dom/client';
import HomeContextProvider from './context/HomeContext.jsx';
import App from './App.jsx';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomeContextProvider>
      <App />
    </HomeContextProvider>
  </React.StrictMode>
);
