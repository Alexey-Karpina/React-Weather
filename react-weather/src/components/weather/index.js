import React from "react";
import { useSelector } from "react-redux";
import WeatherInfo from "./info";
import WeatherLocation from "./location";

const Weather = () => {
  const weather = useSelector((state) => state.weatherReducer.weather);
  const { city, list } = weather;
  return (
    <section>
      <WeatherLocation city={city} />
      <WeatherInfo list={list} />
    </section>
  );
};

export default Weather;
