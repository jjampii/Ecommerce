
import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import {AiOutlineMinus, AiOutlinePlus, AiOutlineStar} from 'react-icons/ai'
import {useStateContext} from '../context/ContextState.js'
import {Link} from 'react-router-dom';
import RelatedProd from './RelatedProd.js';
function ProductDetail({detail}) {
    const{addToCart,cartItems, removeFromCart} = useStateContext();
    const [itemQty, setItemQty]= useState(1);
    const [isDisabled, setIsDisabled] = useState(false);

    const increment = () => {
        setItemQty((prev) => prev + 1)
    }
    const decrement = () => {
        setItemQty((prev) => prev - 1)
    }
    useEffect(() => {
        if (itemQty == 1){
            setIsDisabled(true);
        }else{
            setIsDisabled(false)
        }
    }, [itemQty])
    
  return (
    <>
    <Container>
        <Left>
        <ImageContainer>
            <img src={detail.url} />

        </ImageContainer>
        </Left>
        <Right>
            <h1>{detail.title}</h1>
            <Reviews>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <span>(0)</span>
            </Reviews>
            <Description>
                <p>{detail.desc}</p>
                <h5>P{detail.price}.00</h5>
            </Description>
                
            <Quantity>
                
                <h3>Quantity</h3>
                <div className="quantity-desc">
                    <button disabled={isDisabled} className='minus' onClick={decrement}><AiOutlineMinus/></button>
                    <button className='quantity'>{itemQty}</button>
                    <button className='plus' onClick={increment} ><AiOutlinePlus/></button>
                </div>
            </Quantity>
            <Buttons>
                <button className='add-to-cart' onClick={() => addToCart(detail.id, itemQty)}>Add to Cart </button>
                <Link to={`/`} style={{color: 'white', textDecoration: 'none'}}>
                <button className='buynow'>Continue Shopping</button>
                </Link>
            </Buttons>
            
        </Right>
    </Container>
     <RelatedProd/>
     </>
  )
}

const Container = styled.div`
display:flex;
gap: 30px;
margin: 40px auto;
width:80%;
color: #324d67;

img{
    width:40vw;
    height:70vh;
    object-fit:contain;
    border-radius:15px;
    background-color:rgb(220,220,220);

    
}

`
const Left = styled.div``
const Right = styled.div`


h1{
    font-size:3em;
    padding-bottom:10px;
}
`
const Reviews = styled.div`
padding-bottom:10px;
button{
    
    
    font-size:12px;
}
`
const ImageContainer = styled.div``
const Description = styled.div`
p{
    padding-right:10px; 
    text-align: justify;
    font-size:1.2em;
    padding-bottom:10px;
}
h5{
    font-weight: 700 ;
  font-size: 26px;
  color:#f02d34;
}
`
const Quantity = styled.div`
padding-bottom:10px;
display:flex;
align-items:center;



div.quantity-desc{
   display:flex;
   margin-left:10px;
    padding:10px;
    padding-top:10px;
   


button{
    padding: 10px 12px;
    font-size:16px;
    border:1px solid black;
   color:black;
    font-weight:bold;
}

button.minus{
    border-right:1px solid black;
    cursor:pointer;
}
button.plus{
    cursor:pointer;
}

}

`
const Buttons = styled.div`
button{
    margin-top:10px;
    padding:20px 40px;
    margin-right:20px;
    
    &:hover{
        transform:scale(1.1,1.1);
        transition:transform 0.3s ease;
      }
    
}
button.add-to-cart{
    background-color: white;
    border: 1px solid #f02d34 ;
    color: #f02d34;
    font-size: 18px;
    font-weight: 500;
    cursor:pointer;
    
    
}
button.buynow{
    background-color: #f02d34;
    border:1px solid #f02d34 ;
    color: white;
    font-size: 18px;
    font-weight: 500;
    cursor:pointer;
   

 
    

}
`
export default ProductDetail