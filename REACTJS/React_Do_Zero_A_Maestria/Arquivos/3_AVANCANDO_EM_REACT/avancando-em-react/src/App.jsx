import React, { Fragment, useState } from 'react'

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
import Fragmentacao from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

const App = () => {
  const nome = "Nilson F. Pereira"
  const [userName] = useState("Nilson Flávio Pereira");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343 },
    { id: 3, brand: "Renault", color: "azul", newCar: false, km: 25871 },
  ]

  const showMessage = () => {
    console.log("Evento do componente pai!")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  const users = [
    { id: 1, nome: "Nilson Flávio Pereira", idade: 38, sexo: "Masculino", job: "Programador" },
    { id: 2, nome: "Nilton Rogério Pereira", idade: 41, sexo: "Masculino", job: "Despachante" },
    { id: 3, nome: "Noeli Pereira", idade: 44, sexo: "Feminino", job: "Funcionária Pública" },
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
        <CarsDetail key={item.id} marca={item.brand} cor={item.color} newCar={item.newCar} km={item.km} />
      ))}
      {/* fragment */}
      <Fragmentacao propFragment="teste" />
      {/* children*/}
      <Container myValue="texting">
        <p>Este é o Título do container</p>
      </Container>
      <Container myValue="texting 2">
        <p>Testando o container</p>
      </Container>

      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* Desafio 4*/}
      {users.map((user) => (
        <UserDetails key={user.id} name={user.nome} idade={user.idade} sexo={user.sexo} job={user.job} />
      ))}
    </>
  )
}

export default App