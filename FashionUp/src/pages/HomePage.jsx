import React, { useState, Suspense, useEffect, Fragment } from "react";
import { Helmet } from "react-helmet";
import {About, Button, Feature,Heading,Img,Input,RatingBar,Section,Template,Text} from '../components/index.js'
import { DataProvider } from "../contexts/data";
import { Link, scroller} from "react-scroll";
import {jacket,jacket1,jacket2,jacket3,jacket4,jacket5,jacket6,jacket7,jacket8,arrow,bag,bag1,bag2,broken,collection,collection1,
  creditCard,dress,dress1,dress2,dress3,dress4,dress5,dress6,facebook,header,instagram,logo,pant1,pant2,pant3,pants,scarf1,
shipping,shirt,shirt1,shirt2,shirt3,shirt4,shirt5,shirt6,shirt7,shirt8,shoe1,shoe2,shoes,support,twitter,white_arrow,shopping_cart} 
from '../assets/index.js'


function HomePage() {

  const categories = [
    { image: jacket, label: "Jacket" },
    { image: shirt, label: "T-shirt" },
    { image: pants, label: "Pants" },
    { image: dress, label: "Dress" },
    { image: shoes, label: "Shoes" },
    { image: bag, label: "Accesories" },
  ];

  const arrivals = [
    {
      image: shirt6,
      label: "Purple Top",
      price: "$299",
    },
    {
      image: shirt7,
      label: "Black Orange Top",
      price: "$999",
    },
    {
      image: pant3,
      label: "Dinosur styled jacket",
      price: "$799",
    },
    {
      image: bag2,
      label: "Red Flannel",
      price: "$899",
    },
  ];

  const popularOfTheWeek = [
    {
      image: shirt8,
      label: "Red Flannel",
      price: "$899",
      rating:4,

    },
    {
      image: dress6,
      label: "Purple Jacket with pants",
      price: "$699",
      alt: "dress",
      rating:3,
    },
    {
      image: scarf1,
      label: "Blue Grey Warm Jacket",
      price: "$399",
      rating:3,
    },
    {
      image: jacket6,
      label: "Purple Jacket with pants",
      price: "$499",
      rating:5,
    },
    {
      image: jacket8,
      label: "Purple Jacket with pants",
      price: "$599",
      rating:4,
    },
  ];

  const dataset = [
    {
      image: dress1,
      label: "Blue Grey Warm Jacket",
      price: "$399",
      alt: "dress",
    },
    {
      image: dress2,
      label: "Black Warm Jacket",
      price: "$199",
      alt: "dress",
    },
    {
      image: dress3,
      label: "Pink Denim Jacket",
      price: "$299",
      alt: "dress",
    },
    {
      image: dress4,
      label: "Light Green Denim Jacket",
      price: "$499",
      alt: "dress",
    },
    {
      image: dress5,
      label: "Brown Casual Sneaker",
      price: "$599",
      alt: "dress",
    },

    {
      image: bag1,
      label: "Purple Jacket with pants",
      price: "$699",
      alt: "pants",
    },
    {
      image: shoe1,
      label: "Blue Denim Jacket",
      price: "$299",
      alt: "pants",
    },
    {
      image: shoe2,
      label: "Blue Grey Warm Jacket",
      price: "$399",
      alt: "pants",
    },
    {
      image: pant1,
      label: "Light Green Denim Jacket",
      price: "$499",
      alt: "pants",
    },
    {
      image: pant2,
      label: "Dinosur styled jacket",
      price: "$799",
      alt: "pants",
    },

    {
      image: jacket1,
      label: "Black Orange Top",
      price: "$999",
      alt: "jacket",
    },
    {
      image: jacket2,
      label: "Blue Top",
      price: "$599",
      alt: "jacket",
    },
    {
      image: jacket3,
      label: "Casual Pink Shirt",
      price: "$499",
      alt: "jacket",
    },
    {
      image: jacket4,
      label: "Purple Top",
      price: "$299",
      alt: "jacket",
    },
    {
      image: jacket5,
      label: "Purple Jacket with pants",
      price: "$699",
      alt: "jacket",
    },

    {
      image: shirt1,
      label: "Brown Casual Sneaker",
      price: "$599",
      alt: "shirt",
    },
    {
      image: shirt2,
      label: "Pattern Top",
      price: "$699",
      alt: "shirt",
    },
    {
      image: shirt4,
      label: "Blue Top",
      price: "$599",
      alt: "shirt",
    },
    {
      image: shirt5,
      label: "Casual Pink Shirt",
      price: "$499",
      alt: "shirt",
    },
    {
      image: shirt3,
      label: "Black Jeans",
      price: "$399",
      alt: "shirt",
    },
  ];

  const help = [
    {
      image:shipping,
      title:"Free Delivery",
      description:(
        <>
        This free shipping 
        <br/>
        only for selected region</>
      ),
    },
    {
      image:creditCard,
      title:"Payment Method",
      description:(
        <>
        This free shipping 
        <br/>
        only for selected region</>
      ),
    },
    {
      image:broken,
      title:"Warranty",
      description:(
        <>
        This free shipping 
        <br/>
        only for selected region</>
      ),
    },
    {
      image:support,
      title:"Customer Support",
      description:(
        <>
        This free shipping 
        <br/>
        only for selected region</>
      ),
    },
  ]

  const [data, setData] = useState([]);
  const [searchBarValue, setSearchBarValue] = useState("");

  useEffect(() =>{
    setData(dataset)
  },[])

  const scrollTo = (offset) =>{
    scroller.scrollTo('scroll-to-div',{
      duration:800,
      delay:0,
      smooth:'easeInOutQuart',
      offset,
    })
  }
  
  return (
    <Fragment to="/">
      {/*Title */}
      <Helmet>
        <title>Summer Sale - Exclusive Discounts on Fashion Collections</title>
        <meta
          name="description"
          content="Discover our Summer Sale with up to 50% off on the latest fashion collecitons. 
        Shop jackets, dresses, accessories, and more, Don't miss out on our new arrivals and featured items!"
        ></meta>
      </Helmet>
      {/*Header section */}
      <div className=" w-full bg-white-A700">
        <header className=" flex items-center justify-center bg-white-A700 pb-[18px] pt-[17px]">
          <div className="container-sm flex items-center justify-between gap-5 lg:p-5 md:flex-col md:p-5">
            <Img
              src={logo}
              alt="header logo"
              className="h-[50px] w-[50px] object-contain"
              imgText={
                <Text size="s"  className="!font-bold  !text-gray-800">
                 Fashion Up
                </Text>
              } 
            ></Img>
            
           
            <ul className="flex flex-wrap gap-20 lg:gap-5 md:gap-5" onScroll={true}>
              <li><Link
              //  activeClass="gray-800"
              // className="categories"
              to="categories"
              offset={-25}
              smooth={true}
              duration={500}
              onClick={scrollTo(100)}
              >
                <a href="#" target="_blank">
                  <Text as="p" className="!font-medium !text-gray-800">
                    Categories
                  </Text>
                </a>
              </Link>
              </li>
              <li>
              <Link
              //  activeClass="gray-800"
              // className="categories"
              to="new-arrivals"
              offset={-25}
              smooth={true}
              duration={500}
              onClick={scrollTo(100)}
              >
                <a href="#">
                  <Text as="p" className="!font-medium !text-gray-800">
                    New Arrivals
                  </Text>
                </a>
                </Link>
              </li>
             <li>
             <Link
              //  activeClass="gray-800"
              // className="categories"
              to="features"
              offset={-25}
              smooth={true}
              duration={500}
              onClick={scrollTo(100)}
              > 
                <a href="#">
                  <Text as="p" className="!font-medium !text-gray-800">
                    Features
                  </Text>
                </a>
                </Link>
              </li>
              <li> 
              <Link
              //  activeClass="gray-800"
              // className="categories"
              to="collections"
              offset={-25}
              smooth={true}
              duration={500}
              onClick={scrollTo(100)}
              >
                <a href="#">
                  <Text as="p" className="!font-medium !text-gray-800">
                    Collections
                  </Text>
                </a>
                </Link>
              </li>
            </ul>
            <div className="flex w-[35%] items-center justify-between gap-5 md:w-full">
              <div className="flex w-[%33] justify-between gap-5">
                <Input
                  name="Search Field"
                  placeholder={`Search here`}
                  value={searchBarValue}
                  onChange={setSearchBarValue}
                
                  variant="outline"
                  suffix={
                    <div className="flex h-[48px] w-[48px] items-center justify-center">
                      {
                        <a href="#">
                          <Img
                            src={white_arrow}
                            alt="search icon"
                            className="h-[24px] w-[24px] cursor-pointer "
                          ></Img>
                        </a>
                      }
                    </div>
                  }
                />
                <a href="#" className="flex items-center">
                  <Img
                    src={shopping_cart}
                    alt="cart icon"
                    className="h-[24px] w-[24px]"
                  ></Img>
                </a>
              </div>
              <a href="#">
                <Button
                  className="min-w-[107px] font-bold lg:text-[15px] sm:px-4 text-white-A700"
                  size="5xl"
                  shape="square"
                >
                  Login
                </Button>
              </a>
            </div>
          </div>
        </header>
        {/* Banner Section */}
        <div className={`h-[600px] self-stretch  bg-[url(\'${header}\')] bg-cover bg-no-repeat`}>
          <div className="flex justify-center bg-white-A700_82 py-[157px] lg:py-8 md:py-5 sm:py-4 h-[575px]">
            <div className="container-xs flex pl-[139px] pr-15 lg:p-5 lg:pl-8 md:p-5 md:px-5 sm:px-4">
              <div className="flex w-[47%] flex-col items-start lg:w-full md:w-full">
                <Button
                  color="white_A700"
                  size="2xl"
                  shape="square"
                  className="min-w-[271px] font-medium lg:text-xl"
                >
                  50% Off Limited Offer
                </Button>
                <Heading size="2xl" as="h1" className="mt-[22px] lg:text-5xl">
                  Summer Collection
                </Heading>
                <Text
                  as="p"
                  className="mt-[25px] w-full leading-8 | text-gray-800"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua{" "}
                </Text>
                <Button
                  size="2xl"
                  shape="square"
                  rightIcon={
                    <Img
                      src={arrow}
                      alt="arrow"
                      className="h-[48px] w-[48px] p-2"
                    ></Img>
                  }
                  className="mt-20 min-w-[245px] gap-2.5 font-medium lg:text-xl sm:px-4 text-white-A700"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/*Categories Section*/}  
        <div name="categories"  className="container-md mt-[103px] flex flex-col gap-7 lg:p-5 md:p-5">
    <Section className="mt-[9px]" heading="Categories"></Section>
    <div className="flex gap-8 md:flex-col">
      <Suspense fallback={<div>Loading feed...</div>}>
        {categories.map((d, index) => (
          <div
            key={"productsList" + index}
            className="flex w-full flex-col items-center gap-[7px] bg-gray-50 px-9   pb-[46px]  pt-9 md:pb-5 sm:p-4"
          >
            <Img
              src={d.image}
              alt={d.label}
              className="h-[96px] w-[96px]"
            ></Img>
            <Text as="p">{d.label}</Text>
          </div>
        ))}
      </Suspense>
    </div>
  </div>
        {/* New Arrivals */}
        <div name="new-arrivals" className="container-sm mt-[98px] flex lg:p-5 md:p-5">
          <div className="flex w-full flex-col gap-[33px]">
          <Section heading="New Arrivals"></Section>
            <div className="flex gap-8 md:flex-col">
              <div className=" flex w-full items-center justify-center gap-6 bg-gray-50 p-7 md:flex-col sm:p-4">
                <Img
                  src={jacket7}
                  alt="product image"
                  className=" h-[500px] justify-center object-center md:w-full"
                ></Img>
                <div className="flex w-[40%] flex-col items-center gap-6">
                  <div className="flex flex-col items-center gap-[5px]">
                    <Text size="md" as="p" className="!text-gray-800">
                      Purple Warm Jacket
                    </Text>
                    <Text as="p" className="!font-medium">
                      $299
                    </Text>
                  </div>
                  <Button
                    size="5xl"
                    shape="square"
                    className="min-w-[100px] font-bold lg:text-[15px] sm:px-4"
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
              <div className="grid w-full grid-cols-2 gap-8 lg:grid-cols-2 md:grid-cols-1">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {arrivals.map((d) => (
                    <>
                      <Template
                        key={d.id}
                        image={d.image}
                        title={d.title}
                        price={d.price}
                        size="s"
                        className="bg-gray-50 shadow-sm "
                        addToCart={ <Button size="5xl" shape="square" className='min-w-[100px] font-bold lg:text-[15px] sm:px-4'>
                          Add to cart
                      </Button>}
                      > </Template>
                    </>
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
        {/*Features */}
        <DataProvider value={{data}}>
        <div name="features" className="container-xs mt-[99px] h-[426px] lg:h-auto lg:p-5 md:h-auto md:p-5">
         <Section heading="Features"></Section>           
           <Feature filter="dress"></Feature>
        </div>
        <div className="container-xs mt-[99px] h-[426px] lg:h-auto lg:p-5 md:h-auto md:p-5">
          <Feature filter="shirt"></Feature>
        </div>
        
        <div className="container-xs mt-[99px] h-[426px] lg:h-auto lg:p-5 md:h-auto md:p-5">
         <Feature filter="jacket"></Feature> 
        </div>
        <div className="container-xs mt-[99px] h-[426px] lg:h-auto lg:p-5 md:h-auto md:p-5">
            <Feature filter="pants"></Feature>
        </div>
        </DataProvider>
        {/*Collections */}
        <div name="collections" className="container-md mt-[100px] flex gap-8 lg:p-5 md:flex-col md:p-5">
          <div className="relative h-[400px] w-full lg:h-auto md:h-auto">
            <Img src={collection} alt="casual image" className="h-[400px] w-full object-cover"></Img>
            <Text size="lg" as="p" 
            className="absolute right-[10%] top-[10%] my-auto h-max w-[28%] leading-[54px]md:text-3xl sm:text-[28px]">
              <span className="text-gray-600">
                <>
                Casual
                <br/>
                </>
              </span>
              <span className="text-5xl font-bold text-gray-600">Collection</span>
            </Text>
          </div>
          <div className="relative h-[400px] w-full lg:h-auto md:h-auto">
            <Img src={collection1} alt="casual image" className="h-[400px] w-full object-cover"></Img>
            <Text size="lg" as="p" 
            className="absolute left-[10%] top-[10%] my-auto h-max w-[28%] leading-[54px]md:text-3xl sm:text-[28px]">
              <span className="text-white-A700">
                <>
                Big Vibe
                <br/>
                </>
              </span>
              <span className="text-5xl font-bold text-white-A700">Collection</span>
            </Text>
          </div>
        </div>
          {/* Why Choose us*/}
          <div className="relative mt-[100px] h-[362px]  self-stretch">
          <div className="absolute left-0 right-0 top-[0.00px] m-auto flex w-full justify-center bg-gray-800 pb-[215px] pt-[57px] lg:pb-8 md:py-5 sm:py-4">
            <div className="container-xs flex lg:p-5 md:p-5">
          <Heading as="h2" size="s" className="!text-white-A700">
             Why Choose Us
            </Heading>
          </div>
          </div>
          <div className="container-xs absolute bottom-[0.00px] left-0 right-0
          my-auto flex gap-8 lg:p-5 md:relative md:flex-col md:p-5">
            <Suspense fallback={<div>Loading feed...</div>}>
            {help.map((d,index) =>(
              <div className="flex justify-between items-center w-full gap-5 px-[46px] py-16 lg:py-8 md:p-5 sm:p-4 bg-white-A700 shadow-xs">
                <Img src={d.image} alt={d.title} className="h-[48px] w-[48px]">
                </Img>
                <div className="flex w-[73%] flex-col items-start gap-1.5"> 
                  <Heading size="xs" as="h6">
                  {d.title}
                </Heading>
                <Text as="p" size="xs" className="w-full leading-[20px] text-gray-400">{d.description}</Text>
              </div>
              </div>
            ))}
            </Suspense>
          </div>
        </div>
          {/*Popular this week */}
          <div className="container-xs mt-[103px] flex flex-col gap-[99px] lg:gap-[99px] lg:p-5 md:gap-[74px] md:p-5 sm:gap-[49px]">
            <div className="flex flex-col gap-7">
         <Section heading="Popular this week" className="mt-[9px]"></Section>           
         <div className="flex gap-8 md:flex-col">
        <Suspense fallback={<div>Loading feed...</div>}>
        {popularOfTheWeek.map((i) => (
          <>
            <Template
              key={i.id}
              image={i.image}
              title={i.label}
              price={i.price}
              review={         <RatingBar
                value={i.rating}
                isEditable={true}
                size={24}
                className="flex justify-between"
                ></RatingBar>}
            >
         
            </Template>
            
            </>
        
          ) 
        )}
      </Suspense>
    </div>
    </div>
  
        </div>
          {/*Footer Section*/} 
          <footer className="mt-[100px] flex items-center justify-center bg-gray-800 pb-[30px] pt-[62px] lg:pt-8 md:pt-5 sm:py-4">
            <div className="container-xs flex justify-center pr-[90px] lg:p-5 lg:pr-8 md:p-5 md:pr-5 sm:pr-4">
              <div className="flex w-full flex-col items-center gap-[82px] lg:gap-[82px] md:gap-[61px] sm:gap-[41px]">
                <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
                 <div className="flex w-[28%] flex-col items-start gap-[30px] md:w-full">
                  <Heading size="s" as="h4" className="!text-white-A700">
                    Join our Newsletter
                  </Heading>
                  <Text as="p" className="w-full leading-[27px] !text-white-A700">
                    <>
                    Drop your email below to get update about us, <br/>
                    latest news, tips, and more!</>
                  </Text>
                  <Input
                  
                   
                  shape="square"
                  type="email"
                  name="Email Input"
                  placeholder={`Enter your email`}
                  color="white_A700"
                  suffix={
                    <div className="flex h-[48px] w-[48px] items-center justify-center">
                      {
                        <a href="#">
                          <Img
                            src={arrow}
                            alt="arrow icon"
                            className="h-[24px] w-[24px] cursor-pointer "
                          ></Img>
                        </a>
                      }
                    </div>
                  }
                 
                 className="w-[90%] gap-[8px] tracking-[0.36px] text-gray-500_7f sm:pl-4"
                >
                  </Input>
                 </div>
                 <div className="flex w-[46%] items-start justify-between gap-5 md:w-full md:flex-col">
                  <div className="flex flex-col gap-[21px]">
                    <Heading size="s" as="h4" className="!text-white-A700">
                      Product Links
                    </Heading>
                    <ul className="flex flex-col gap-[9px]">
                      <li>
                      <Link to="categories" 
                //  activeClass="gray-800"
              // className="categories"
            
              // spy={true}
              smooth={true}
              duration={500}
              onClick={scrollTo(100)}
                offset={-25}
              >
                        <a href="#">
                          <Text as="p" size="s" className="!text-white-A700">
                            Categories
                          </Text>
                        </a>
                        </Link>
                      </li>
                      <li>
                      <Link to="new-arrivals" 
                //  activeClass="gray-800"
              // className="categories"
            
              // spy={true}
              smooth={true}
              duration={500}
              onClick={scrollTo(100)}
                offset={-25}
              >
                        <a href="#">
                          <Text as="p" className="!text-white-A700">
                            New Arrivals
                          </Text>
                        </a>
              </Link>
                      </li>
                      <li>
                      <Link to="features" 
                //  activeClass="gray-800"
              // className="categories"
            
              // spy={true}
              smooth={true}
              duration={500}
              onClick={scrollTo(100)}
                offset={-25}
              >
                        <a href="#">
                          <Text as="p" className="!text-white-A700">
                            Features
                          </Text>
                        </a>
                        </Link>
                      </li>
                      <li>
                      <Link to="collections" 
                //  activeClass="gray-800"
              // className="categories"
            
              // spy={true}
              smooth={true}
              duration={500}
              onClick={scrollTo(100)}
                offset={-25}
              >
                        <a href="#">
                          <Text as="p" className="!text-white-A700">
                            Collections
                          </Text>
                        </a>
                  </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-[21px]">
                    <Heading size="s" as="h4" className="!text-white-A700">
                      Company
                    </Heading>
                    <ul className="flex flex-col gap-[9px]">
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-white-A700">
                            About
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-white-A700">
                            Blog
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-white-A700">
                            Careers
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-white-A700">
                            Contact
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-white-A700">
                            Services
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-[21px]">
                    <Heading size="s" as="h4" className="!text-white-A700">
                      Support
                    </Heading>
                    <ul className="flex flex-col gap-[9px]">
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-white-A700">
                            Support Center
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-white-A700">
                            FAQ
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-white-A700">
                            Privacy Policy
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" className="!text-white-A700">
                            Terms of service
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                 </div>
                 <a href="#">
                  <div className="flex justify-center md:w-full">
                    <div className="flex w-full flex-col items-start gap-6">
                      <Heading size="s" as="h4" className="!text-white-A700 w-[150px]">
                        Get in Touch
                      </Heading>
                      <div className="flex w-full justify-center gap-5">
                        <Img src={instagram} alt="instagram icon" className="h-[32px] w-[32px]"></Img>
                        <Img src={twitter} alt="instagram icon" className="h-[32px] w-[32px]"></Img>
                        <Img src={facebook} alt="instagram icon" className="h-[32px] w-[32px]"></Img>
                      
                      </div>
                    </div>
                  </div>
                 </a>
                </div>
                <Text size="xs" as="p" className="!text-white-A700">
                  Copyright &#169; 2021 Elliye. All Right Reserved
                </Text>

              </div>
              </div>
              </footer> 
              <hr></hr>
      </div>
    </Fragment>
  );
}

export default HomePage;
