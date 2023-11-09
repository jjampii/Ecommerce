import React, {useEffect}from 'react'
import Navbar from '../components/Navbar.js'
import Products from '../components/Products.js'

import styled from 'styled-components';
import Cart from '../components/Cart.js';
import Banner from '../components/Banner.js';


function Home() {
  
  return (
    <HomeWrapper >
        <Navbar  className='navbar'/>
        <Banner/>
        <Products />
        
        
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`

`
export default Home