import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
// import { CounterApp } from './01-useState/CounterApp.tsx';
// import { HooksApp } from './pages/HooksApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEfffect/SimpleForm';
// import { FormWithCustomHook } from '../src/02-useEfffect/FormWithCustomHook';
import { MultipleCustomHooks } from '../src/03-examples/MultipleCustomHooks';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MultipleCustomHooks/>
  </React.StrictMode>,
)
