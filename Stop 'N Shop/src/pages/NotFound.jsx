import React from "react";
import { Text } from "../components/index.js";
import useDataContext from "../contexts/data.js";
import PropTypes from 'prop-types'

NotFound.propTypes = {
    title:PropTypes.title 
}

function NotFound({title = "Oops! We ran out of code"}) {
  const { setheader } = useDataContext();
  setheader(true);
  return (
    <div className="w-full h-[150px]  flex items-center justify-center">
      <Text as="h1" className="text-4xl ">
        {title}
      </Text>
    </div>
  );
}

export default NotFound;
