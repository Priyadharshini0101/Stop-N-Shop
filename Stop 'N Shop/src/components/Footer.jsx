import React from "react";
import { Heading,Img,Input,Text} from './index.js'
import { Link} from "react-scroll";
import {arrow,facebook,instagram,twitter} from '../assets/index.js'

import useDataContext from '../contexts/data.js';

function Footer() {
    const {scroll,header} = useDataContext()

  return (
    <>
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
                 
                 className="h-[48px] w-[90%] gap-[8px] tracking-[0.36px] text-gray-500_7f sm:pl-4"
                >
                  </Input>
                 </div>
                 <div className={`flex  items-start justify-between gap-5 md:w-full md:flex-col
                  ${header ? `w-[32%]`: `w-[42%]`}`}>
                { !header ? (<div className="flex flex-col gap-[21px]">
                    <Heading size="s" as="h4" className="!text-white-A700">
                      Product Links
                    </Heading>
                    <ul className="flex flex-col gap-[9px]">
                      <li>
                      <Link to="categories" 
                //  activeClass="gray-800"
              // className="categories"
              smooth={true}
              duration={500}
              onClick={scroll(100)}
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
              smooth={true}
              duration={500}
              onClick={scroll(100)}
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
              smooth={true}
              duration={500}
              onClick={scroll(100)}
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
              smooth={true}
              duration={500}
              onClick={scroll(100)}
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
                  </div>) : ""}
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
                  Copyright &#169; 2021 Stop 'N Shop. All Right Reserved
                </Text>

              </div>
              </div>
              </footer> 
              <hr></hr></>
  )
}

export default Footer