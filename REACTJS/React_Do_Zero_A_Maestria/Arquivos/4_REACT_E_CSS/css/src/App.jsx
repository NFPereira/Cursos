import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponents from './components/MyComponents'

function App() {
  const n = 10;
  const [name] = useState("Nilson")

  const redTitle = true;

  return (
    <>
      <div className="App">
        {/* CSS global */}
        <h1>React com  CSS</h1>
        {/* CSS de components */}
        <MyComponents />
        <p>Este parágrafo é do App.jsx</p>
        {/* Inline css */}
        <p style={{ color: "red", padding: "25px", borderTop: "2px solid teal" }}>Este elemento foi estilizado de forma inline</p>

        {/* CSS Inline dinamico */}
        <h2 style={n < 10 ? ({ color: "green" }) : ({ color: "#ffbb33" })}>Css style dinâmico</h2>

        <h2 style={name === "Nilson" ? ({color:"#fff", background:"red"}) : ({color: "#000", background: "blue"})}>{name}</h2>

        {/* Classe dinâmica */}
        <h2 className={redTitle ? "red-title": "title"}>
          Este título via ter classe dinâmica
        </h2>
      </div>
    </>
  )
}

export default App
