{/*This is an API */ }


import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)
const StoreContextProvider = (props) => {
    const [CartItem, SetCartItem] = useState({});
    const addToCart = (itemId) => {
        if (!CartItem[itemId]) {
            SetCartItem((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            SetCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }
    const removeFromCart = (itemId) => {
        if (CartItem[itemId] > 0) {
            SetCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        }
    }
    const getTotalCartAmt = () => {
        let totalAmount = 0;
        for (const item in CartItem) {
            if (CartItem[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * CartItem[item];
            }
        }
        return totalAmount;
    }
    const contextValue = {
        food_list, CartItem, SetCartItem, addToCart, removeFromCart,getTotalCartAmt
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider