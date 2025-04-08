import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/font.css'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import { weatherReducer } from './store/WeatherSlice.js'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: {
    weather: weatherReducer
  }
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />    
    </Provider>
  </StrictMode>,
)
