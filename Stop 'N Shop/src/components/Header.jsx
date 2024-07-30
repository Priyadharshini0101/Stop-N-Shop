import React, { useState } from "react";
import { Button, Img, Input, Text } from "./index.js";
import { Link } from "react-scroll";
import useDataContext from "../contexts/data.js";
import { logo, white_search_icon, shopping_cart } from "../assets/index.js";
import { NavLink } from "react-router-dom";

function Header() {
  const { scroll, header } = useDataContext();

  const [searchBarValue, setSearchBarValue] = useState("");

  return (
    <header className=" flex items-center justify-center bg-white-A700 pb-[18px] pt-[17px]">
      <div className="container-sm flex items-center justify-between gap-5 lg:p-5 md:flex-col md:p-5">
        <Img
          src={logo}
          alt="header logo"
          className="h-[50px] w-[50px] object-contain"
          imgText={
            <Text
              size="s"
              className="!font-bold  !text-gray-800 underline underline-offset-4 italic
          "
            >
              Stop 'N Shop
            </Text>
          }
        ></Img>

        {!header ? (
          <ul
            className="flex flex-wrap gap-20 lg:gap-5 md:gap-5"
            onScroll={true}
          >
            <Link
              to="categories"
              offset={-25}
              smooth={true}
              duration={500}
              spy={true}
              onClick={() => {
                scroll(100);
              }}
            >
              <li>
                <a href="#" target="_blank">
                  <Text
                    as="p"
                    className={`!font-medium !text-gray-800  hover:!text-gray-400`}
                  >
                    Categories
                  </Text>
                </a>
              </li>
            </Link>

            <li>
              <Link
                to="new-arrivals"
                offset={-25}
                smooth={true}
                duration={500}
                onClick={() => {
                  scroll(100);
                }}
              >
                <a href="#">
                  <Text
                    as="p"
                    className="!font-medium !text-gray-800 hover:!text-gray-400"
                  >
                    New Arrivals
                  </Text>
                </a>
              </Link>
            </li>
            <li>
              <Link
                to="features"
                offset={-25}
                smooth={true}
                duration={500}
                onClick={() => {
                  scroll(100);
                }}
              >
                <a href="#">
                  <Text
                    as="p"
                    className="!font-medium !text-gray-800 hover:!text-gray-400 "
                  >
                    Features
                  </Text>
                </a>
              </Link>
            </li>
            <li>
              <Link
                to="collections"
                offset={-25}
                smooth={true}
                duration={500}
                onClick={() => {
                  scroll(100, "Collections");
                }}
              >
                <a href="#">
                  <Text
                    as="p"
                    className="!font-medium !text-gray-800 hover:!text-gray-400"
                  >
                    Collections
                  </Text>
                </a>
              </Link>
            </li>
          </ul>
        ) : (
          <div></div>
        )}

        <div className="flex w-[35%] items-center justify-between gap-5 md:w-full sm:flex-col">
          <div className="flex w-[%33] justify-between gap-5">
            <Input
              name="Search Field"
              placeholder={`Search here`}
              value={searchBarValue}
              onChange={setSearchBarValue}
              variant="outline"
              suffix={
                <div className="flex h-[48px] w-[48px] items-center justify-center hover:bg-gray-950">
                  {
                    <a href="#">
                      <Img
                        src={white_search_icon}
                        alt="search icon"
                        className="h-[24px] w-[24px] cursor-pointer  "
                      ></Img>
                    </a>
                  }
                </div>
              }
            />
            <a href="#" className="flex items-center ">
              <NavLink to="/cart">
                <Img
                  src={shopping_cart}
                  alt="cart icon"
                  className="h-[24px] w-[24px] "
                ></Img>
              </NavLink>
            </a>
          </div>
          <a href="#" className="sm:relative sm:right-[-100px]">
            <Button
              className="min-w-[107px] font-bold  lg:text-[15px] sm:px-4 text-white-A700 hover:bg-gray-400"
              size="5xl"
              shape="square"
            >
              Login
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
