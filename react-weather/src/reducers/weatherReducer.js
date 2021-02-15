const initialState = {
  weather: {},
};
const weatherReducer = (state = initialState, {type, payload, error}) => {
  switch (type) {
    case "GET_WEATHER_REQUEST":
      state = {
        ...state,
        loading: true,
      };
      break;
    case "GET_WEATHER_SUCCESS":
      state = {
        ...state,
        weather: payload,
        error: null,
        loading: false,
      };
      break;
    case "GET_WEATHER_ERROR":
      state = {
        ...state,
        error: error,
        loading: false,
        weather: {},
      };
      break;
    default:
  }
  return state;
};

export default weatherReducer;
