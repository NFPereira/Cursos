import React from 'react'

/* Destructuring em props */
const CarsDetail = ({marca, km, cor, newCar, keyId}) => {
   return (
      <>
         <h1>Detalhes do carro</h1>
         <ul key={keyId} >
            <li>Marca:{marca}</li>
            <li>KM: {km}</li>
            <li>Cor: {cor}</li>
         </ul>
         {newCar && <p>Este carro é novo!</p> }
      </>
   )
}

export default CarsDetail