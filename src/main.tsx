import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { HooksApp } from './pages/HooksApp';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    < HooksApp/>
  </React.StrictMode>,
)
