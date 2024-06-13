import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { CounterApp } from './01-useState/CounterApp.tsx'
// import { HooksApp } from './pages/HooksApp';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    < CounterApp/>
  </React.StrictMode>,
)
