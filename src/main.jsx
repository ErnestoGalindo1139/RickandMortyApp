import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'
import { RickAndMortyApp } from './RickAndMortyApp'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <RickAndMortyApp />
    </HashRouter>
  </React.StrictMode>,
)
