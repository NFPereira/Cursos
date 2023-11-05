import React from 'react'
import './styles.css';

import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../../hook/useFetch';

const Product = () => {
   const { id } = useParams();
   const url = "http://localhost:3000/products/" + id;

   const { data: product, loading, error } = useFetch(url);
   return (
      <div>
         <p>
            ID do produto: {id}         </p>
         {error && <p>Ocorreu um erro...</p>}
         {loading && <p>Carregando...</p>}
         {product && (
            <div className='product'>
               <h1>{product.name}</h1>
               <p>R$: {product.price}</p>
               <h2><Link to={`/products/${id}/info`}>Mais informações</Link></h2>
            </div>
         )}

      </div>
   )
}

export default Product