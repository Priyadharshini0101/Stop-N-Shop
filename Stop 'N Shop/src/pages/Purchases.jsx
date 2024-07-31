import React, { useEffect,useState } from 'react'
import useDataContext from '../contexts/data'
import { Suspense } from 'react'
import { Template,RatingBar,Input,Button,Heading,Text,Img } from '../components'
import { createColumnHelper } from "@tanstack/react-table";
import ReactTable from "../components/ReactTable.jsx"; 
import NotFound from './NotFound.jsx'
import { Link } from 'react-router-dom';

function Purchases() {
  const {setheader,addToPurchase} = useDataContext()
  const [total,setTotal] = useState(0)
  setheader(true)
  console.log(addToPurchase)
  useEffect(() =>{
    const sum = 0;
    console.log(addToPurchase)
    addToPurchase.map((purchase) =>{
        setTotal((total) => total + (purchase.price * purchase.quantity))
    })
    console.log(total)
  },[])
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
                {addToPurchase.map((cart, index) =>
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
    ];
  }, [addToPurchase]);
  return ( <div className="flex flex-col items-end gap-[79px] lg:gap-[79px] md:gap-[59px] sm:gap-[39px]">
    <div className="flex flex-col gap-[30px] self-stretch mt-[50px]">
    {addToPurchase.length > 0 ? <div>
        <ReactTable
          size="xs"
          bodyProps={{ className: "" }}
          headerProps={{ className: "flex-wrap" }}
          rowDataProps={{ className: "md:flex-col" }}
          columns={tableColumns}
          className="md:whitespace-nowrap md:block md:overflow-x-auto mx-12" 
          data={addToPurchase}
        ></ReactTable>
      </div> : <NotFound title="No Purchases"></NotFound>}
              <div className="flex flex-col items-end justify-end mx-12 md:justify-end gap-[50px] lg:w-full md:w-full xs:flex-col xs:gap-[5px]">
                
              {/* <div className="flex justify-end   w-full  gap-4">
                <Text as="p" className="!font-bold !text-gray-800 text-3xl">
                Total Spent :             { `$` + total}
                </Text>
              </div> */}
              
              <div className="flex flex-col items-end w-full  gap-4">
                <Text as="p" className="!font-medium">
                  Total Spent
                </Text>
                <Heading as="h2" className="md:text-3xl sm:text-[28px]">
              {`$` + total}
                </Heading>
              </div>
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
              </div>
        
     

    
    </div>
  </div>  )
}

export default Purchases