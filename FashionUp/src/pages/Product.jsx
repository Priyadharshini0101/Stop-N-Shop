import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Text,Section, Feature,Heading,Img,Button,RatingBar } from '../components/index';
import useDataContext from '../contexts/data';
import { Helmet } from 'react-helmet';
import { shopping_cart_white } from '../assets';

function Product() {
  const { page,id } = useParams();

  const {data,setheader,addToCart,setaddtocart} = useDataContext();
   setheader(true);
  const product = data.filter((d) => (d.id === id))
  
  const {image,label,price,alt,rating,quantity} = product['0']
  
  useEffect(() => {
    window.scrollTo(0, 0)
    setToCart(quantity)
  }, [id])
  const [toCart, setToCart] = useState(quantity)
  const addQuantity = () =>{
    setToCart((add) => add + 1);
   
  }
  const substractQuantity= () =>{
    setToCart((sub) => sub - 1);
  }


  return (
    <>
    <Helmet>    
      <title>{label}</title>
      <meta
      name="description"
      content={`Get the details of our ${label} and explore similar products. High-quality materials, great prices, and stylish designs. Add to your cart today at Fashion Up!`}>
      </meta>
      </Helmet>
      <div className='flex w-full flex-col items-center b-white-A700'>
      <div className='flex w-full flex-col items-start gap-14 sm:gap-7'>
            <div className='flex flex-col gap-[29px] self-stretch'>
              <div className='flex px-[3%] flex-wrap gap-4'>
                <Text as="p" className='self-start !font-medium'>
                {page}
                 </Text>
                <Text as="p" className='self-start !font-medium !text-blue-gray-100'>
                  &gt;
                </Text>
                <Text as="p" className='self-end !font-medium'>
                  {label}
                </Text>
              </div>
              <div className='flex w-full sm:flex-col'>
                <div className='flex w-full justify-center p-10'>
                  <Img
                  src={image}
                  alt={alt}
                  className="h-[523px]   object-cover lg:h-auto md:h-auot"
                  ></Img>
                </div>
                <div className='w-full flex flex-col items-start gap-[31px] p-10'>
                  <Heading
                  size="md"
                  as="h1"
                  className="leading-[25px] lg:w-full  md:w-full md:text=4xl sm:text-3xl">
                      <>
                      {label}
                      </>
                  </Heading>
                  <Text size="md" as="p" className='md:text-3xl sm:text-[28px]'>
                    {price}
                  </Text>
                  <Text as="p" className='w-[75%] leading-8'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                  <RatingBar
                value={rating}
                isEditable={true}
                size={24}
                className="flex justify-between"
                ></RatingBar>
                  
               
                <Text as="p" className='mb-[9px]  !font-bold !text-gray-800'>
                  Quantity
                </Text>
                <div className='flex'>
             
                    <Button
                    size="sm"
                    shape="square"
                     onClick={addQuantity}
                    className=" w-full mr-2.5 font-medium lg:text-[15px] sm:px-4">
                    +
               
                    </Button>
                    <input     
                    value={toCart}
                    onChange={(e) => setToCart(Number(e.target.value))}
                    className=" rounded-[0px] text-gray-800 px-2 text-lg border-gray-800 border border-solid border-[1px] w-[48px] h-[32px] "
                  ></input>
                                    
                    
                    <Button
                    onClick={substractQuantity}
                    size="sm"
                    shape="square"
                    className=" w-full ml-2.5 font-medium lg:text-[15px] sm:px-4">
                    -

                    </Button>
                
                </div>
                <Button
                    size="3xl"
                    shape="square"
                    rightIcon={<Img
                    src={shopping_cart_white} alt="cart" className='h-[32px] w-[32px]'></Img>}
                    className='min-w-[245px] gap-5 px-5 font-bold lg:text-[15px] sm:px-4'
                    onClick={() => {product['0'].quantity = toCart, setaddtocart(product['0'])}}>
                    {addToCart.findIndex((cart) => (id === cart.id)) === -1 ?  'Add to Cart':'Remove from Cart'}  
                    </Button>
              </div>
              </div>
          
            </div>

      </div> 
        <div className="container-xs mt-[99px] h-[426px] lg:h-auto lg:p-5 md:h-auto md:p-5">
                  <Section heading="Similar Product"></Section>           
                    <Feature filter={alt} design={false} product_id={id}></Feature>
        </div>
      </div>
      </>
  )
}

export default Product