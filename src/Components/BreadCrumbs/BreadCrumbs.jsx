import React from 'react'
import "./BreadCrumbs.css"
const BreadCrumbs = (props) => {
    const product = props;
  return (
    <div className='breadcrumbs'>
       {product.category} {product.name} {product.image}
    </div>
  )
}

export default BreadCrumbs
