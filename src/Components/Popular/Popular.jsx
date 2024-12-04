
// import React from 'react'
import './Popular.css'
// import { laptops } from '../../assets/Constant'
// // import { laptops } from '../../assets/Constant'
// // import { new_collections } from '../../assets/Constant'
// import Items from '../Items/Items'
// const Popular = () => {
//   return (
//     <div className='popular'>
//       <h1>Popular in Laptops</h1>
//       <hr />
//       <div className="popular-item">
//         {laptops.map((items, index)=>{
//             return(
//                 // <Items key={index} id={items.id} name={items.name} image={items.image} new_price={items.price} old_price={items.price} />
//                 <Items key={index} id={items.id} name={items.name} image={items.image} new_price={items.price} old_price={items.price} />

//             )
//         })}
//       </div>
//     </div>
//   )
// }

// export default Popular




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