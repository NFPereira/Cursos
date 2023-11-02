import React, { useState } from 'react'

//CSS
import './App.css'

//Imagens
import City from './assets/city.jpg';

//Componentes
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarsDetail from './components/CarsDetail';

const App = () => {
  const nome = "Nilson F. Pereira"
  const [userName] = useState("Nilson Flávio Pereira");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343 },
    { id: 3, brand: "Renault", color: "azul", newCar: false, km: 25871 },
  ]


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
      {/*Passando valor direto*/}
      <ShowUserName name="Nilson" />
      {/*Passando valor por variável*/}
      <ShowUserName name={nome} />
      {/*Passando valor por state*/}
      <ShowUserName name={userName} />
      {/* loop em array de objetos */}
      {cars.map((item) => (
        <CarsDetail keyId={item.id} marca={item.brand} cor={item.color} newCar={item.newCar} km={item.km}/>
      ))}
    </>
  )
}

export default App