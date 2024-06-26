import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import './styles/index.scss';


// import { CounterApp } from './01-useState/CounterApp.tsx';
// import { HooksApp } from './pages/HooksApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEfffect/SimpleForm';
// import { FormWithCustomHook } from '../src/02-useEfffect/FormWithCustomHook';
// import { MultipleCustomHooks } from '../src/03-examples/MultipleCustomHooks';
// import { FocusScreen } from '../src/04-useRef/FocusScreen';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';

import './08-useReducer/intro-reducer';


ReactDOM.createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    {/* <React.StrictMode> */}
    <MainApp/>
  {/* </React.StrictMode> */}
  </BrowserRouter>

)
