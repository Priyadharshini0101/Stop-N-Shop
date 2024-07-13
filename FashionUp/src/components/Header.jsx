import React,{useState} from 'react'
import {Button,Img,Input,Text} from './index.js'
import { Link} from "react-scroll";
import {
logo,white_search,
  shopping_cart} from '../assets/index.js'
import useDataContext from '../contexts/data.js';
import {NavLink} from 'react-router-dom'

function Header() {
 
  const {data,scroll,header} = useDataContext()
console.log(header)
  const [searchBarValue, setSearchBarValue] = useState("");
  
  return (
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
      
     
  { !header ? ( <ul className="flex flex-wrap gap-20 lg:gap-5 md:gap-5" onScroll={true}>
        <li><Link
        //  activeClass="tab"
        // className="categories"
        to="categories"
        offset={-25}
        smooth={true}
        duration={500}
        onClick={scroll(100)}
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
        onClick={scroll(100)}
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
        onClick={scroll(100)}
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
        onClick={scroll(100)}
        >
          <a href="#">
            <Text as="p" className="!font-medium !text-gray-800">
              Collections
            </Text>
          </a>
          </Link>
        </li>
      </ul>):
      (<div></div>)}

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
                      src={white_search}
                      alt="search icon"
                      className="h-[24px] w-[24px] cursor-pointer "
                    ></Img>
                  </a>
                }
              </div>
            }
          />
          <a href="#" className="flex items-center">
            <NavLink to="/cart">
            <Img
              src={shopping_cart}
              alt="cart icon"
              className="h-[24px] w-[24px]"
            ></Img>
            </NavLink>
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
  )
}

export default Header