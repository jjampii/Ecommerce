import React,{useContext} from 'react'
import style from '../styles/product-style.css'
import styled from 'styled-components';
import {useStateContext} from '../context/ContextState.js';

function Product({item}) {
  
  const {addToCart, cartItems} = useStateContext();
  
  const cartItemAmount = cartItems[item.id];
  return (
      <Container>
        <Image src={item.url} />
        <p className='title'>{item.title}</p>
        <p className='price'>{item.price}</p>
        
      </Container>
  )
}

const Container = styled.div`
border-radius: 15px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding:10px;

background-color:rgb(220,220,220);


p.title{
  font-size:22px;
  text-align:center;
  font-weight:bold;
  line-height:1.5;
  letter-spacing:1px;
}
p.price{
font-size:20px;
font-weight:semi-bold;
text-align:center;



}
button.addtocart{
  background-color: transparent;
  border: 2px solid rgb(19, 19, 19);
  min-width: 100px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 15px;
  color:black;
  font-size:20px;
  margin-top:10px;
  event:disable;
  &:hover {
    background-color: rgb(19, 19, 19);
    color: white;
    cursor: pointer;
  }
}
&:hover{
  transform: scale(1.1);
  transition : transform 300ms ease-in-out;
  cursor:pointer;
}
`
const Image = styled.img`
display:flex;
width:100%;
height:45vh;
object-fit:contain;

-webkit-filter: drop-shadow(0px 16px 10px rgba(0,0,0,0.6));
-moz-filter: drop-shadow(0px 16px 10px rgba(0,0,0,0.5));
-ms-filter: drop-shadow(0px 16px 10px rgba(0,0,0,0.4)); 
-o-filter: drop-shadow(0px 16px 10px rgba(0,0,0,0.3));
 filter: drop-shadow(0px 16px 10px rgba(0,0,0,0.3)); 


`
export default Product