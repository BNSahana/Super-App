import axios from "axios";
export const getNewsDetails = async () => {
  try {
    const reqUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`;
    //console.log(reqUrl);
    const response = await axios.get(reqUrl);
    //console.log(response.data.articles);
    return response.data.articles[3];
  } catch (error) {
    console.log(error);
    alert("Something went wrong!!!!");
  }
};
