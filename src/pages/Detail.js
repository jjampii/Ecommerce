import React from 'react'
import {useParams} from 'react-router-dom'
import {products} from '../data.js'

import ProductDetail from '../components/ProductDetail.js'
import Navbar from '../components/Navbar.js';


function Detail() {
  const {id} = useParams()
  const product = products.find(p => p.id == `${id}`)
  
  return (
    <>
    <Navbar />
    <ProductDetail detail={product}/>
   

    </>
  )
}


export default Detail