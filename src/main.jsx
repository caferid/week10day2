import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Wish_Context } from './Contex/Contex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Wish_Context>
    <App />
    </Wish_Context>
  </React.StrictMode>,
)
