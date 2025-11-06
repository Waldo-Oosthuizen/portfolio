import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-gradient-to-b from-[#1e1e1e] via-[#151515] to-[#121212] text-white">
      <App />
    </div>
  </StrictMode>
);
