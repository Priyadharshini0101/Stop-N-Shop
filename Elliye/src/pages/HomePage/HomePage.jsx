import React,{useState} from 'react'
import { Helmet } from 'react-helmet'
import Text from '../../components/Text'
import Img from '../../components/Img'
import Button from '../../components/Button'
import Input from '../../components/Input'

function HomePage() {
    const [searchBarValue, setSearchBarValue] = useState('')
  return (
    <>
    <Helmet>
        <title>Summer Sale - Exclusive Discounts on Fashion Collections</title>
        <meta
        name="description"
        content="Discover our Summer Sale with up to 50% off on the latest fashion collecitons. 
        Shop jackets, dresses, accessories, and more, Don't miss out on our new arrivals and featured items!"></meta>
    </Helmet>
    <div className='w-full bg-white-A700'>
        <header className='flex items-center justify-center bg-white-A700 pb-[18px] pt-[17px]'>
            <div className='container-sm flex items-center justify-between gap-5 lg:p-5 md:flex-col md:p-5'>
                <Img src="/src/assets/images/img_header_logo.png" alt="header logo" className="h-[36px] w-[112px] object-contain" ></Img>
                <ul className='flex flex-wrap gap-20 lg:gap-5 md:gap-5'>
               
                    <li>
                    <a href="#" target="_blank">
                        <Text as="p" className='!font-medium !text-gray-800'>
                            Categories
                        </Text>
                        </a>
                    </li>
                   
                    
                    <li>
                    <a href="#">
                        <Text as="p" className='!font-medium !text-gray-800'>
                           New Arrival
                        </Text>
                        </a>
                    </li>
                    <li>
                    <a href="#">
                        <Text as="p" className='!font-medium !text-gray-800'>
                            Features
                        </Text>
                        </a>
                    </li>
                    <li>
                    <a href="#">
                        <Text as="p" className='!font-medium !text-gray-800'>
                            Collections
                        </Text>
                        </a>
                    </li>
                </ul>
                <div className='flex w-[35%] items-center justify-between gap-5 md:w-full'>
                    <div className='flex w-[%33] justify-between gap-5'>
                    <Input
                     
                      name="Search Field"
                      placeholder={`Search here`}
                      value={searchBarValue}
                      onChange={setSearchBarValue}
                      suffix={
                        <div className='flex h-[48px] w-[48px] items-center justify-center'>
                            {
                       <a href="#">
                       <Img src="/src/assets/images/img_search.png" alt="search icon" className="h-[24px] w-[24px] cursor-pointer "></Img>
                       </a> }</div>
                      }/>
                
                      
                      
                        <a href="#" className='flex items-center'>
                            <Img src="/src/assets/images/shopping_cart.png" alt="cart icon" className="h-[24px] w-[24px]"></Img>
                        </a>
                       
                    </div>
                    <a href="#">
                        <Button className="min-w-[107px] font-bold lg:text-[15px] sm:px-4 text-white-A700" size="5xl" shape="square" >Login</Button>
                    </a>
                    
                </div>
            </div>
        </header>
        <div className='h-[600px] self-stretch  bg-[url("/src/assets/images/img_hero_section.png")] bg-cover bg-no-repeat'>
            <div className='flex justify-center bg-white-A700_82 py-[157px] lg:py-8 md:py-5 sm:py-4'>
                <div className='container-xs flex pl-[139px] pr-15 lg:p-5 lg:pl-8 md:p-5 md:px-5 sm:px-4'>
                    <div className='flex w-[47%] flex-col items-start lg:w-full md:w-full'>
                        <Button></Button>
                    </div>
                </div>
            </div>
        </div>
     
    </div>
    </>
  )
}

export default HomePage