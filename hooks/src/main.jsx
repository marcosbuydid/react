import React from 'react';
import ReactDOM from 'react-dom/client';
import { Hooks } from './Hooks';
import './index.css';
import { CounterApp } from './useState/CounterApp';
import { CounterAppCustom } from './useState/CounterAppCustom';
import { SimpleForm } from './hooks/useEffect/SimpleForm';
import { CustomForm } from './hooks/useEffect/CustomForm';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hooks />
    {/* <CounterApp /> */}
    {/* <CounterAppCustom /> */}
    {/* <SimpleForm /> */}
    {/* <CustomForm /> */}

  </React.StrictMode>
)
