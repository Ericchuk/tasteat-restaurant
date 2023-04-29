import {useState, createContext} from 'react';
export const cartContext = createContext();
export const cartProvider = (prop) => {
    const [cartItems, setCartItems] = useState([
        {
            id:0,
            name:"Spicy seasoned seafood noodles",
            price:"2.28",
            quantity:1,
        }
    ]);

    return(
        <cartContext.Provider value={{cartItems, setCartItems}}>
            {children}
        </cartContext.Provider>
    )
}