import React from 'react'
import './Product.css'
function Product({id,name,image}) {
    return (
        <div className='product'>
            <img src={image} alt=''/>
            <h2>{name}</h2>
        </div>
    )
}

export default Product
