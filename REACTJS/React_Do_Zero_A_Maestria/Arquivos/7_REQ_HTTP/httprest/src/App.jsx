import React, { useEffect, useState, useRef } from 'react'
import './App.css';
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";

const App = () => {
  const [products, setProducts] = useState([]);

  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");


  const inputRef = useRef(null);


  // const getProducts =()=>{


  // }

  //listando produtos
  // const getProducts = async () => {
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   setProducts(data);

  // }

  // useEffect(() => {
  //   getProducts();
  // }, []);

  // //adicionando produtos
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const product = {
  //     name,
  //     price
  //   }


  //   const res = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(product),
  //   });


  //   const addedProduct = await res.json();

  //   setProducts((prevProducts)=> [...prevProducts, addedProduct])

  //   inputRef.current.focus();

  //5 - refatorando post

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    }

    httpConfig(product, "POST")

    inputRef.current.focus();

    setName("");
    setPrice("");

  }

  const handleDelete = (id) => {

    httpConfig(id, "DELETE");

  }


  return (
    <>
      <div className='App'>
        <h1>Lista de Produtos</h1>
        {loading && <p>Carregando dados...</p>}
        {error && <p>{error}</p>}
        {items && items.map((product) => (
          <ul key={product.id}>
            <li>Produto: {product.name} - Preço: {product.price} - <button onClick={() => handleDelete(product.id)}>Excluir</button></li>
          </ul>
        ))}
      </div>
      <div className="add_product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} ref={inputRef} />
          </label>
          <label>
            Price:
            <input type="text" name='price' value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          <div>
            {/* state de loading no post */}
            {loading && <input type="submit" disabled value="Aguarde" />}
            {!loading && <input type="submit" value="Criar" />}
          </div>
        </form>
      </div>
    </>
  )
}

export default App