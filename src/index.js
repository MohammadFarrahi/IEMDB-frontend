import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);