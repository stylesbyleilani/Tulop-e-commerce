
// import { createContext, useEffect, useState } from "react";
// import { category_list } from "../assets/Constant";

// export const ShopContext = createContext(null);
// const deaultCart = ()=>{
//     let cart = {};
//     for (let index = 0; index < category_list.length+1; index++){
//         cart[index] = 0;
//     }
//     return cart
// }

// const ShopContextProvider = (props) =>{
//     const [cartitem,setCartitem] = useState(deaultCart())
//   console.log(cartitem,"cart item data")
//     // const contextValue = {category_list}

// useEffect(() => {
//         console.log(cartitem, "updated cart item data");
//     }, [cartitem]);


//     const addtoCart=(itemId)=>{
//   setCartitem((prev)=>({...prev,[itemId]:prev[itemId]+1}));
//   console.log(cartitem,"cartitem in shop context");
//     }
//     const removeCart=(itemId)=>{
//         setCartitem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
//           }
//           const contextValue = {category_list,cartitem,addtoCart,removeCart}

//  return(
//     <ShopContext.Provider value={contextValue}>
//         {props.children}
//     </ShopContext.Provider>
//  )

    
// }
// export default ShopContextProvider




import { createContext, useEffect, useState } from "react";
import { category_list } from "../assets/Constant";

export const ShopContext = createContext(null);

const defaultCart = () => {
    let cart = {};
    for (let index = 0; index < category_list.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartitem, setCartitem] = useState(defaultCart());
    const [cartItemCount, setCartItemCount] = useState(0);

    useEffect(() => {
        // Calculate total items in cart
        const totalItems = Object.values(cartitem).reduce((total, quantity) => total + quantity, 0);
        setCartItemCount(totalItems);
    }, [cartitem]);

    const addtoCart = (itemId) => {
        setCartitem((prev) => ({
            ...prev,
            [itemId]: prev[itemId] + 1
        }));
    }

    const removeCart = (itemId) => {
        if (cartitem[itemId] > 0) {
            setCartitem((prev) => ({
                ...prev,
                [itemId]: prev[itemId] - 1
            }));
        }
    }

    const removeItemCompletely = (itemId) => {
        setCartitem((prev) => {
            const newCart = {...prev};
            newCart[itemId] = 0;
            return newCart;
        });
    }

    const contextValue = {
        category_list,
        cartitem,
        addtoCart,
        removeCart,
        removeItemCompletely,
        cartItemCount
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;