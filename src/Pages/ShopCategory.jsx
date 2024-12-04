

// import React, { useContext } from 'react';
// import "./CSS/ShopCategory.css";
// import { ShopContext } from '../Context/Context';
// import { IoMdArrowDropdown } from "react-icons/io";
// import Items from '../Components/Items/Items';
// import { Link } from 'react-router-dom';

// const ShopCategory = ({ category, children }) => {
//   const { category_list } = useContext(ShopContext);

//   return (
//     <div className='shop-category'>
//       {children}
//       <div className="shop-category-sort">
//         <p>
//           <span>Showing 1-12</span> out of 16 products
//         </p>
//         <div className="shop-sort">
//           sort by <IoMdArrowDropdown />
//         </div>
//       </div>
//       <div className="shopcategory-products">
//         {category_list.length > 0 ? (
//           category_list
//             .filter(item => item.category === category) // Use the category prop for filtering
//             .map(item => (

//               <Link style={{textDecoration: "none"}}
//                key={item.Id} to={`/product/${item.Id}`}>
//                   {/* onClick={() => console.log('Navigating to product ID:', item.Id)} */}
//                   onClick={(e) => {
//     console.log('Clicked product ID:', item.Id);
//     console.log('Actual Link URL:', `/product/${item.Id}`);
//   }}





//     <Items
//         name={item.name}
//         image={item.image}
//         new_price={item.price}
//         old_price={item.price}
//     />
// </Link>

//             ))
//         ) : (
//           <h1>No items found in this category.</h1>
//         )}
//       </div>
//       <div className="show-more">
//         <button>Explore more</button>
//       </div>
//     </div>
//   );
// };

// export default ShopCategory;



import React, { useContext } from 'react';
import "./CSS/ShopCategory.css";
import { ShopContext } from '../Context/Context';
import { IoMdArrowDropdown } from "react-icons/io";
import Items from '../Components/Items/Items';
import { Link, useNavigate } from 'react-router-dom';

const ShopCategory = ({ category, children }) => {
  const { category_list } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleProductNavigation = (itemId) => {
    console.log('Attempting to navigate with ID:', itemId);
    console.log('Constructed URL:', `/product/${itemId}`);
    navigate(`/product/${itemId}`);
  };

  return (
    <div className='shop-category'>
      {children}
      <div className="shop-category-sort">
        <p>
          <span>Showing 1-12</span> out of 16 products
        </p>
        <div className="shop-sort">
          sort by <IoMdArrowDropdown />
        </div>
      </div>
      <div className="shopcategory-products">
        {category_list.length > 0 ? (
          category_list
            .filter(item => item.category === category)
            .map(item => (
              <div 
                key={item.Id} 
                onClick={() => handleProductNavigation(item.Id)}
                style={{ cursor: 'pointer' }}
              >
                <Items
                  name={item.name}
                  image={item.image}
                  new_price={item.price}
                  old_price={item.price}
                />
              </div>
            ))
        ) : (
          <h1>No items found in this category.</h1>
        )}
      </div>
      <div className="show-more">
        <button>Explore more</button>
      </div>
    </div>
  );
};

export default ShopCategory;