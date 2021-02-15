import axios from "axios";
import {API_URL} from '../services/api';

const getWeather = (city) => {
  return function(dispatch){

    dispatch({ type: "GET_WEATHER_REQUEST" });
    return axios
      .get(API_URL + `&q=${city}`)
      .then(({ data }) => {
        const { error } = data;
        if (error) {
          throw new Error;
        }
        dispatch({ type: "GET_WEATHER_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "GET_WEATHER_ERROR", error: error });
      });
  };
};

export default getWeather;