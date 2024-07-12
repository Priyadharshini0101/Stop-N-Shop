import React,{useState,useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import Header from './pages/Header.jsx';
import Footer from './pages/Footer.jsx';
import { DataProvider } from './contexts/data.js';
import {scroller}  from 'react-scroll'
import {jacket,jacket1,jacket3,jacket4,jacket6,jacket7,jacket8,jacket9,jacket10,jacket11,jacket12,
  jacket13,jacket14,jacket15,jacket16,arrow,bag,bag1,bag2,broken,collection,collection1,creditCard,dress,dress1,dress2,
  dress3,dress4,dress5,dress6,dress11,dress13,dress14,dress7,dress8,dress9,facebook,instagram,logo,pant1,
  pant2,pant3,pants,scarf1,scarf2,shipping,shirt,shirt2,shirt3,shirt5,shirt6,shirt7,shirt8,shirt10,shirt9,
  shirt11,shirt12,shirt13,shirt14,shirt15,shirt16,shirt17,shoe1,shoe2,shoe3,shoe4,shoes,support,twitter,white_search,
  shopping_cart,pant4,pant5,pant6,pant7,pant8} from './assets/index.js'

const dataset = [
   
    {
      id:"1",image: dress1,
      label: "Blue Grey Warm Jacket",
      price: "$399",
      alt: "dress",
    },
    {
      id:"2",image: dress2,
      label: "Black Warm Jacket",
      price: "$199",
      alt: "dress",
    },
    {
      id:"3",image: dress3,
      label: "Pink Denim Jacket",
      price: "$299",
      alt: "dress",
    },
    {
      id:"4",image: dress4,
      label: "Light Green Denim Jacket",
      price: "$499",
      alt: "dress",
    },
    {
      id:"5",image: dress5,
      label: "Brown Casual Sneaker",
      price: "$599",
      alt: "dress",
    },
    {
      id:"6",image: dress9,
      label: "Blue Grey Warm Jacket",
      price: "$399",
      alt: "dress",
    },
    {
      id:"7",image: dress11,
      label: "Blue Grey Warm Jacket",
      price: "$399",
      alt: "dress",
    },
    {
      id:"8",image: dress13,
      label: "Black Warm Jacket",
      price: "$199",
      alt: "dress",
    },
    {
      id:"9",image: dress14,
      label: "Pink Denim Jacket",
      price: "$299",
      alt: "dress",
    },
    {
      id:"10",image: dress7,
      label: "Light Green Denim Jacket",
      price: "$499",
      alt: "dress",
    },
    {
      id:"11",image: dress8,
      label: "Brown Casual Sneaker",
      price: "$599",
      alt: "dress",
    },
    {
      id:"12",image: bag1,
      label: "Purple Jacket with pants",
      price: "$699",
      alt: "pants",
    },
    {
      id:"13",image: shoe1,
      label: "Blue Denim Jacket",
      price: "$299",
      alt: "pants",
    },
    {
      id:"14",image: shoe2,
      label: "Blue Grey Warm Jacket",
      price: "$399",
      alt: "pants",
    },
    {
      id:"15",image: pant1,
      label: "Light Green Denim Jacket",
      price: "$499",
      alt: "pants",
    },
    {
      id:"16",image: pant2,
      label: "Dinosur styled jacket",
      price: "$799",
      alt: "pants",
    },
   
   
   
   
    {
      id:"17",image: shoe3,
      label: "Blue Grey Warm Jacket",
      price: "$399",
      alt: "pants",
    },
    {
      id:"18",image: shoe4,
      label: "Light Green Denim Jacket",
      price: "$499",
      alt: "pants",
    },
    {
      id:"19",image: scarf2,
      label: "Dinosur styled jacket",
      price: "$799",
      alt: "pants",
    },
   
    {
      id:"20",image: pant3,
      label: "Light Green Denim Jacket",
      price: "$499",
      alt: "pants",
    },
    {
      id:"21",image: pant4,
      label: "Dinosur styled jacket",
      price: "$799",
      alt: "pants",
    },
    {
      id:"22",image: pant5,
      label: "Light Green Denim Jacket",
      price: "$499",
      alt: "pants",
    },
    {
      id:"23",image: pant6,
      label: "Dinosur styled jacket",
      price: "$799",
      alt: "pants",
    },
    {
      id:"24",image: pant7,
      label: "Light Green Denim Jacket",
      price: "$499",
      alt: "pants",
    },
    {
      id:"25",image: pant8,
      label: "Dinosur styled jacket",
      price: "$799",
      alt: "pants",
    },
   
     
   

    {
      id:"26",image: jacket1,
      label: "Black Orange Top",
      price: "$999",
      alt: "jacket",
    },
   
    {
      id:"27",image: jacket3,
      label: "Casual Pink Shirt",
      price: "$499",
      alt: "jacket",
    },
    {
      id:"28",image: jacket4,
      label: "Purple Top",
      price: "$299",
      alt: "jacket",
    },
   

  
    

    {
      id:"29",image: jacket9,
      label: "Black Orange Top",
      price: "$999",
      alt: "jacket",
    },
   
    {
      id:"30",image: jacket10,
      label: "Casual Pink Shirt",
      price: "$499",
      alt: "jacket",
    },
    {
      id:"31",image: jacket11,
      label: "Purple Top",
      price: "$299",
      alt: "jacket",
    },
    
    {
      id:"32",image: jacket12,
      label: "Black Orange Top",
      price: "$999",
      alt: "jacket",
    },
   
    {
      id:"33",image: jacket13,
      label: "Casual Pink Shirt",
      price: "$499",
      alt: "jacket",
    },
    {
      id:"34",image: jacket14,
      label: "Purple Top",
      price: "$299",
      alt: "jacket",
    },
    
    {
      id:"35",image: jacket15,
      label: "Black Orange Top",
      price: "$999",
      alt: "jacket",
    },
   
    {
      id:"36",image: jacket16,
      label: "Casual Pink Shirt",
      price: "$499",
      alt: "jacket",
    },
 
   

  
   

    
    {
      id:"37",image: shirt2,
      label: "Pattern Top",
      price: "$699",
      alt: "shirt",
    },
   

    {
      id:"38",image: shirt5,
      label: "Casual Pink Shirt",
      price: "$499",
      alt: "shirt",
    },
    {
      id:"39",image: shirt3,
      label: "Black Jeans",
      price: "$399",
      alt: "shirt",
    },
    
    {
      id:"40",image: shirt10,
      label: "Pattern Top",
      price: "$699",
      alt: "shirt",
    },
   

    {
      id:"41",image: shirt9,
      label: "Casual Pink Shirt",
      price: "$499",
      alt: "shirt",
    },
    {
      id:"42",image: shirt11,
      label: "Black Jeans",
      price: "$399",
      alt: "shirt",
    },

    {
      id:"43",image: shirt12,
      label: "Pattern Top",
      price: "$699",
      alt: "shirt",
    },
   

    {
      id:"44",image: shirt13,
      label: "Casual Pink Shirt",
      price: "$499",
      alt: "shirt",
    },
    {
      id:"45",image: shirt14,
      label: "Black Jeans",
      price: "$399",
      alt: "shirt",
    },
    {
      id:"46",image: shirt15,
      label: "Pattern Top",
      price: "$699",
      alt: "shirt",
    },
   

    {
      id:"47",image: shirt16,
      label: "Casual Pink Shirt",
      price: "$499",
      alt: "shirt",
    },
    {
      id:"48",image: shirt17,
      label: "Black Jeans",
      price: "$399",
      alt: "shirt",
    },
    {
      id:"49",image: shirt6,
      label: "Purple Top",
      price: "$299",
      alt: "shirt",
    },
    {
      id:"50",image: shirt7,
      label: "Black Orange Top",
      price: "$999",
      alt: "shirt",
    },
    {
      id:"51",image: pant3,
      label: "Dinosur styled jacket",
      price: "$799",
      alt: "pants",
    },
    {
      id:"52",image: bag2,
      label: "Red Flannel",
      price: "$899",
      alt: "pants",
    },
    {
      id:"53",image: shirt8,
      label: "Red Flannel",
      price: "$899",
      alt:"shirt"

    },
    {
      id:"54",image: dress6,
      label: "Purple Jacket with pants",
      price: "$699",
      alt:"dress"
    },
    {
      id:"55",image: scarf1,
      label: "Blue Grey Warm Jacket",
      price: "$399",
      alt:"pants"
    },
    {
      id:"56",image: jacket6,
      label: "Purple Jacket with pants",
      price: "$499",
      alt:"jacket"
    },
    {
      id:"57",image: jacket8,
      label: "Purple Jacket with pants",
      price: "$599",
      alt:"jacket"
    },

  
    
  
  ];

  
function Layout() {
    
  const [data, setData] = useState([]);
  
  
  const scroll = ((offset) =>{
      scroller.scrollTo('scroll-to-div',{
        duration:800,
        delay:0,
        smooth:'easeInOutQuart',
        offset,
      })
})
const [header,setHeader] = useState(false)
const setheader = (value) =>{
  setHeader(value);
}

  useEffect(() =>{
    setData(dataset)
    
    
  },[])

 
  return (
    <>
      <DataProvider value={{data,scroll,header,setheader}}>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </DataProvider>
    </>
  )
}

export default Layout