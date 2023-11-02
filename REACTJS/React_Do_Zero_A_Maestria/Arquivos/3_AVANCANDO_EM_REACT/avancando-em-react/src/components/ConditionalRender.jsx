import React, { useState } from 'react'

const ConditionalRender = () => {
   const [x] = useState(false);

   const [name] = useState("Nilson")

   return (
      <div>
         <h1>Isso será exibido ?</h1>
         {x && <p>Se x for true, sim!</p>}
         {!x && <p>Agora o x é falso</p>}
         {name == "Nilson" ? <div><p> O nome é Nilson</p></div> : <div><p>Nome não encontrado</p></div>}
      </div>
   )
}

export default ConditionalRender