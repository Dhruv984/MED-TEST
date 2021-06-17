import React,{useState, useEffect} from 'react'
import './Products.css'

//firebase
import db from '../../firebase'
import Product from './Product';
function Products() {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        db.collection('products').onSnapshot(snapshot=>{
            setProducts(snapshot.docs.map(doc=>doc.data()))
        })
    },[])
    return (
        <div className='products'>
            <h1>Products</h1>
            <div className='products__section'>
              {
                  products.map(product=>{
                    return <Product key={product.id} id={product.id} name={product.name} image={product.image} />
                  })
              }
            </div>
        </div>
    )
}

export default Products
