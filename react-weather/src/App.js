import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import ErrorMessage from "./components/errorBoundry/errorMessage";
import Loader from "./components/loader/loader";
import Weather from "./components/weather";

import getWeather from "./actions/getWeather";

function App() {
  const [city, setCity] = useState("");
  const textInput = useRef();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.weatherReducer.loading);

  const getWeatherInfo = (event) => {
    if (event) event.preventDefault();
    dispatch(getWeather(city));
    clearInput();
  };

  const clearInput = () => {
    textInput.current.value = "";
  };

  return (
    <main>
      <form onSubmit={getWeatherInfo}>
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          ref={textInput}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">
          Find!
        </button>
      </form>
      <ErrorMessage city={city}/>
      {loading ? <Loader /> : <Weather />}
    </main>
  );
}

export default App;
