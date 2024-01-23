import axios from "axios";
export const getWeatherDetails = async () => {
  try {
    const reqUrl = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=Bangalore`;
    console.log(reqUrl);
    const response = await axios.get(reqUrl);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    alert("Something went wrong!!!!");
  }
};



