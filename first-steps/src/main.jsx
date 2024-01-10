import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App propOne="This is propOne" propTwo="This is propTwo" />
    </React.StrictMode>
);