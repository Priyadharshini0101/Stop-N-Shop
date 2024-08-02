import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components/index.js";
import { DataProvider } from "./contexts/data.js";
import { scroller } from "react-scroll";
import {
  jacket1,
  jacket3,
  jacket4,
  jacket6,
  jacket7,
  jacket8,
  jacket9,
  jacket10,
  jacket11,
  jacket12,
  jacket13,
  jacket14,
  jacket15,
  jacket16,
  bag1,
  bag2,
  dress1,
  dress2,
  dress3,
  dress4,
  dress5,
  dress6,
  dress11,
  dress13,
  dress14,
  dress7,
  dress8,
  dress9,
  pant1,
  pant2,
  pant3,
  scarf1,
  scarf2,
  shirt2,
  shirt3,
  shirt5,
  shirt6,
  shirt7,
  shirt8,
  shirt10,
  shirt9,
  shirt11,
  shirt12,
  shirt13,
  shirt14,
  shirt15,
  shirt16,
  shirt17,
  shoe1,
  shoe2,
  shoe3,
  shoe4,
  pant4,
  pant5,
  pant6,
  pant7,
  pant8,
} from "./assets/index.js";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from './firebase.js'
import {useNavigate } from "react-router-dom";


const dataset = [
  {
    id: "1",
    image: dress1,
    label: "Blue Grey Warm Jacket",
    price: "399",
    alt: "dress",
    rating: 4,
    quantity: 1,
  },
  {
    id: "2",
    image: dress2,
    label: "Black Warm Jacket",
    price: "199",
    alt: "dress",
    rating: 3,
    quantity: 1,
  },
  {
    id: "3",
    image: dress3,
    label: "Pink Denim Jacket",
    price: "299",
    alt: "dress",
    rating: 1,
    quantity: 1,
  },
  {
    id: "4",
    image: dress4,
    label: "Light Green Denim Jacket",
    price: "499",
    alt: "dress",
    rating: 2,
    quantity: 1,
  },
  {
    id: "5",
    image: dress5,
    label: "Brown Casual Sneaker",
    price: "599",
    alt: "dress",
    rating: 5,
    quantity: 1,
  },
  {
    id: "6",
    image: dress9,
    label: "Blue Grey Warm Jacket",
    price: "1500",
    alt: "dress",
    rating: 5,
    quantity: 1,
  },
  {
    id: "7",
    image: dress11,
    label: "Blue Grey Warm Jacket",
    price: "1500",
    alt: "dress",
    rating: 4,
    quantity: 1,
  },
  {
    id: "8",
    image: dress13,
    label: "Black Warm Jacket",
    price: "199",
    alt: "dress",
    rating: 3,
    quantity: 1,
  },
  {
    id: "9",
    image: dress14,
    label: "Pink Denim Jacket",
    price: "299",
    alt: "dress",
    rating: 2,
    quantity: 1,
  },
  {
    id: "10",
    image: dress7,
    label: "Light Green Denim Jacket",
    price: "499",
    alt: "dress",
    rating: 1,
    quantity: 1,
  },
  {
    id: "11",
    image: dress8,
    label: "Brown Casual Sneaker",
    price: "599",
    alt: "dress",
    rating: 1,
    quantity: 1,
  },
  {
    id: "12",
    image: bag1,
    label: "Purple Jacket with pants",
    price: "499",
    alt: "accessories",
    rating: 2,
    quantity: 1,
  },
  {
    id: "13",
    image: shoe1,
    label: "Blue Denim Jacket",
    price: "299",
    alt: "accessories",
    rating: 3,
    quantity: 1,
  },
  {
    id: "14",
    image: shoe2,
    label: "Blue Grey Warm Jacket",
    price: "499",
    alt: "shoes",
    rating: 4,
    quantity: 1,
  },
  {
    id: "15",
    image: pant1,
    label: "Light Green Denim Jacket",
    price: "199",
    alt: "pants",
    rating: 5,
    quantity: 1,
  },
  {
    id: "16",
    image: pant2,
    label: "Dinosur styled jacket",
    price: "299",
    alt: "pants",
    rating: 3,
    quantity: 1,
  },

  {
    id: "17",
    image: shoe3,
    label: "Blue Grey Warm Jacket",
    price: "199",
    alt: "shoes",
    rating: 2,
    quantity: 1,
  },
  {
    id: "18",
    image: shoe4,
    label: "Light Green Denim Jacket",
    price: "699",
    alt: "shoes",
    rating: 1,
    quantity: 1,
  },
  {
    id: "19",
    image: scarf2,
    label: "Dinosur styled jacket",
    price: "199",
    alt: "accessories",
    rating: 5,
    quantity: 1,
  },

  {
    id: "20",
    image: pant3,
    label: "Light Green Denim Jacket",
    price: "199",
    alt: "pants",
    rating: 4,
    quantity: 1,
  },
  {
    id: "21",
    image: pant4,
    label: "Dinosur styled jacket",
    price: "299",
    alt: "pants",
    rating: 4,
    quantity: 1,
  },
  {
    id: "22",
    image: pant5,
    label: "Light Green Denim Jacket",
    price: "599",
    alt: "pants",
    rating: 3,
    quantity: 1,
  },
  {
    id: "23",
    image: pant6,
    label: "Dinosur styled jacket",
    price: "799",
    alt: "pants",
    rating: 2,
    quantity: 1,
  },
  {
    id: "24",
    image: pant7,
    label: "Light Green Denim Jacket",
    price: "1299",
    alt: "pants",
    rating: 1,
    quantity: 1,
  },
  {
    id: "25",
    image: pant8,
    label: "Dinosur styled jacket",
    price: "1499",
    alt: "pants",
    rating: 5,
    quantity: 1,
  },

  {
    id: "26",
    image: jacket1,
    label: "Black Orange Top",
    price: "1299",
    alt: "jacket",
    rating: 2,
    quantity: 1,
  },

  {
    id: "27",
    image: jacket3,
    label: "Casual Pink Shirt",
    price: "499",
    alt: "jacket",
    rating: 1,
    quantity: 1,
  },
  {
    id: "28",
    image: jacket4,
    label: "Purple Top",
    price: "299",
    alt: "jacket",
    rating: 3,
    quantity: 1,
  },

  {
    id: "29",
    image: jacket9,
    label: "Black Orange Top",
    price: "199",
    alt: "jacket",
    rating: 4,
    quantity: 1,
  },

  {
    id: "30",
    image: jacket10,
    label: "Casual Pink Shirt",
    price: "599",
    alt: "jacket",
    rating: 5,
    quantity: 1,
  },
  {
    id: "31",
    image: jacket11,
    label: "Purple Top",
    price: "99",
    alt: "jacket",
    rating: 1,
    quantity: 1,
  },

  {
    id: "32",
    image: jacket12,
    label: "Black Orange Top",
    price: "599",
    alt: "jacket",
    rating: 5,
    quantity: 1,
  },

  {
    id: "33",
    image: jacket13,
    label: "Casual Pink Shirt",
    price: "799",
    alt: "jacket",
    rating: 4,
    quantity: 1,
  },
  {
    id: "34",
    image: jacket14,
    label: "Purple Top",
    price: "199",
    alt: "jacket",
    rating: 2,
    quantity: 1,
  },

  {
    id: "35",
    image: jacket15,
    label: "Black Orange Top",
    price: "1299",
    alt: "jacket",
    rating: 3,
    quantity: 1,
  },

  {
    id: "36",
    image: jacket16,
    label: "Casual Pink Shirt",
    price: "1299",
    alt: "jacket",
    rating: 2,
    quantity: 1,
  },

  {
    id: "37",
    image: shirt2,
    label: "Pattern Top",
    price: "199",
    alt: "shirt",
    rating: 1,
    quantity: 1,
  },

  {
    id: "38",
    image: shirt5,
    label: "Casual Pink Shirt",
    price: "499",
    alt: "shirt",
    rating: 3,
    quantity: 1,
  },
  {
    id: "39",
    image: shirt3,
    label: "Black Jeans",
    price: "299",
    alt: "shirt",
    rating: 4,
    quantity: 1,
  },

  {
    id: "40",
    image: shirt10,
    label: "Pattern Top",
    price: "199",
    alt: "shirt",
    rating: 5,
    quantity: 1,
  },

  {
    id: "41",
    image: shirt9,
    label: "Casual Pink Shirt",
    price: "599",
    alt: "shirt",
    rating: 3,
    quantity: 1,
  },
  {
    id: "42",
    image: shirt11,
    label: "Black Jeans",
    price: "499",
    alt: "shirt",
    rating: 2,
    quantity: 1,
  },

  {
    id: "43",
    image: shirt12,
    label: "Pattern Top",
    price: "799",
    alt: "shirt",
    rating: 1,
    quantity: 1,
  },

  {
    id: "44",
    image: shirt13,
    label: "Casual Pink Shirt",
    price: "1299",
    alt: "shirt",
    rating: 4,
    quantity: 1,
  },
  {
    id: "45",
    image: shirt14,
    label: "Black Jeans",
    price: "1499",
    alt: "shirt",
    rating: 5,
    quantity: 1,
  },
  {
    id: "46",
    image: shirt15,
    label: "Pattern Top",
    price: "999",
    alt: "shirt",
    rating: 4,
    quantity: 1,
  },

  {
    id: "47",
    image: shirt16,
    label: "Casual Pink Shirt",
    price: "599",
    alt: "shirt",
    rating: 3,
    quantity: 1,
  },
  {
    id: "48",
    image: shirt17,
    label: "Black Jeans",
    price: "399",
    alt: "shirt",
    rating: 2,
    quantity: 1,
  },
  {
    id: "49",
    image: shirt6,
    label: "Purple Top",
    price: "299",
    alt: "shirt",
    newArrivals: true,
    rating: 1,
    quantity: 1,
  },
  {
    id: "50",
    image: shirt7,
    label: "Black Orange Top",
    price: "999",
    alt: "shirt",

    newArrivals: true,
    rating: 5,
    quantity: 1,
  },
  {
    id: "51",
    image: pant3,
    label: "Dinosur styled jacket",
    price: "899",
    alt: "pants",

    newArrivals: true,
    rating: 5,
    quantity: 1,
  },
  {
    id: "52",
    image: bag2,
    label: "Red Flannel",
    price: "899",
    alt: "accessories",

    newArrivals: true,
    rating: 4,
    quantity: 1,
  },
  {
    id: "53",
    image: shirt8,
    label: "Red Flannel",
    price: "899",
    alt: "shirt",
    rating: 1,
    popularThisWeek: true,
  },
  {
    id: "54",
    image: dress6,
    label: "Purple Jacket with pants",
    price: "699",
    alt: "dress",
    popularThisWeek: true,
    rating: 4,
    quantity: 1,
  },
  {
    id: "55",
    image: scarf1,
    label: "Blue Grey Warm Jacket",
    price: "1199",
    alt: "accessories",
    popularThisWeek: true,
    rating: 5,
    quantity: 1,
  },
  {
    id: "56",
    image: jacket6,
    label: "Purple Jacket with pants",
    price: "499",
    alt: "jacket",
    popularThisWeek: true,
    rating: 2,
    quantity: 1,
  },
  {
    id: "57",
    image: jacket8,
    label: "Purple Jacket with pants",
    price: "999",
    alt: "jacket",
    popularThisWeek: true,
    rating: 3,
    quantity: 1,
  },
  {
    id: "58",
    image: jacket7,
    label: "Purple Jacket with pants",
    price: "799",
    alt: "jacket",
    rating: 4,
    quantity: 1,
  },
];

function Layout() {
  const [data, setData] = useState([]);

  const scroll = (offset) => {
    scroller.scrollTo("scroll-to-div", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset,
    });
  };
  const [header, setHeader] = useState(false);
  const [addToCart, setAddToCart] = useState([]);
  const [applyCode, setApplyCode] = useState(false);
  const [category,setCategory] = useState("")
  const [addToPurchase,setAddToPurchase] = useState([])

  const setapplycode = () => {
    setApplyCode(true);
  };

  const setheader = (value) => {
    setHeader(value);
  };

  const setcategory = (category) => {
    setCategory(category)
  }

  const setaddtopurchase = () => {
    const copyPurchaseList = [...addToPurchase]
    const copyCartList = [...addToCart]

    copyCartList.map((cart) => {
      copyPurchaseList.push(cart)
    })
    
    // copyPurchaseList.push(copyCartList)
    setAddToCart([]);
    setAddToPurchase(copyPurchaseList)

  }

  const setaddtocart = (product) => {
    let copyCartList = [...addToCart];
    const index = copyCartList.findIndex((item) => item.id === product.id);
    if (index === -1) {
      copyCartList.push(product);
    } else {
      copyCartList.splice(index, 1);
      console.log("yes mam" + copyCartList.length);
    }
    setAddToCart(copyCartList);
  };

  const navigate = useNavigate()

  useEffect(() => {
     
    
    setData(dataset);
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart && cart.length > 0) {
      setAddToCart(cart);
    }
    const purchase = JSON.parse(localStorage.getItem("purchase"));
    if(purchase && purchase.length > 0){
      setAddToPurchase(purchase)
    }

    onAuthStateChanged(auth, async(user)=>{
      if(user){
        console.log("Logged In")
         navigate('/')
      }else{
        console.log("Logged Out")
        navigate('/login')
      }
    })
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(addToCart));
    localStorage.setItem("purchase", JSON.stringify(addToPurchase))
  }, [addToCart,addToPurchase]);
  
  

  return (
    <>
      <DataProvider
        value={{
          data,
          scroll,
          header,
          setheader,
          addToCart,
          setaddtocart,
          applyCode,
          setapplycode,
          category,
          setcategory,
          addToPurchase,
          setaddtopurchase
        }}
      >
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </DataProvider>
    </>
  );
}

export default Layout;
