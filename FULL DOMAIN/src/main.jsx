import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorBoundary from './Error/ErrorBoundary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary fallback="There was an error occured in the app">
      <App/>
    </ErrorBoundary>
  </StrictMode>,
)
