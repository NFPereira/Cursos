import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponents from './components/MyComponents'

function App() {

  return (
    <>
      <div className="App">
        {/* CSS global */}
        <h1>React com  CSS</h1>
        {/* CSS de components */}
        <MyComponents />
        <p>Este parágrafo é do App.jsx</p>
      </div>
    </>
  )
}

export default App
