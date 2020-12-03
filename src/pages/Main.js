import React, {useEffect, useState} from 'react';
import api from '../services/api'
import './Main.css'
import {Link} from 'react-router-dom'


export default function Main() {
  const [products, setProducts] = useState([]);
  const [productInfo, setproductInfo] = useState({})
  const [page, setPage] = useState(1)

  useEffect(() =>{
    const loadProducts = async () =>{
      const response = await api.get(`/products?page=${page}`)
      setProducts(response.data.docs)
      setproductInfo(response.data)
    }
    
    loadProducts()
  },[page])

  const nextPage = () =>{
   // Verifica se esta na ultima pagina, caso seja verdadeiro da um return e não faz nada
    if(page === productInfo.pages) return

    setPage(page + 1)
  }

  const prevPage = () =>{
    // Verifica se esta na primeira pagina, caso seja verdadeiro da um return e não faz nada
    if(page === 1) return

    setPage(page - 1)
  }

  return (
    <div className='product-list'>
      {products.map((product) => {
        return (
         <article key={product._id}>
           <strong>{product.title}</strong>
           <p>{product.description}</p>

           <Link to={`/products/${product._id}`}> Acessar </Link>
         </article>
        );
      })}
      <div className='actions'>
        <button disabled={page === 1} onClick={prevPage}>Anterior</button>
        <button disabled={page === productInfo.pages} onClick={nextPage}>Próximo</button>
      </div>
    </div>
  );
}
