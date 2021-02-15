import React from "react";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";

const ErrorMessage = ({ city }) => {
  const weatherError = useSelector((state) => state.weatherReducer.error);
  if (weatherError === undefined || weatherError === null) return null;
  console.log(city);
  return (
    <section>
      <h1>{`we don't have a city of ${city}`}</h1>
    </section>
  );
};

ErrorMessage.propTypes = {
  city: PropTypes.string,
};

export default ErrorMessage;
