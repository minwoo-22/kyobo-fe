import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header, Game } from './components'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Game />
  </React.StrictMode>
)
