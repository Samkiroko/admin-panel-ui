import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Product</h1>
        <Link>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
    </div>
  )
}

export default Product
