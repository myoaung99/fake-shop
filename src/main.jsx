import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import {Provider} from "react-redux";
import store from './components/App/store'
import './main.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
          <HashRouter>
              <App />
          </HashRouter>
    </Provider>
  </React.StrictMode>,
)
