import React, { useState, useEffect } from "react";
import { Button, Img, Input, Text } from "./index.js";
import { Link } from "react-scroll";
import useDataContext from "../contexts/data.js";
import { logo, white_search_icon, shopping_cart, drop_down,mail} from "../assets/index.js";
import { NavLink } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import {auth, logout, db } from '../firebase.js'
import { collection, query, where, getDocs } from "firebase/firestore";


function Header() {
  const { scroll, header } = useDataContext();
  const [menu, setMenu] = useState(false);
  const [searchBarValue, setSearchBarValue] = useState("");
  const [user,setUser] = useState()
  
  useEffect(() =>{
    
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        const q = query(collection(db, "user"), where("uid", "==", user.uid));
      
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setUser(doc.data())
        });   
      }
   
   

  
           
    })

  

  },[])

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

        <div className="flex   items-center justify-between gap-[25px] md:w-full sm:flex-col">
          {/* <div className="flex w-[450] justify-between gap-5"> */}
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
                  className="h-[24px] w-[24px]"
                ></Img>
              </NavLink>
            </a>
            <div className="flex gap-[10px] items-center ">
              <img src={mail}></img>
           <Text className="!text-gray-800 !font-extrabold text-1xl text-transform: capitalize">{user ? user.name : "User"}</Text>
           <img
                  src={drop_down}
                  className={`w-[16px] h-[16px] mt-[2.5px]
                    ${
                    menu
                      ? `rotate-180 transition ease-in`
                      : `transition ease-out`
                  } hover:ease-linear`}
                  type="button"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                   onClick={() => setMenu((menu) => !menu)}
                ></img>
          </div>

        
         
     
        
          <div class="relative inline-block top-[-25px] right-[-25px]">
             
             <div
             
              onMouseOver={() => setMenu(true)}
              className="transition duration-500 ease-in-out   absolute right-0 z-10 mt-2 w-40 origin-top-right top-[40px] bg-white-A700 shadow-md "
               role="menu"
               aria-orientation="vertical"
               aria-labelledby="menu-button"
               tabindex="-1"
               
                 
             >
               <div
                 role="none"
                 className={`py-1 ${menu ? `py-2.5 px-1 sm:px-0.5 sm:py-1.5` : `hidden`}`}
           
               >
               
                 
                 <div className="flex gap-[10px] py-[1%] px-[10%]">
                  <NavLink to="/purchases">
                 <a
                     href="#"
                     class="text-[14px] hover:font-bold py-[4%] text-left"
                     role="menuitem"
                     tabindex="-1"
                     id="menu-item-1"
                   >
                    Purchases
                   </a>
                   </NavLink>
                 </div>
                   

                 <div className="flex gap-[10px] py-[1%] px-[10%]" onClick={() => logout()}>
                   <a
                     href="#"
                     class="text-[14px] hover:font-bold  py-[4%]  text-left"
                     role="menuitem"
                     tabindex="-1"
                     id="menu-item-1"
                   >
                    Sign Out
                   </a>
               
                 </div>
               
               </div>
             </div>
           </div>
         </div>

            
        </div>

    </header>
  );
}

export default Header;
