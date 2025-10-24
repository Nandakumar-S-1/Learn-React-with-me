import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from '../src/Practice/Error/ErrorBoundary.jsx'
// import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './Store/Store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary fallback="There was an error occured in the app">
      <Provider store={store}>
        <App/>
      </Provider>
    </ErrorBoundary>
  </StrictMode>,
)
