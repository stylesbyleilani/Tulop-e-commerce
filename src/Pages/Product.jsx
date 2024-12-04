








// const Product = () => {
//   const { category_list } = useContext(ShopContext);
//   const params = useParams();

//   // More comprehensive debugging
//   console.log('Full params object:', params);
//   console.log('Product ID from params:', params.productId);
//   console.log('Type of Product ID:', typeof params.productId);
//   console.log('All category items:', category_list);
//   console.log('Category list length:', category_list?.length);

//   // Early return for invalid scenarios
//   if (!params.productId) {
//     return <p>Invalid product link</p>;
//   }

//   const product = category_list?.find((e) => 
//     String(e.Id) === String(params.productId)
//   );

//   console.log('Found product:', product);

//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   return (
//     <div className='product'>
//       <BreadCrumbs product={product} />
//       <ProductDisplay product={product} />
//     </div>
//   );
// };




// import React, { useContext, useEffect } from 'react';
// import { useParams, useLocation, useNavigate } from 'react-router-dom';
// import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs';
// import { ShopContext } from '../Context/Context';
// import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

// const Product = () => {
//     const { category_list } = useContext(ShopContext);
//     const params = useParams();
//     const location = useLocation();
//     const navigate = useNavigate();
  
//     useEffect(() => {
//         console.log('====== Product Page Debug ======');
//         console.log('Full params object:', JSON.stringify(params));
//         console.log('Current location:', location);
//         console.log('Current pathname:', location.pathname);
//         console.log('Product ID from URL:', params.productId);
//         console.log('Product ID type:', typeof params.productId);
//         console.log('Category list length:', category_list?.length);
        
//         // Additional check for params
//         Object.keys(params).forEach(key => {
//             console.log(`Param ${key}:`, params[key]);
//         });
//     }, [params, location, category_list]);
  
//     // Early return for invalid scenarios
//     if (!params.productId) {
//         console.error('No product ID found in params');
//         return <p>Invalid product link</p>;
//     }
  
//     const product = category_list?.find((e) => 
//         String(e.Id) === String(params.productId)
//     );
  
//     console.log('Found product:', product);
  
//     if (!product) {
//         console.error('No product found for ID:', params.productId);
//         return <p>Product not found</p>;
//     }
  
//     return (
//       <div className='product'>
//         <BreadCrumbs product={product} />
//         <ProductDisplay product={product} />
//       </div>
//     );
// };

// export default Product;





// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useLocation } from 'react-router-dom';
// import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs';
// import { ShopContext } from '../Context/Context';
// import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

// const Product = () => {
//     const { category_list } = useContext(ShopContext);
//     const params = useParams();
//     const location = useLocation();
//     const [product, setProduct] = useState(null);

//     useEffect(() => {
//         console.log('====== Product Page Debug ======');
//         console.log('Full params object:', JSON.stringify(params));
//         console.log('Current location:', location);
//         console.log('Current pathname:', location.pathname);
//         console.log('Product ID from URL:', params.productId);
//         console.log('Product ID type:', typeof params.productId);
//         console.log('Category list length:', category_list?.length);
//         console.log('Category list first item:', category_list?.[0]);

//         // Try to find the product
//         if (params.productId && category_list) {
//             const foundProduct = category_list.find((e) => {
//                 console.log('Checking product:', e.Id, 'against', params.productId);
//                 return String(e.Id) === String(params.productId);
//             });
            
//             console.log('Found product:', foundProduct);
//             setProduct(foundProduct);
//         }
//     }, [params.productId, category_list, location]);

//     // If no product found
//     if (!product) {
//         return <p>Loading product or product not found...</p>;
//     }

//     return (
//       <div className='product'>
//         <BreadCrumbs product={product} />
//         <ProductDisplay product={product} />
//       </div>
//     );
// };

// export default Product;






import React, { useContext, useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs';
import { ShopContext } from '../Context/Context';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
    const { category_list } = useContext(ShopContext);
    const { productId } = useParams();

    useEffect(() => {
        console.log('Raw productId:', productId);
        console.log('Type of productId:', typeof productId);
        console.log('Category list length:', category_list?.length);
    }, [productId, category_list]);

    // Detailed product finding logic
    const product = category_list?.find((item) => {
        console.log('Comparing:', item.Id, 'with', productId);
        return String(item.Id) === productId;
    });

    useEffect(() => {
        console.log('Found product:', product);
    }, [product]);

    // If no product found
    if (!product) {
        return <p>Loading product or product not found...</p>;
    }

    return (
      <div className='product'>
        <BreadCrumbs product={product} />
        <ProductDisplay product={product} />
      </div>
    );
};

export default Product;