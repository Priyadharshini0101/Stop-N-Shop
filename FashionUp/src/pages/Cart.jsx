import React from 'react'
import useDataContext from '../contexts/data';
function Cart() {
  const {data,setheader} = useDataContext();
  setheader(true);
  return (
    <div>Cart</div>
  )
}

export default Cart