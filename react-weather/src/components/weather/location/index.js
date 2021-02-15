import React from "react";
import PropTypes from "prop-types";

const WeatherLocation = ({ city }) => {
  return !city || city === undefined ? null : (
    <section>
      {city.name}/{city.country}
    </section>
  );
};
WeatherLocation.propTypes = {
  city: PropTypes.object,
};

export default WeatherLocation;
