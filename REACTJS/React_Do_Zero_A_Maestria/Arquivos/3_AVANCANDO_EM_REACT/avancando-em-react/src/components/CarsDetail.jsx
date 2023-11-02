import React from 'react'

/* Detructuring em props */
const CarsDetail = ({marca, km, cor}) => {
   return (
      <div>
         <h1>Detalhes do carro</h1>
         <ul>
            <li>Marca:{marca}</li>
            <li>KM: {km}</li>
            <li>Cor: {cor}</li>
         </ul>
      </div>
   )
}

export default CarsDetail