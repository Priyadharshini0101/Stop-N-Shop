import React from "react";
import { Template } from "./index.js";
import useDataContext from "../contexts/data";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import PropTypes from 'prop-types'

Feature.propTypes = {
  filter:PropTypes.filter,
  design:PropTypes.bool,
  product_id:PropTypes.string,
}

function Feature({ filter, design = true, product_id }) {
  const { data } = useDataContext();
  let items = data.filter((i) => i.alt === filter && filter);

  if (filter === "pants") {
    let allResults = items.slice();
    let temp = data.filter((i) => i.alt === "accessories");

    allResults.push(...temp);
    items = allResults;
  }

  const sliderItems = design ? items : items.filter((i) => i.id !== product_id);

  return (
    <div className="m-auto  flex flex-col h-max w-full  md:flex-col">
      {design ? (
        <div className="absolute mt-[50px] z-0 h-[426px] w-[22%] bg-gray-800"></div>
      ) : (
        ""
      )}
      <div className="z-10 ml-[50px] mt-[90px]  flex gap-[10px] md:ml-[50px] md:flex-col md:self-stretch ">
        <AliceCarousel
          responsive={{
            0: { items: 1 },
            568: { items: 2 },
            768: { items: 3 },
            1024: { items: 5 },
          }}
          renderPrevButton={() => {
            return <div className="btn-prev">&lang;</div>;
          }}
          renderNextButton={() => {
            return <div className="btn-next">&rang;</div>;
          }}
          disableDotsControls
          mouseTracking
          controlsStrategy="responsize"
          autoPlay
          autoPlayInterval={2000}
          infinite
          keyboardNavigation={true}
          items={sliderItems.map((i) => (
            <Template
              page="Features"
              key={i.id}
              data={i}
              className="bg-white-A700 shadow-sm w-[250px] "
            ></Template>
          ))}
        ></AliceCarousel>
      </div>
    </div>
  );
}

export default Feature;
