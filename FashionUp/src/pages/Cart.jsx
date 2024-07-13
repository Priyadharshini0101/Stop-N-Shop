import React from 'react'
import useDataContext from '../contexts/data';
function Cart() {
  const {setheader,addToCart} = useDataContext();
  setheader(true);
  console.log(addToCart)
  return (
    <div>Cart</div>
  )
}

export default Cart