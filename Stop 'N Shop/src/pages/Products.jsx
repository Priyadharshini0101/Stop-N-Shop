import React, { useEffect, useState } from "react";
import { Text, Img, RatingBar, Template } from "../components/index.js";
import useDataContext from "../contexts/data.js";
import { Helmet } from "react-helmet";
import {
  dress,
  jacket,
  pants,
  shirt,
  shoes,
  drop_down,
  bag,
} from "../assets/index.js";
import Checkbox from "../components/Checkbox.jsx";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Suspense } from "react";
import Pagination from "../components/Pagination.jsx";

function Products() {
  const { data, setheader } = useDataContext();

  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPage, setNumberofPage] = useState(8);
  const [postsPerPage, setPostsPerPage] = useState([...data]);
  const [rating, setRating] = useState(0);
  const [dropdown, setDropdown] = useState("Newest Items");
  const [price, setPrice] = useState(0);

  const [categories, setCategories] = useState("");
  const dropdownOptions = [
    { id: 1, value: "Newest Items" },
    { id: 2, value: "Oldest Items" },
    { id: 3, value: "Date Ascending" },
    { id: 4, value: "Date Descending" },
  ];
  setheader(true);

  useEffect(() => {
    window.scroll(0, 0);   
  }, []);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
    setNumberofPage(() => pageNumber * 8);
  };

  useEffect(() => {
    let temp = data.slice();
    temp = categories !== "" ? temp.filter((i) => i.alt === categories) : temp;
    temp = rating !== 0 ? temp.filter((i) => i.rating >= rating) : temp;
    temp = price !== 0 ? temp.filter((i) => Number(i.price) <= price) : temp;

    setPostsPerPage(temp);
    handlePagination(1);
  }, [categories, rating, price]);

  const [prevPrice, setPrevPrice] = useState([]);
  const handlePrevPrice = (price) => {
    if (prevPrice[prevPrice.length - 1] === price) {
      prevPrice.pop();
    } else {
      prevPrice[prevPrice.findIndex((i) => i === price)] = 0;
    }
  };

  const handleClick = (id, checked) => {
    let currentPrice = 0;
    if (id === "AllPriceCheckbox") {
      !checked ? (currentPrice = 1500) : handlePrevPrice(1500);
    } else if (id === "MidPriceCheckbox") {
      !checked ? (currentPrice = 250) : handlePrevPrice(250);
    } else if (id === "HighPriceCheckbox") {
      !checked ? (currentPrice = 500) : handlePrevPrice(500);
    } else if (id === "PremiumPriceCheckbox") {
      !checked ? (currentPrice = 750) : handlePrevPrice(750);
    } else if (id === "LuxuryPriceCheckbox") {
      !checked ? (currentPrice = 1000) : handlePrevPrice(1000);
    }
    if (currentPrice != 0) {
      prevPrice.push(currentPrice);
    }
    prevPrice.sort((a, b) => a - b);
    if (prevPrice.length > 0) {
      setPrice(prevPrice[prevPrice.length - 1]);
    } else {
      setPrice(1500);
    }
  };

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  return (
    <>
      <Helmet>
        <title>Products - Exclusive Discounts on Fashion Collections</title>
        <meta
          name="description"
          content={`Get the details of our and explore similar products. High-quality materials, great prices, and stylish designs. Add to your cart today at Stop 'N Shop!`}
        ></meta>
      </Helmet>
      <div className="container-xs sm:gap-[31px] gap-[63px] mt-[14px] flex flex-col lg:p-5 md:p-5">
        <div className="flex flex-col gap-[25px] items-start">
          <div className="flex flex-wrap gap-4">
            <Text as="p" className="self-start !font-medium">
              Home
            </Text>
            <Text
              as="p"
              className="self-start !font-medium !text-blue-gray-100"
            >
              &gt;
            </Text>
            <Text as="p" className="self-end !font-medium !text-gray-800">
              Products
            </Text>
          </div>
          <div className="flex mt-[10px] items-start gap-8 self-stretch md:flex-col">
            <div className="w-[14%] flex flex-col items-start gap-8 md:w-full">
              <div className="h-[0.2px] w-full self-stretch bg-blue_gray-100"></div>
              <div className="gap-[25px] flex flex-col w-full">
                <div className="gap-[25px]  flex flex-col items-start">
                  <Text
                    size="texts"
                    as="p"
                    className={`lg:text-[14px] text-[16px] font-medium !text-gray-800`}
                  >
                    Categories
                  </Text>
                </div>

                <div className=" flex flex-col">
                  <div
                    className="flex gap-[25px] items-center "
                    onClick={() => setCategories("jacket")}
                  >
                    <Img
                      src={jacket}
                      alt="jacket"
                      className="w-[24px] h-[24px] cursor-pointer hover:scale-125 cursor-pointer hover:scale-125"
                    ></Img>
                    <Text
                      size="texts"
                      as="p"
                      className={`lg:text-[14px] text-[16px] font-normal !text-gray-500 !cursor-pointer hover:!text-gray-800 ${
                        categories === "jacket"
                          ? `!text-gray-800 !font-bold`
                          : ``
                      }`}
                    >
                      Jacket
                    </Text>
                  </div>
                </div>
                <div className=" flex flex-col">
                  <div className="flex gap-[25px] items-center">
                    <Img
                      src={shirt}
                      alt="shirt"
                      className="w-[24px] h-[24px] cursor-pointer hover:scale-125"
                    ></Img>
                    <Text
                      size="texts"
                      as="p"
                      className={`lg:text-[14px] text-[16px] font-normal !text-gray-500 cursor-pointer  hover:!text-gray-800 ${
                        categories === "shirt"
                          ? `!text-gray-800 !font-bold`
                          : ``
                      }`}
                      onClick={() => setCategories("shirt")}
                    >
                      T - shirt
                    </Text>
                  </div>
                </div>
                <div className=" flex flex-col">
                  <div className="flex gap-[25px] items-center">
                    <Img
                      src={pants}
                      alt="Pants"
                      className="w-[24px] h-[24px] cursor-pointer hover:scale-125"
                    ></Img>
                    <Text
                      size="texts"
                      as="p"
                      className={`lg:text-[14px] text-[16px] font-normal !text-gray-500 !cursor-pointer  hover:!text-gray-800 ${
                        categories === "pants"
                          ? `!text-gray-800 !font-bold`
                          : ``
                      }`}
                      onClick={() => setCategories("pants")}
                    >
                      Pants
                    </Text>
                  </div>
                </div>
                <div className=" flex flex-col">
                  <div className="flex gap-[25px] items-center">
                    <Img
                      src={dress}
                      alt="dress"
                      className="w-[24px] h-[24px] cursor-pointer hover:scale-125"
                    ></Img>
                    <Text
                      size="texts"
                      as="p"
                      className={`lg:text-[14px] text-[16px] font-normal !text-gray-500 !cursor-pointer  hover:!text-gray-800 ${
                        categories === "dress"
                          ? `!text-gray-800 !font-bold`
                          : ``
                      }`}
                      onClick={() => setCategories("dress")}
                    >
                      Dress
                    </Text>
                  </div>
                </div>
                <div className=" flex flex-col">
                  <div className="flex gap-[25px] items-center">
                    <Img
                      src={shoes}
                      alt="Shoes"
                      className="w-[24px] h-[24px] cursor-pointer hover:scale-125"
                    ></Img>
                    <Text
                      size="texts"
                      as="p"
                      className={`lg:text-[14px] text-[16px] font-normal !text-gray-500 !cursor-pointer  hover:!text-gray-800 ${
                        categories === "shoes"
                          ? `!text-gray-800 !font-bold`
                          : ``
                      }`}
                      onClick={() => setCategories("shoes")}
                    >
                      Shoes
                    </Text>
                  </div>
                </div>
                <div className=" flex flex-col">
                  <div className="flex gap-[25px] items-center">
                    <Img
                      src={bag}
                      alt="accessories"
                      className="w-[24px] h-[24px] cursor-pointer hover:scale-125"
                    ></Img>
                    <Text
                      size="texts"
                      as="p"
                      className={`lg:text-[14px] text-[16px] font-normal !text-gray-500 !cursor-pointer  hover:!text-gray-800 ${
                        categories === "accessories"
                          ? `!text-gray-800 !font-bold`
                          : ``
                      }`}
                      onClick={() => setCategories("accessories")}
                    >
                      Accessories
                    </Text>
                  </div>
                </div>
              </div>
              <div className="h-[0.2px] w-full self-stretch bg-blue_gray-100"></div>
              <div className="gap-[29px] w-[68%] flex flex-col items-start lg:w-full md:w-full">
                <Text
                  size="texts"
                  as="p"
                  className="lg:text-[14px] text-[16px] font-medium !text-gray-800"
                >
                  Filter by Price
                </Text>
                <div className="flex flex-col gap-6 self-stretch">
                  <Checkbox
                    name="All Price Checkbox"
                    label="All Price"
                    id="AllPriceCheckbox"
                    handleClick={handleClick}
                    className="text-[16px] flex gap-[10px]  hover:!text-gray-800 text-gray-500"
                  ></Checkbox>
                  <Checkbox
                    name="Mid Price Checkbox"
                    label="$100 - $250"
                    id="MidPriceCheckbox"
                    handleClick={handleClick}
                    className="text-[16px] flex gap-[10px]  hover:!text-gray-800 text-gray-500"
                  ></Checkbox>

                  <Checkbox
                    name="HighPriceCheckbox"
                    label="$250 -  $500"
                    id="HighPriceCheckbox"
                    handleClick={handleClick}
                    className="text-[16px] flex gap-[10px]  hover:!text-gray-800 text-gray-500"
                  ></Checkbox>

                  <Checkbox
                    name="Premium Price Checkbox"
                    label="$500 - $750"
                    id="PremiumPriceCheckbox"
                    handleClick={handleClick}
                    className="text-[16px] flex gap-[10px]  hover:!text-gray-800 text-gray-500"
                  ></Checkbox>

                  <Checkbox
                    name="Luxury Price Checkbox"
                    label="$750 - $1000"
                    id="LuxuryPriceCheckbox"
                    handleClick={handleClick}
                    className="text-[16px] flex gap-[10px]  hover:!text-gray-800 text-gray-500"
                  ></Checkbox>
                </div>
              </div>
              <div className="h-[0.2px] w-full self-stretch bg-blue_gray-100"></div>
              <div className="flex w-[78%] flex-col items-start gap-[29px] lg:w-full md:w-full">
                <Text
                  as="p"
                  className="lg:text-[14px] text-[16px] !font-medium !text-gray-800"
                >
                  Filter by Rating
                </Text>
                <div className="flex gap-4">
                  <RatingBar
                    className="flex flex-1  gap-2.5"
                    size={24}
                    isEditable={true}
                    value={rating}
                    ratingChanged={ratingChanged}
                  ></RatingBar>
                </div>
              </div>
              <div className="h-[0.2px] w-full self-stretch bg-blue_gray-100"></div>
            </div>

            <div className="flex flex-1 flex-col gap-[29px] md:self-stretch">
              <div className="flex justify-between gap-5 sm:flex-col">
                <Text as="p" className="!font-medium">
                  <span className="text-gray-500">Viewing&nbsp;</span>
                  <span className="text-gray-800">
                    {currentPage === Math.ceil(postsPerPage.length / 8)
                      ? postsPerPage.length % 8
                      : currentPage * 8}
                  </span>
                  <span className="text-gray-500">&nbsp;of&nbsp;</span>
                  <span className="text-gray-500">
                    {postsPerPage.length} &nbsp;
                  </span>
                  <span className="text-gray-500">products</span>
                </Text>

                <div className="flex items-center gap-4">
                  <Menu
                    as="div"
                    className=" relative sm:right-[0%] overflow-y text-left"
                  >
                    <MenuButton className=" flex w-56 justify-between  text-[16px] sm:text-[14px] md:px-1.5 px-1 py-1 text-1xl  text-white ring-1 ring-inset ring-gray-500 ">
                      <p className="text-gray-500 px-1">Sort by:</p>&nbsp;{" "}
                      {dropdown}
                      <img
                        src={drop_down}
                        className="w-[24px] h-[24px] my-[1.5px]"
                      />
                    </MenuButton>

                    <MenuItems
                      transition
                      className="absolute overflow-y-auto left-0 bg-white-A700  z-10 w-56 origin-top-right  ring-1 ring-inset ring-gray-500  transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="py-1">
                        {dropdownOptions.map((dropdown) => (
                          <MenuItem key={dropdown.id}>
                            <a
                              href="#"
                              className="block px-2.5 py-1.5 text-sm text-white data-[focus]:bg-gray-300 data-[focus]:text-white"
                              onClick={() => setDropdown(dropdown.value)}
                            >
                              {dropdown.value}
                            </a>
                          </MenuItem>
                        ))}
                      </div>
                    </MenuItems>
                  </Menu>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center overflow-hidden">
                <div className="grid grid-cols-4 grid-rows-2 gap-8  md:flex-col md:grid-cols-3   sm:grid-cols-2 xs:grid-cols-1">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {postsPerPage.map((i, index) =>
                      index < numberOfPage && index >= numberOfPage - 8 ? (
                        <>
                          <Template
                            page="Popular this week"
                            key={i.id}
                            data={i}
                            className=" w-[250px]"
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
                <Pagination
                  length={postsPerPage.length}
                  postsPerPage={8}
                  handlePagination={handlePagination}
                  currentPage={currentPage}
                ></Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
