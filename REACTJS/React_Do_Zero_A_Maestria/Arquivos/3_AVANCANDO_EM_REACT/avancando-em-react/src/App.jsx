import React from 'react'

//CSS
import './App.css'

import City from './assets/city.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';

const App = () => {
  return (
    <>
      <div><h1>Avançando em React</h1></div>
      {/* imagem em public */}
      <div>
        <img src="/imagem1.jpeg" alt="Windows" width="100%" />
      </div>
      {/* imagem em assets */}
      <div>
        <img src={City} alt="Cidade" width="100%" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
    </>
  )
}

export default App