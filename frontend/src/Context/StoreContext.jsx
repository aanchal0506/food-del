{/*This is an API */}


import { createContext, useEffect, useState } from "react";
import {food_list} from "../assets/assets";
export const StoreContext=createContext(null)
const StoreContextProvider=(props)=>{
    const [CartItem,SetCartItem]=useState({});
    const addToCart=(itemId)=>{
        if(!CartItem[itemId]){
            SetCartItem((prev)=>({...prev,[itemId]:1}))
        }
        else{
            SetCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart=(itemId)=>{
        if(CartItem[itemId]>0){
            SetCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        }
    }
    useEffect(()=>{
        console.log(CartItem);
    },[CartItem])
    const contextValue={
        food_list,CartItem,SetCartItem,addToCart,removeFromCart
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider