import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Main-file.css';
import App from './App.jsx';
import { App2 } from './App2.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);