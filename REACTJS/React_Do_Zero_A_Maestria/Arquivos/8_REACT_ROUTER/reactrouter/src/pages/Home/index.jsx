import React, { useState } from 'react'
import './styles.css'

import {Link} from 'react-router-dom'

import { useFetch } from '../../hook/useFetch'

const Home = () => {
   const url = "http://localhost:3000/products";


   const { data: items, loading, error } = useFetch(url);


   return (
      <div>
         <h1>Produtos</h1>
         {error && <p>{error}</p>}
         <div className='products'>
            <ul>
               {items && items.map((product) => (
                  <li key={product.id}>
                     <h2>{product.name}</h2>
                     <p>R$ {product.price}</p>
                     <Link to={`products/${product.id}`}>Detalhes</Link>
                     </li>
               ))}
            </ul>
         </div>
      </div>
   )
}

export default Home