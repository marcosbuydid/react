import React from 'react';
import ReactDOM from 'react-dom/client';
import { Hooks } from './Hooks';
import { CounterApp } from './useState/CounterApp'
import { CounterAppCustom } from './useState/CounterAppCustom'
import { SimpleForm } from './useEffect/SimpleForm'
import { CustomForm } from './useEffect/CustomForm'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hooks />
    {/* <CounterApp /> */}
    {/* <CounterAppCustom /> */}
    {/* <SimpleForm /> */}
    {/* <CustomForm /> */}

  </React.StrictMode>
)
