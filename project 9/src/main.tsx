import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { preloadImages } from './utils/imageLoader';

// Preload critical images
const criticalImages = [
  'https://imgur.com/bU4OA8t.jpg',
  'https://imgur.com/T3xD3ZS.jpg',
  'https://imgur.com/ulLsXP1.jpg',
  'https://imgur.com/VnBxcIT.jpg'
];

// Start preloading images immediately
preloadImages(criticalImages).catch(console.error);

// Create root with automatic batching
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Remove console.log in production
if (import.meta.env.PROD) {
  console.log = () => {};
  console.warn = () => {};
  console.error = () => {};
}