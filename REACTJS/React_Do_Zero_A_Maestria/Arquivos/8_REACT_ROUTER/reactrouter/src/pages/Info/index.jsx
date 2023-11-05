import React from 'react'
import { useParams } from 'react-router-dom'

import './styles.css'

const Info = () => {
   const { id } = useParams();
   return (
      <div className='info'><h2>ID selecionado {id}</h2></div>
   )
}

export default Info