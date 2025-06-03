import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css'; // Hvis du ikke ønsker styling, lag en tom fil

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

