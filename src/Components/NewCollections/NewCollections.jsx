import React from 'react'
import "./NewCollections.css"
import { new_collections } from '../../assets/Constant'
import Items from '../Items/Items'
const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
    {new_collections.map((items,index)=>{
        return(
            <Items key={index} 
            id={items.id} 
            name={items.name}  
               description={items.description}
             image={items.image}
              new_price={items.price} 
              old_price={items.price} />

        )
    })}
      </div>
    </div>
  )
}

export default NewCollections
