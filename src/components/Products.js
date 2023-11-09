import React from 'react'
import styled from 'styled-components'
import Product from '../components/Product.js'
import {Link} from 'react-router-dom';
import {useStateContext} from '../context/ContextState.js'
import {products} from '../data.js'
import Cart from './Cart.js'

const styledlink = {
  color: 'black',
  textDecoration: 'none',
 
}


function Products() {
  const {ShowCart, totalQty,toggleCart, isToggle,} = useStateContext();
  return (
    <ProductsContainer>
        <Title>
        JampShop Feature Products
       </Title>
    
    <Productlist>
        
    {products.map(item=>(
      <Link  style={styledlink} to={`/product/${item.title}/${item.id}`}>
      <Product item={item} key={item.id}/>
      </Link>
    ))}
  </Productlist>
  {isToggle && <Cart />}
  </ProductsContainer>
  )
}

const ProductsContainer = styled.div`

`
const Title = styled.h1`
text-align:center;
margin-top:0.5em;
font-size:5em;
`
const Productlist = styled.div`
display:grid;
grid-template-columns:repeat(3, 1fr);
gap:20px;
min-height:250px;

width:85%;
margin:40px auto;




`




export default Products
