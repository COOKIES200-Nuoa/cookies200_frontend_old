(window as any).global = window;

import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx'
import './styles/index.scss'
import '@fontsource-variable/nunito'; // Supports weights 200-900

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
