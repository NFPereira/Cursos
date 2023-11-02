import React, { useState } from 'react'

const ListRender = () => {
   const [list] = useState(["Nilson", "Nilton", "Noeli", "Maria", "Carlos"]);


   return (
      <>
         <div>ListRender</div>
         <ul>
            {list.map((item, index) => (
               <li key={index}>{index} - {item}</li>        

            ))}
         </ul>
      </>
   )
}

export default ListRender