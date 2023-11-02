import React, { useState } from 'react'

const ListRender = () => {
   const [list] = useState(["Nilson", "Nilton", "Noeli", "Maria", "Carlos"]);

   const [users, setUsers] = useState([
      { id: 1, name: "Nilson", age: 38 },
      { id: 2, name: "Nilton", age: 41 },
      { id: 3, name: "Noeli", age: 44 },
   ])

   const deleteRandom = () =>{
      const randonNumber = Math.floor(Math.random() * 4);


      
      setUsers((prevUsers)=>{
         console.log(prevUsers);
         return prevUsers.filter((user)=> randonNumber !== user.id)
      })
   }


   return (
      <>
         <div>ListRender</div>
         <ul>
            {list.map((item, index) => (
               <li key={index}>{index} - {item}</li>

            ))}
         </ul>

         <ul>
            {users.map((user) => (
               <li key={user.id}>{user.id} - {user.name} - {user.age}</li>
            ))}
         </ul>

         <button onClick={deleteRandom}>Delete Users</button>
      </>
   )
   }

   export default ListRender