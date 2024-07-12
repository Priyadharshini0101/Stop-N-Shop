import React from 'react'
import { useParams } from 'react-router-dom'
import { Text } from '../components';
import useDataContext from '../contexts/data';

function Product() {
  const { id } = useParams();

  console.log(typeof(id))
  const {data,setheader} = useDataContext();
   setheader(true);
  const product = data.filter((d) => (d.id === id)
  );
  console.log(product)
  return (
    <div><Text size="5xl">{id}</Text></div>
  )
}

export default Product