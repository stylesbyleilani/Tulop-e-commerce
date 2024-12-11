
import './Popular.css'
import React from 'react'
import { laptops } from '../../assets/Constant'
import Items from '../Items/Items'

const Popular = () => {
  return (
    <div className='popular-section'>
      <div className="popular-container">
        <h2>Popular in Laptops</h2>
        <div className="popular-grid">
          {laptops.map((laptop) => (
            <Items 
              key={laptop.id} 
              id={laptop.id} 
              name={laptop.name} 
              image={laptop.image} 
              new_price={laptop.price} 
              old_price={laptop.price} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Popular