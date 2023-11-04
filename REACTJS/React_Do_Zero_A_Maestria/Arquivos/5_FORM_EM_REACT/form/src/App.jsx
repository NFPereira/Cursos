import { useState } from 'react'
import './App.css'
import MyForms from './components/MyForms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <h2>Forms</h2>
      <MyForms user={{name:"Nilson Flávio Pereira", email:"nilsonfpereira@hotmail.com", bio:"Sou um programador", role:"admin"}}/>
    </div>
    </>
  )
}

export default App
