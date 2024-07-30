import React from "react";
import { Heading, Text } from "./index.js";
import { Link } from "react-router-dom";

function Section({ heading, className = "" }) {
  return (
    <>
      <div className={`flex flex-wrap items-start justify-between gap-5`}>
        <Heading as="h2" className="md:text-3xl sm:text-[28px]">
          {heading}
        </Heading>
        <Link to="/product_list">
          <a href="#" className={` ${className}`}>
            <Text
              as="p"
              className="!font-medium !text-gray-800 hover:!text-gray-400"
            >
              View all
            </Text>
          </a>
        </Link>
      </div>
    </>
  );
}

export default Section;
