import React, { useState, useEffect } from "react";
import useDataContext from "../contexts/data";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Text, Heading, Img, Button, Input } from "../components/index.js";
import { createColumnHelper } from "@tanstack/react-table";
import ReactTable from "../components/ReactTable.jsx"; 
import { close, shipping,paypal,credit_card_payment, bank_transfer } from "../assets/index.js";
import toast from "react-hot-toast";
import NotFound from "./NotFound.jsx";
import Select from 'react-select'

function Cart() {
  const { setheader, addToCart, setaddtocart, applyCode, setapplycode,setaddtopurchase} =
    useDataContext();
  const [sum, setSum] = useState(0);
  const [checkout,setCheckout] = useState(false)
  const [completed ,setCompleted] = useState(false)
  const [paymentMethod,setPaymentMethod] = useState("")
  const countries = [ { value: 'India', label: 'India' },
    { value: 'United States of America', label: 'United States of America' },
    { value: 'Europe', label: 'Europe' }];
  const months = [{
    value:1,label:'January'},
    {value:2,label:'Febuary'},
    {value:3,label:'March'},
    {value:4,label:'April'},
    {value:5,label:'May'},
    {value:6,label:'June'},
    {value:7,label:'July'},
    {value:8,label:'August'},
    {value:9,label:'September'},
    {value:10,label:'October'},
    {value:11,label:'November'},
    {value:12,label:'December'},
  ]

  const years = [
    {value:2024,label:'2024'},
    {value:2025,label:'2025'},
    {value:2026,label:'2026'},
    {value:2027,label:'2027'}, 
  ]
  const [select,setSelect] = useState(null)
  
  
  const setTotal = () => {
    setSum(0);

    addToCart.map((cart) => setSum((c) => c + cart.price * cart.quantity));
    if (applyCode) {
      setSum((c) => c - 100);
    }
  };

  const calculateDiscount = () => {
    if (applyCode == true) {
      return;
    }

    setapplycode();

    setSum((c) => c - 100);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setTotal();
  }, [addToCart]);

  setheader(true);

  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("label", {
        cell: (info) => (
          <div className="flex flex-1 justify-center gap-5 md:self-stretch">
            <Text
              key={info.getValue("label")}
              size="md"
              as="p"
              className="ml-[25px] w-[200px]  !text-gray-800 md:ml-0"
            >
              {info?.getValue("label")}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pb-[35px] !font-medium sm:pb-4">
            Product
          </Text>
        ),
      }),
      tableColumnHelper.accessor("image", {
        cell: (info) => (
          <div className="flex flex-1  justify-center gap-5 md:self-stretch sm:hidden">
            <Img
              key={info.getValue("image")}
              src={info.getValue("image")}
              className="h-[200px] w-[200px] object-contain"
            ></Img>
          </div>
        ),
        header: (info) =>(
          <Text as="p" className="pb-[35px] !font-medium sm:pb-4">
          Product Images
        </Text>
        ),
        meta: { width: "500px" },
      }),
      tableColumnHelper.accessor("quantity", {
        cell: (info) => (
          <div className="flex flex-1 justify-center gap-5 md:self-stretch">
            <Text size="md" as="p" className=" !text-gray-800 md:ml-0">
              {info?.getValue("quantity")}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pb-[31px] pt-[5px] !font-medium sm:pb-4">
            Quantity
          </Text>
        ),
        meta: { width: "661px" },
      }),
      tableColumnHelper.accessor("price", {
        cell: (info) => (
          <div className="flex flex-1 justify-center gap-5 md:self-stretch">
            <Text
              key={info.getValue("price")}
              size="md"
              as="p"
              className=" !text-gray-800 md:ml-0"
            >
              {"$" + info?.getValue("price")}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pb-[33px] pt-[3px] !font-medium sm:pb-4">
            Price
          </Text>
        ),
        meta: { width: "661px" },
      }),
      tableColumnHelper.accessor("id", {
        cell: (info) => (
          <div className="flex">
            <div className="flex flex-1 justify-center gap-5 md:self-stretch">
              <Text
                key={info.getValue("id")}
                size="md"
                as="p"
                className=" !text-gray-800 md:ml-0"
              >
                {addToCart.map((cart, index) =>
                  cart.id === info.getValue("id")
                    ? "$" + Number(cart.price) * Number(cart.quantity)
                    : ""
                )}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pb-[35px] !font-medium sm:pb-4">
            Total
          </Text>
        ),
        meta: { width: "661px" },
      }),
      tableColumnHelper.accessor("id",{
        cell: (info) => (
          <div className="flex">
          <div className="flex flex-1 justify-center gap-5 md:self-stretch">
      <Img
          src={close}
          alt="Close"
          className="h-[32px] w-[32px] sm:mr-[25px] sm:ml-[25px] sm:w-[24px] sm:h-[24px]"
          onClick={() => {
            const product = addToCart.filter(
              (item) => item.id === info.getValue("id")
            );

            setaddtocart(product["0"]);

            let { price, quantity } = product["0"];
            setSum((c) => c - Number(price) * Number(quantity));
            toast.success("Remove from Cart ")
          }}
        ></Img>
        </div>
        </div>
        
        ),
        header: (info) => (
   
          <Text as="p" className="pb-[35px] !font-medium sm:pb-4">
            Remove
          </Text>
        ),
        meta: { width: "661px" },
      })
    ];
  }, [addToCart]);

  return (
    <>
      <Helmet>
        <title>Shopping Cart - Find Your Favorite Products</title>
        <meta
          name="description"
          content="Explore your shopping cart to review selected items. Apply coupon codes, continue shopping, or proceed to checkout"
        ></meta>
      </Helmet>
      <div className="container-sm mt-[31px] flex flex-col gap-[79px] lg:gap-[79px] lg:p-5 md:gap-[59px] md:p-5 sm:gap-[39px]">
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap gap-4 self-start">
            <Text as="p" className="self-start !font-medium">
              Home
            </Text>
            <Text as="p" className="self-end !font-medium">
              &gt;
            </Text>
            <Text as="h1" className="self-end !font-medium !text-gray-800 ">
              Shopping Cart
            </Text>
          </div>
          <Heading>Shopping Cart</Heading>
          <div className="md:hidden mt-10 flex w-full justify-center gap-5  md:flex-col">
            <div className="flex w-[40%] h-[50px] items-center justify-center gap-[25px] md:w-full md:flex-col">
              <div className="flex items-center justify-center gap-5 md:w-full">
                <Text
                  size="md"
                  as="p"
                  className={`flex h-[56px] w-[56px] items-center justify-center rounded-[28px] border-2 border-solid ${!checkout ? `border-gray-800 text-center !text-gray-800`:`border-blue_gray-100 text-center !text-blue_gray-100`}`}
                >
                  1
                </Text>
                <Text size="md" as="p" className={` ${!checkout ? `!text-gray-800`: `!text-blue_gray-100`}`}>
                  Shopping Cart
                </Text>
              </div>
              <div className={`h-[2px] w-[50%] mt-[5px] ${!checkout ? `bg-gray-800` : `bg-blue_gray-100` } md:self-stretch`}></div>
            </div>

            <div className="flex w-[40%] h-[50px] items-center justify-center gap-[25px] md:w-full md:flex-col">
              <div className="flex items-center justify-center gap-5 md:w-full">
                <Text
                  size="md"
                  as="p"
                  className={`flex h-[56px] w-[56px] items-center justify-center rounded-[28px] border-2 border-solid border-blue_gray-100 text-center !text-blue_gray-100 ${checkout && !completed ? `border-gray-800 text-center !text-gray-800`:`border-blue_gray-100 text-center !text-blue_gray-1`}`}
                >
                  2
                </Text>
                <Text size="md" as="p" className={`${checkout && !completed ? `!text-gray-800`: `!text-blue_gray-100`}`}>
                  Checkout
                </Text>
              </div>
              <div className={`h-[2px] w-[50%] mt-[5px] ${checkout && !completed ? `bg-gray-800` :`bg-blue_gray-100`}`}></div>
            </div>
            <div className="flex w-[20%] h-[50px] items-center  gap-[25px] md:w-full md:flex-col">
              <div className="flex items-center justify-center gap-5 md:w-full">
                <Text
                  size="md"
                  as="p"
                  className={`flex h-[56px] w-[56px] items-center justify-center rounded-[28px] border-2 border-solid border-blue_gray-100 text-center !text-blue_gray-100 ${completed ? `border-gray-800 text-center !text-gray-800`:`border-blue_gray-100 text-center !text-blue_gray-1`}`}
                >
                  3
                </Text>
                <Text size="md" as="p" className={`${completed ? `!text-gray-800`: `!text-blue_gray-100`}`}>
                  Completed
                </Text>
              </div>
            </div>
          </div>
        </div>

       { !checkout ? <div className="flex flex-col items-end gap-[79px] lg:gap-[79px] md:gap-[59px] sm:gap-[39px]">
          <div className="flex flex-col gap-[30px] self-stretch">
          {addToCart.length > 0 ? <div>
              <ReactTable
                size="xs"
                bodyProps={{ className: "" }}
                headerProps={{ className: "flex-wrap" }}
                rowDataProps={{ className: "md:flex-col" }}
                columns={tableColumns}
                className="md:whitespace-nowrap md:block md:overflow-x-auto"
                data={addToCart}
              ></ReactTable>
            </div>:<NotFound title="No Items Added"></NotFound>}
            <div className="flex items-center justify-between gap-5 md:flex-col">
              <div className="flex gap-0.5  items-center justify-between md:justify-start md:gap-[50px] xs:gap-[5px] xs:justify-center p-4 md:w-full">
                <Input
                  placeholder="Enter coupon code"
                  className=" !text-gray-800"
                  
                  onChange={(e) => setDiscount(Number(e.target.value))}
                ></Input>
                <Button
                  size="xl"
                  shape="square"
                  className="min-w-[137px] font-medium lg:text-[15px]"
                  onClick={() => calculateDiscount()}
                >
                  Apply Code
                </Button>
              </div>
              <div className="flex flex-col items-end w-full  gap-4">
                <Text as="p" className="!font-medium">
                  Total
                </Text>
                <Heading as="h2" className="md:text-3xl sm:text-[28px]">
                  {applyCode ? (
                    <Text as="p" size="md" className="!font-mono line-through">
                      {"$" + (sum + 100)}
                    </Text>
                  ) : (
                    ""
                  )}
                  {"$" + sum}
                </Heading>
              </div>
            </div>

            <div className="flex flex-col items-end justify-between gap-5 md:flex-col">
              <div className="flex justify-between md:justify-end gap-[50px] lg:w-full md:w-full xs:flex-col xs:gap-[5px]">
                <Link to="/">
                  {" "}
                  <Button
                    size="xs"
                    variant="outline"
                    shape="square"
                    className="min-w-[207px] xs:w-full font-medium lg:text-[15px]"
                  >
                    Continue Shopping
                  </Button>
                </Link>
                <Button
                  size="xs"
                  shape="square"
                  className="min-w-[171px]  font-medium lg:text-[15px] sm:px-4"
                  onClick={() => {addToCart.length > 0 ? setCheckout(true) : toast("No items in the cart")}}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div> : !completed && checkout ? 

    <form  className="flex items-center justify-between gap-60 md:flex-col px-24" onSubmit={() => {setCompleted(true);
                                                                                                 setaddtopurchase()}}>
              <div className="flex justify-center flex-col md:w-full gap-8">
              
                <Input 
                variant="underline"
                shape="square"
                disabled
                name="Buyer Info Title"
                placeholder="Buyer Info"
                className="!font-medium !w-full "></Input>

                <div className="flex  flex-col items-start  gap-4">
                  <Text as="p"> Full Name </Text>
                  <Input  variant="outline" shape="square" name="Full Name Input" className="w-[500px]" type="text" required  ></Input>
               </div>

               <div className="flex flex-col items-start gap-4">
                  <Text as="p"> Address </Text>
                  <Input  variant="outline" shape="square" name="Address Input" className="w-[500px]" type="text" required></Input>
               </div>
        
               <div className="flex flex-col items-start gap-4">
                  <Text as="p"> Contact </Text>
                  <Input  variant="outline"  
                 shape="square" name="Contact Input" className="w-[500px]" type="text" 
                 pattern="[0-9]{10}"
                 minLength={10}
                 maxLength={10}
                 onInput={(e) => e.target.value = e.target.value.replace(/\D+/g, '')}
                 required></Input>
               </div>


               <div className="flex flex-col items-start gap-4">
                  <Text as="p"> City </Text>
                  <Input  variant="outline" shape="square" name="City Input" className="w-[500px]" type="text" required></Input>
               </div>

              <div className="flex gap-[10px]">
              <div className="flex flex-col items-start gap-4">
                  <Text as="p"> State </Text>
                  <Select
                  defaultValue={select}
                  onChange={setSelect}
                  className="w-[290px] "
                  classNamePrefix="py-[3px] " 
                  options={countries} required></Select>
                  {/* <Input  variant="outline" shape="square" name="State Input"type="text" required></Input> */}
               </div>

               <div className="flex flex-col items-start gap-4">
                  <Text as="p">Zip Code</Text>
                  <Input  variant="outline" shape="square" name="Zip Code Input" pattern="[0-9]{6}" className="w-[200px]" type="text"
                 
                           minLength={6}
                           maxLength={6}
                           onInput={(e) => e.target.value = e.target.value.replace(/\D+/g, '')} required></Input>
               </div>

                </div>               
              </div>
              <div className="flex w-full  flex-col md:w-full gap-8">
              <Input 
                variant="underline"
                shape="square"
                disabled
                name="Paymet Title"
                placeholder="Payment Method"
                className="!font-medium !w-full "></Input>
                <div className="mt-[31px] flex gap-[15px] self-stretch md:flex-col">
                <Button
                color="blue_gray_100"
                size="lg"
                variant="outline"
                shape="square"
                onClick={() => setPaymentMethod("Credit Card")}
                leftIcon={<Img src={credit_card_payment} alt="Card" className="w-[20px] h-[20px]"></Img>}
                className={` ${paymentMethod === "Credit Card" ?`bg-gray-200`:``} w-[160px] h-[80px] text-[14px] gap-2 border border-gray-500 hover:bg-gray-200`}>Credit Card</Button>
                  <Button
                color="blue_gray_100"
                size="lg"
                variant="outline"
                shape="square"
                onClick={() => setPaymentMethod("Bank Transfer") }
                leftIcon={<Img src={bank_transfer} alt="Card" className="w-[20px] h-[20px]"></Img>}
              className={` ${paymentMethod === "Bank Transfer" ?`bg-gray-200`:``} w-[160px] h-[80px] text-[14px] gap-2 border-gray-500 border hover:bg-gray-200`}>Bank Transfer</Button>
                  <Button
                color="blue_gray_100"
                size="lg"
                variant="outline"
                shape="square"
                onClick={() => setPaymentMethod("Paypal")}
               leftIcon={<Img src={paypal} alt="Card" className="w-[20px] h-[20px]"></Img>}
                className={`  ${paymentMethod === "Paypal" ?`bg-gray-200`:``}  w-[160px] h-[80px] text-[14px]  border border-gray-500 gap-2 hover:bg-gray-200`}>Paypal</Button> </div>
                <div className="flex  flex-col items-start gap-4 ">
                  <Text as="p"> Name on Card </Text>
                  <Input  variant="outline" shape="square" name="Name on Card Input" type="text" className="w-[500px]" required></Input>
               </div>
               <div className="flex gap-[10px]">
              <div className="flex flex-col items-start gap-4">
                  <Text as="p"> Card Number </Text>
                  <Input  variant="outline" shape="square" name="Card Number Input" className="w-[290px]"
                  
                  onInput={(e) => e.target.value = e.target.value.replace(/\D+/g, '')} 
                  type="text"  pattern="[0-9]{16}" 
         maxlength={16} required></Input>
               </div>
               <div className="flex flex-col items-start gap-4">
                  <Text as="p">CVV</Text>
                  <Input  variant="outline" shape="square" name="CVV Input"    type="text"  pattern="[0-9]{3}" 
         maxlength={3} 
         onInput={(e) => e.target.value = e.target.value.replace(/\D+/g, '')}  className="w-[200px]" required></Input>
               </div>
                </div>    
                <div className="flex gap-[10px]">
              <div className="flex flex-col items-start gap-4">
                  <Text as="p"> Month </Text>
                  <Select
                  defaultValue={select}
                  onChange={setSelect}
                  className="w-[250px] "
                  classNamePrefix="py-[3px] " 
                  options={months} required></Select>
                 
                  {/* <Input  variant="outline" shape="square" name="Month Input" className="w-[245px]" required></Input> */}
               </div>
               <div className="flex flex-col items-start gap-4">
                  <Text as="p">Year</Text>
                  
                  <Select
                  defaultValue={select}
                  onChange={setSelect}
                  className="w-[250px] "
                  classNamePrefix="py-[3px] " 
                  options={years} required></Select>
              </div>
     
                </div> 
                <div className="flex  justify-end gap-4 md:justify-center">
  
                <Button
                  size="xs"
                  shape="square"
                  type="submit"
                  className="min-w-[171px] mt-4 font-medium lg:text-[15px] sm:px-4"
                >
                  Checkout
                </Button>
              </div>
              
             
                </div>
                </form>
                
           :
            <div className=" flex justify-center  flex-col items-center w-full md:w-full">
            <Heading size="md" as="h1" className="text-[48px] ">
              Checkout Complete!
            </Heading>
            <Text as="p" className="mt-8 w-[35%] text-[18px] text-center leading-8 !text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idcididunt ut labore et dolore magna aliqua. {" "}
            </Text>
            <Link to="/"><Button size="xs" shape="square" className="mt-8 min-w-[245px] font-medium">
              Go Shopping Again
            </Button>
            </Link>
            </div>}
      </div>
    </>
  );
}

export default Cart;
