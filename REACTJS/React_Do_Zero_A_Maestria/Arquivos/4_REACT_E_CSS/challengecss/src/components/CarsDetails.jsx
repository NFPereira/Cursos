import React from 'react'
import styled from './CarsDetails.module.css';


const CarsDetails = () => {

   const cars = [
      { id: 1, marca: "VW", modelo: "Gol", cor: "Branco", km: 25000, ano: 2020 },
      { id: 2, marca: "Fiat", modelo: "Uno", cor: "Prata", km: 50000, ano: 2000 },
      { id: 3, marca: "Chevrolet", modelo: "Celta", cor: "Prata", km: 35000, ano: 2014 }
   ]

   return (
      <div>
         <ul className={styled.list_cars}>
            {cars.map((car => (
               <li key={car.id}>Marca: {car.marca} - Modelo:{car.modelo} - Cor:{car.cor}, Km:{car.km} - Ano:{car.ano}</li>
            )))}
         </ul>
      </div>
   )
}

export default CarsDetails