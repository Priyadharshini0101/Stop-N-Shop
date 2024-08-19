import React from "react";
import { Text, Img } from "./index.js";
import { warning } from "../assets/index.js";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

Template.propTypes = {
  data:PropTypes.string,
  review:PropTypes.string,
  addToCart:PropTypes.string,
  className:PropTypes.string,
  page:PropTypes.string,
}

function Template({
  data = { id: 0, image: warning, label: "Purple Warm Jacket", price: "$299" },
  review,
  addToCart,
  className = "",
  page = "",
}) {
  return (
    <div
      className={`${className}  flex flex-col items-center  gap-[10px] p-[20px] sm:p-4 transform transition duration-300 hover:scale-110 `}
    >
      <Link to={`/product/${page}/${data.id}`}>
        <Img
          src={data.image}
          alt="placeholder image"
          className="h-[250px] w-[200px] object-contain  "
        ></Img>{" "}
      </Link>
      <div className="flex flex-col items-center gap-[9px]">
        <Text size="xs" as="p" className="!text-gray-800">
          {data.label}
        </Text>
        <Text as="p" className="!font-medium">
          {"$" + data.price}
        </Text>
      </div>
      {!!addToCart && addToCart}
      {!!review && review}
    </div>
  );
}

export default Template;
