import React from 'react'

const Challenge = () => {
   const number1 = 10;
   const number2 = 20;

   const handleSome = (number1, number2) => {
      console.log(number1 + number2);
   }

  return (
    <div>
      <p>Primeiro Número = {number1} - Segundo Número = {number2}</p>
      <button onClick={() => handleSome(number1, number2)}>Clique para somar</button>
    </div>
  )
}

export default Challenge