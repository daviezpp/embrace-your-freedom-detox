
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Assegurando que o React renderiza apenas após a inicialização do Facebook Pixel
document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById("root")!).render(<App />);
});
