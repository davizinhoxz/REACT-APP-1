import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Professor from './Professor'
import App from './App.jsx'
//import Message from './Message.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Professor />
  </StrictMode>,
)