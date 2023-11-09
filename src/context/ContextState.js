import React,{createContext, useContext, useState, useEffect} from 'react'
import {products} from '../data.js'

const Context = createContext();

const getDefaultCart = () => {
    let cart ={};

    for(let i = 1 ; i <= products.length ; i++){
        cart[i] = 0; 
    }
    return cart
}

export const StateContext = ({children}) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [isToggle, setIsToggle] = useState(false);
   
     
        
    const addToCart = (itemId, qty) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + qty}))
    };
    const removeFromCart = (itemId) => {
        

        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    };

    const toggleCart = () => {
       setIsToggle(!isToggle);
       console.log(isToggle);
    }

    const calculateTotal = () => {
        let totalAmount = 0;
        for(let item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = products.find((prod) => prod.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }
    console.log(cartItems);
    calculateTotal();
    
    return (
        <Context.Provider value={{
            
            cartItems,
            setCartItems,
            addToCart,
            removeFromCart,
            toggleCart,
            isToggle,
            setIsToggle,
            calculateTotal,
           
        }}>
            {children}
        </Context.Provider>
    )
}   


export const useStateContext = () => useContext(Context);