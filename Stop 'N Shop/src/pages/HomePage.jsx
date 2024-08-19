import React, { Suspense, useEffect } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import {
  Button,
  Feature,
  Heading,
  Img,
  RatingBar,
  Section,
  Template,
  Text,
} from "../components/index.js";
import {
  jacket,
  jacket7,
  arrow,
  bag,
  broken,
  collection,
  collection1,
  credit_card,
  dress,
  pants,
  shipping,
  shirt,
  shoes,
  support,
} from "../assets/index.js";
import useDataContext from "../contexts/data.js";

function HomePage() {
  const { data,setcategory } = useDataContext();

  const categories = [
    { image: jacket, label: "Jacket",alt:"jacket"},
    { image: shirt, label: "T-shirt",alt:"shirt" },
    { image: pants, label: "Pants" ,alt:"pants"},
    { image: dress, label: "Dress",alt:"dress"},
    { image: shoes, label: "Shoes" ,alt:"shoes"},
    { image: bag, label: "Accesories" ,alt:"accessories"},
  ];
  const help = [
    {
      image: shipping,
      title: "Free Delivery",
      description: (
        <>
          This free shipping
          <br />
          only for selected region
        </>
      ),
    },
    {
      image: credit_card,
      title: "Payment Method",
      description: (
        <>
          This free shipping
          <br />
          only for selected region
        </>
      ),
    },
    {
      image: broken,
      title: "Warranty",
      description: (
        <>
          This free shipping
          <br />
          only for selected region
        </>
      ),
    },
    {
      image: support,
      title: "Customer Support",
      description: (
        <>
          This free shipping
          <br />
          only for selected region
        </>
      ),
    },
  ];

  const { setheader } = useDataContext();
  setheader(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      {/*Title */}
      <Helmet>
        <title>Stop &apos;N Shop - Home</title>
        <meta
          name="description"
          content="Discover our Summer Sale with up to 50% off on the latest fashion collecitons. 
        Shop jackets, dresses, accessories, and more, Don't miss out on our new arrivals and featured items!"
        ></meta>
      </Helmet>

      <div className=" w-full bg-white-A700">
        {/* Banner Section */}
        <div
          className={`h-[600px] self-stretch  bg-[url('/src/assets/Images/img_header.jpg')] bg-cover bg-no-repeat`}
        >
          <div className="flex justify-center bg-white-A700_82 py-[157px] lg:py-8 md:py-5 sm:py-4 h-[575px]">
            <div className="container-xs flex pl-[139px] pr-15 lg:p-5 lg:pl-8 md:p-5 md:px-5 sm:px-4">
              <div className="flex w-[47%] flex-col items-start lg:w-full md:w-full">
                <Button
                  color="white_A700"
                  size="md"
                  shape="square"
                  className="min-w-[271px] font-medium lg:text-xl"
                >
                  50% Off Limited Offer
                </Button>
                <Heading size="lg" as="h1" className="mt-[22px] lg:text-5xl">
                  Summer Collection
                </Heading>
                <Text
                  as="p"
                  className="mt-[25px] w-full leading-8 | text-gray-800"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua{" "}
                </Text>
                <NavLink to="/product_list">
                  {" "}
                  <Button
                    size="md"
                    shape="square"
                    rightIcon={
                      <Img
                        src={arrow}
                        alt="arrow"
                        className="h-[48px] w-[48px] p-2"
                      ></Img>
                    }
                    className="mt-20 min-w-[245px] gap-2.5 font-medium lg:text-xl sm:px-4 text-white-A700 hover:bg-gray-400"
                  >
                    Shop Now
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        {/*Categories Section*/}
        <div
          name="categories"
          className="container-md mt-[103px] flex flex-col gap-7 lg:p-5 md:p-5"
        >
          <Section className="mt-[9px]" heading="Categories"></Section>
          <div className="flex gap-8 md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {categories.map((d, index) => (
            
                     <NavLink to="/product_list"
                       key={"productsList" + index}
                  
                       onClick={() => setcategory(d.alt)}
                         
                       className="flex w-full flex-col items-center gap-[7px] bg-gray-50 px-9   pb-[46px]  pt-9 md:pb-5 sm:p-4 hover:bg-gray-200
                       transition duration-300 hover:scale-110 hover:rotate-6"
                 >
                  <Img
                    src={d.image}
                    alt={d.label}
                    className="h-[96px] w-[96px]"
                  ></Img>
                  <Text as="p">{d.label}</Text>
                  </NavLink>
              
              ))}
            </Suspense>
          </div>
        </div>
        {/* New Arrivals */}
        <div
          name="new-arrivals"
          className="container-sm mt-[98px] flex lg:p-5 md:p-5"
        >
          <div className="flex w-full flex-col gap-[33px]">
            <Section heading="New Arrivals"></Section>
            <div className="flex gap-8 md:flex-col">
              <div className=" flex w-full items-center justify-center gap-6 bg-gray-50 p-7 md:flex-col sm:p-4">
                <NavLink to={`/product/New Arrivals/${58}`}>
                  <Img
                    src={jacket7}
                    alt="product image"
                    className=" h-[500px] justify-center object-center md:w-full"
                  ></Img>
                </NavLink>
                <div className="flex w-[40%] flex-col items-center gap-6 ">
                  <div className="flex flex-col items-center gap-[5px] ">
                    <Text size="md" as="p" className="!text-gray-800">
                      Purple Warm Jacket
                    </Text>
                    <Text as="p" className="!font-medium">
                      $299
                    </Text>
                  </div>
                  <NavLink to={`/product/New Arrivals/${58}`}>
                    <Button
                      size="lg"
                      shape="square"
                      className="min-w-[100px] font-bold lg:text-[15px] sm:px-4 hover:bg-gray-400"
                    >
                      Add to cart
                    </Button>
                  </NavLink>
                </div>
              </div>
              <div className="grid w-full grid-cols-2 gap-8 lg:grid-cols-2 md:grid-cols-1">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {data.map((d) =>
                    d.newArrivals === true ? (
                      <>
                        <Template
                          page="New Arrivals"
                          key={d.id}
                          data={d}
                          size="s"
                          className="bg-gray-50 shadow-sm w-full"
                          addToCart={
                            <NavLink to={`/product/New Arrivals/${d.id}`}>
                              {" "}
                              <Button
                                size="lg"
                                shape="square"
                                className="min-w-[100px] font-bold lg:text-[15px] sm:px-4 hover:bg-gray-400"
                              >
                                Add to cart
                              </Button>
                            </NavLink>
                          }
                        >
                          {" "}
                        </Template>
                      </>
                    ) : (
                      ""
                    )
                  )}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
        {/*Features */}

        <div
          name="features"
          className="container-xs mt-[99px] h-[426px] lg:h-auto lg:p-5 md:h-auto md:p-5"
        >
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

        {/*Collections */}
        <div
          name="collections"
          className="container-md mt-[100px] flex gap-8 lg:p-5 md:flex-col md:p-5"
        >
          <div className="relative h-[400px] w-full lg:h-auto md:h-auto duration-300 transition-opacity  hover:opacity-50">
            <NavLink to="product_list">
              {" "}
              <Img
                src={collection}
                alt="casual image"
                className="h-[400px] w-full object-cover"
              ></Img>
              <Text
                size="lg"
                as="p"
                className="absolute right-[10%] top-[10%] my-auto h-max w-[28%] leading-[54px]md:text-3xl sm:text-[28px] sm:left-[0%]"
              >
                <span className="text-gray-400">
                  <>
                    Casual
                    <br />
                  </>
                </span>
                <span className="text-5xl font-bold text-gray-400 ">
                  Collection
                </span>
              </Text>
            </NavLink>
          </div>

          <div className="relative h-[400px] w-full lg:h-auto md:h-auto">
            <NavLink to="/product_list">
              {" "}
              <Img
                src={collection1}
                alt="casual image"
                className="h-[400px] w-full object-cover  duration-300 transition-opacity  hover:opacity-50"
              ></Img>
              <Text
                size="lg"
                as="p"
                className="absolute left-[10%] top-[10%] my-auto h-max w-[28%] leading-[54px]md:text-3xl sm:text-[28px]"
              >
                <span className="text-white-A700">
                  <>
                    Big Vibe
                    <br />
                  </>
                </span>
                <span className="text-5xl font-bold text-white-A700">
                  Collection
                </span>
              </Text>
            </NavLink>
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
          <div
            className="container-xs absolute bottom-[0.00px] left-0 right-0
          my-auto flex gap-8 lg:p-5 md:relative md:flex-col md:p-5"
          >
            <Suspense fallback={<div>Loading feed...</div>}>
              {help.map((d, index) => (
                <div
                  className="flex justify-between items-center w-full gap-5 px-[46px] py-16 lg:py-8 md:p-5 sm:p-4 bg-white-A700 shadow-xs"
                  key={index}
                >
                  <Img
                    src={d.image}
                    alt={d.title}
                    className="h-[48px] w-[48px]"
                  ></Img>
                  <div className="flex w-[73%] flex-col items-start gap-1.5">
                    <Heading size="xs" as="h6">
                      {d.title}
                    </Heading>
                    <Text
                      as="p"
                      size="xs"
                      className="w-full leading-[20px] text-gray-400"
                    >
                      {d.description}
                    </Text>
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
                {data.map((i) =>
                  i.popularThisWeek === true ? (
                    <>
                      <Template
                        page="Popular this week"
                        key={i.id}
                        data={i}
                        className=" w-full"
                        review={
                          <RatingBar
                            value={i.rating}
                            size={24}
                            className="flex justify-between"
                          ></RatingBar>
                        }
                      ></Template>
                    </>
                  ) : (
                    ""
                  )
                )}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
