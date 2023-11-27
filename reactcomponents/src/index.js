import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './App';
import {Movies as Movie} from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <body>
       <Header/>
       <Movie/>
    </body>
  </React.StrictMode>
)