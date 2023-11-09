import { Container } from '@mui/system'
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {AiOutlineLeft, AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import {useStateContext} from '../context/ContextState.js'
import {products} from '../data.js'

const Cart = () => {

    const {cartItems, isToggle, toggleCart, calculateTotal, addToCart,removeFromCart} = useStateContext()
    const [isDisabled, setIsDisabled] = useState(false);
    const totalAmount = calculateTotal();
    
   
  return (
    <MainCart>

    <CartContainer>
        <AiOutlineLeft style ={{color: 'black', marginRight: '10px', cursor:'pointer'}} onClick={toggleCart}/>
        <span>Your Cart </span>
    
        <span class="qty-text"> </span>
      {products.map((prod) => {
        if(cartItems[prod.id] > 0){
          return (
            <ItemContainer>
            <Left>
                <img src={prod.url}/>
            </Left>
            <Right>
                    <span>{prod.title}</span>
                    
                    <p className='price'>P{prod.price}</p>
                <Buttons>
                    <button disabled={isDisabled} className='minus' onClick={() => removeFromCart(prod.id, 1)}>
                
                        <AiOutlineMinus />
                      
                    
                    </button>
                    <button className='qty'>{cartItems[prod.id]}</button>
                    <button className='plus'  onClick={() => addToCart(prod.id, 1)} ><AiOutlinePlus/></button>
                </Buttons>
            </Right>

                 
            </ItemContainer>
          )
        }
      })}
        <Bottom>
                <span>Total Amount: </span>
               <span className='total'>P{totalAmount}.00</span>

               <button>CHECKOUT</button>
       </Bottom>
    </CartContainer>
  </MainCart>
  )
}

const MainCart = styled.div`
height:100vh;
color:black;
position:fixed;
width: 400px;
overflow-y:auto;
  background-color: white;
  top:0;
  right:0;
  bottom:0;
  z-index:100;
  padding: 40px 10px;
  border:1px solid black;
`
const CartContainer = styled.div`


height:90%;

overflow-y:auto;


  input.qty{
    color:red;
  }
  span.noItems{
    margin-left:10px;
    color:red;
  }
  
`
const ItemContainer = styled.div`
display:flex;
padding:20px;

gap:20px;

position:relative;

img{
    width:150px ;
    height: 130px;
      border-radius: 15px;
   border:1px solid black;
}
p{
  align-self:end;
}

`
const Buttons = styled.div`
position:absolute;
bottom:0;
padding:30px 0;
display:flex;
align-items:center;
justify-items:center;
span{
  width: 40px;
  height:40px;
  text-align: center;
  font-weight: bolder;
padding:6px 12px;
border:1px solid black;
bottom:0;

}
span.minus, span.qty{
    
}
button.qty{
  border:1px solid black;
}
button{
  width:60px;
  text-align: center;
  font-weight: bolder;
  
  height:40px;
  color:black;
}

`
const Left = styled.div`


`
const Right = styled.div`
 p{
  position:absolute;
  top:20px;
  right:10px;
 }
span{
    
    font-weight:500;
    text-align:start;
    max-width:50px;
    text-wrap:wrap;
}
button.minus, button.plus{
  border:1px solid;
  cursor:pointer;
}

`
const Bottom = styled.div`
font-size:20px;
color:black;
display:flex;
position:absolute;
bottom:20px;
margin: 0, auto;
align-items:center;
justify-content:space-between;
width:100%;
padding:10px;


span.total{

  color:red;
  font-weight:500;
}

button{
  width: 150px;
  height: 50px;
  background-color: rgb(19, 19, 19);
  color: white;
  border: none;
  border-radius: 8px;
  margin: 10px;
  cursor: pointer;
}
`

export default Cart