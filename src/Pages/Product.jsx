

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

    const product = category_list?.find((item) => {
        console.log('Comparing:', item.Id, 'with', productId);
        return String(item.Id) === productId;
    });

    useEffect(() => {
        console.log('Found product:', product);
    }, [product]);

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