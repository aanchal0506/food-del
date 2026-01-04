import React, {useState,useContext} from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { StoreContext } from '../../Context/StoreContext'
import {Link} from 'react-router-dom'
const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState("All");
    const { CartItem, food_list, removeFromCart,getTotalCartAmt } = useContext(StoreContext);
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt='Logo' className='logo' /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>HOME</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>MENU</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>MOBILE APP</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>CONTACT US</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
           <Link to='/Cart'><img  src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmt()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>
            Sign In
        </button>
      </div>
    </div>
  )
}

export default Navbar
