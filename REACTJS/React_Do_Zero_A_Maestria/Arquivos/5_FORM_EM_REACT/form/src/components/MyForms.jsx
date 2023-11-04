import React, { useState } from 'react'
import './MyForms.css'


const MyForms = ({ user }) => {
   // 3 - Gerenciamento de dados
   const [name, setName] = useState(user ? user.name : "");
   const [email, setEmail] = useState(user ? user.email : "");

   const [bio, setBio] = useState(user ? user.bio : "");

   const [role, setRole] = useState(user ? user.role : "");

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(name + ' - ' + email + ' - ' + bio + ' - ' + role);

      // 7 - Limpar form
      setName("")
      setEmail("");
      setBio("");
      setRole("");
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="name">Nome:</label>
               <input type="text" name="name" placeholder="Digite o seu nome" onChange={(e) => setName(e.target.value)} value={name} />
            </div>
            {/* 2 - label envolvendo input */}
            <label>
               <span>E-mail</span>
               <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
            <span>Biografia</span>
            {/* 8 - textarea */}
            <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            {/* 9 - select   */}
            <label>
               <span>Função no sistema</span>
               <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                  <option value="">Selecione</option>
                  <option value="user">Usuário</option>
                  <option value="editor">Editor</option>
                  <option value="admin">Administrador</option>
               </select>
            </label>

            <input type="submit" value="Enviar" />
         </form>
      </div>
   )
}

export default MyForms