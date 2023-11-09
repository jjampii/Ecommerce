import React from 'react';
import {products} from '../data.js';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
const RelatedProd = () => {

    const styledlink = {
        color: 'black',
        textDecoration: 'none',
       
      }
  return (
    <Main>

                <h1>Related Items</h1>
        <Container>
        {products.map(item=>(
            <Link  style={styledlink} to={`/product/${item.title}/${item.id}`}>
                <Item>
                    <Image src={item.url} />
                    <p className='title'>{item.title}</p>
                    <p className='price'>P{item.price}.00</p>
                    
                </Item>
            </Link>
        ))}
        </Container>
    </Main>
  )
}

const Main = styled.div`
display:flex;
flex-direction:column;
width:80%;
margin: 0 auto;
gap:20px;


`
const Container = styled.div`
display:flex;

width:100%;
margin: 0 auto;
gap:20px;
overflow-x: auto;
`
const Item = styled.div`
border-radius: 15px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:200px;

background-color:rgb(220,220,220);

`
const Image = styled.img`

display:flex;
width:100%;
height:15vh;
object-fit:contain;



`


export default RelatedProd