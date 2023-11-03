import React from 'react'

const UserDetails = ({nome, idade, sexo, job}) => {
  return (
    <div>
      <ul>
         <li>Nome: {nome} - Idade: {idade} - Sexo: {sexo} - Profissão: {job} </li>
         {idade >= 18 ? <p>Permissão para tirar carteira de habilitação</p> : <p>Idade não permite tirar carteira de habilitação</p>}
      </ul>
    </div>
  )
}

export default UserDetails