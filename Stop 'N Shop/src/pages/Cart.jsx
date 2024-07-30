import React, { useState, useEffect } from "react";
import useDataContext from "../contexts/data";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Text, Heading, Img, Button, Input } from "../components/index.js";
import { createColumnHelper } from "@tanstack/react-table";
import ReactTable from "../components/ReactTable.jsx";
import { close } from "../assets/index.js";

function Cart() {
  const { setheader, addToCart, setaddtocart, applyCode, setapplycode } =
    useDataContext();
  const [sum, setSum] = useState(0);

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
        header: (info) => <div></div>,
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
              }}
            ></Img>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pb-[35px] !font-medium sm:pb-4">
            Total
          </Text>
        ),
        meta: { width: "661px" },
      }),
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
                  className="flex h-[56px] w-[56px] items-center justify-center rounded-[28px] border-2 border-solid border-gray-800 text-center !text-gray-800"
                >
                  1
                </Text>
                <Text size="md" as="p" className=" !text-gray-800">
                  Shopping Cart
                </Text>
              </div>
              <div className="h-[2px] w-[50%] mt-[5px]  bg-gray-800 md:self-stretch"></div>
            </div>

            <div className="flex w-[40%] h-[50px] items-center justify-center gap-[25px] md:w-full md:flex-col">
              <div className="flex items-center justify-center gap-5 md:w-full">
                <Text
                  size="md"
                  as="p"
                  className="flex h-[56px] w-[56px] items-center justify-center rounded-[28px] border-2 border-solid border-blue_gray-100 text-center !text-blue_gray-100"
                >
                  2
                </Text>
                <Text size="md" as="p" className=" !text-blue_gray-100">
                  Checkout
                </Text>
              </div>
              <div className="h-[2px] w-[50%] mt-[5px] bg-blue_gray-100"></div>
            </div>
            <div className="flex w-[20%] h-[50px] items-center  gap-[25px] md:w-full md:flex-col">
              <div className="flex items-center justify-center gap-5 md:w-full">
                <Text
                  size="md"
                  as="p"
                  className="flex h-[56px] w-[56px] items-center justify-center rounded-[28px] border-2 border-solid border-blue_gray-100 text-center !text-blue_gray-100"
                >
                  3
                </Text>
                <Text size="md" as="p" className="!text-blue_gray-100">
                  Completed
                </Text>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-[79px] lg:gap-[79px] md:gap-[59px] sm:gap-[39px]">
          <div className="flex flex-col gap-[30px] self-stretch">
            <div>
              <ReactTable
                size="xs"
                bodyProps={{ className: "" }}
                headerProps={{ className: "flex-wrap" }}
                rowDataProps={{ className: "md:flex-col" }}
                columns={tableColumns}
                className="md:whitespace-nowrap md:block md:overflow-x-auto"
                data={addToCart}
              ></ReactTable>
            </div>
            <div className="flex items-center justify-between gap-5 md:flex-col">
              <div className="flex gap-0.5  items-center justify-between md:justify-start md:gap-[50px] xs:gap-[5px] xs:justify-center p-4 md:w-full">
                <Input
                  placeholder="Enter coupon code"
                  className=" !text-gray-800"
                  value="discount"
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
                    size="3xl"
                    variant="outline"
                    shape="square"
                    className="min-w-[207px] xs:w-full font-medium lg:text-[15px]"
                  >
                    Continue Shopping
                  </Button>
                </Link>
                <Button
                  size="3xl"
                  shape="square"
                  className="min-w-[171px]  font-medium lg:text-[15px] sm:px-4"
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
