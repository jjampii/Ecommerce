import React, {useState} from 'react'
import {Link} from 'react-router-dom';

import style from '../styles/navbar-style.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import {useStateContext} from '../context/ContextState.js'
import Cart from './Cart.js';
function Navbar() {

  const {ShowCart, totalQty,toggleCart, isToggle,cartItems} = useStateContext();
  console.log(ShowCart);

  const cartCounter = () => {
    let count = 0
    const key = Object.keys(cartItems);

    key.forEach((item) => {
       if(cartItems[item] > 0){
        count = count + 1;
       }

    })
  

  
    return count
  }
 
  return (
    <div className='container'  >
      <Link to={`/`} style={{color: 'white', textDecoration: 'none'}}>
      <p className='brand'>Ecommerce</p>
      </Link>
      
      <Badge badgeContent={cartCounter()} color='primary'>
        <button type='button' onClick={toggleCart}>
          <ShoppingCartOutlinedIcon  sx={{width:40, height:40}}/>
        </button>
      </Badge>

      { isToggle && <Cart /> } 
    </div>
  )
}


export default Navbar