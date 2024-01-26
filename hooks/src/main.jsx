import React from 'react';
import ReactDOM from 'react-dom/client';
import { Hooks } from './Hooks';
import './index.css';
import { CounterApp } from './useState/CounterApp';
import { CounterAppCustom } from './useState/CounterAppCustom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Hooks /> */}
    {/* <CounterApp /> */}
    <CounterAppCustom />
  </React.StrictMode>
)
