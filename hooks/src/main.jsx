import React from 'react';
import ReactDOM from 'react-dom/client';
import { Hooks } from './Hooks';
import { CounterApp } from './useState/CounterApp'
import { CounterAppCustom } from './useState/CounterAppCustom'
import { SimpleForm } from './useEffect/SimpleForm'
import { CustomForm } from './useEffect/CustomForm'
import './index.css';
import { FocusScreen } from './useRef/FocusScreen';
import { Memorize } from './memo/Memorize';
import { MemorizeCustom } from './memo/MemorizeCustom';
import { CallBack } from './memo/CallBack';
import { TaskManager } from './useReducer/TaskManager';
import { MainPage } from './useContext/MainPage';
import { BrowserRouter, createBrowserRouter, RouterProvider, } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <Hooks /> */}
      {/* <CounterApp /> */}
      {/* <CounterAppCustom /> */}
      {/* <SimpleForm /> */}
      {/* <CustomForm /> */}
      {/* <FocusScreen /> */}
      {/* <Memorize /> */}
      {/* <MemorizeCustom /> */}
      {/* <CallBack /> */}
      {/* <TaskManager /> */}
      <MainPage />
    </React.StrictMode>
  </BrowserRouter>
)
