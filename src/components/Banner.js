import React from 'react'
import styled from 'styled-components';

import banner1 from '../images/banner3.webp'


const Banner = () => {
  return (
    <BannerContainer>
        <Container>

        <Left>
                <p>Beats Solo</p>
                <p className='semi'>Summer Sale</p>
                <h1>EARPHONE</h1>
                <button>Buy Now</button>
        </Left>
        <Right>
                <Image src={banner1}/>
               
        </Right>

        </Container>
    </BannerContainer>
  )
}

const BannerContainer = styled.div`
display:flex;
width:85%;
height:60vh;
background-color: rgb(220,220,220);
margin: 0 auto;
border-radius:1em;
margin-top:20px;

padding:0 30px;
`
const Container = styled.div`
display:flex;
width:100%;
position:relative;

align-items:center;

`
const Left = styled.div`
p.semi{
    font-size:3em;
    font-weight:bold;
}
h1{
    font-size:8em;
    color:white;
    font-weight:bold;
    letter-spacing:5px;
    line-height:0.8;
    
}
button{
    padding:20px 40px;
    background-color: black;
    border-radius: 25px;
    margin-top:50px;
}
`
const Right = styled.div`


`

const Image = styled.img`
width:600px;
height:60vh;

object-fit:contain;
-webkit-filter: drop-shadow(0px 16px 10px rgba(0,0,0,0.6));
-moz-filter: drop-shadow(0px 16px 10px rgba(0,0,0,0.6));
-ms-filter: drop-shadow(0px 16px 10px rgba(0,0,0,0.6)); 
-o-filter: drop-shadow(0px 16px 10px rgba(0,0,0,0.6));
 filter: drop-shadow(0px 16px 10px rgba(0,0,0,0.4)); 
`
export default Banner