import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './0 - app/app.tsx';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
