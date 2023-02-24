import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App'
import {App} from './components'//importo archivo hijo
import './styles/index.css'
//archivo padre
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />{/* coloco en escena el hijo */}
  </React.StrictMode>,
)
