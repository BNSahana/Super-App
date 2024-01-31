import axios from "axios";
export const getMoviesGenres = async (title) => {
  try {
    const reqUrl = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIESS_API_KEY}&s=${title}`;
    console.log(reqUrl);
    const response = await axios.get(reqUrl);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    alert("Something went wrong!!!!");
  }
};

/*const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': `${REACT_APP_MOVIES_API_KEY}`,
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
};
const fetchMovies = async()=>{
    await fetch(`https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2020`, options)
        .then(response => response.json())
        .then(response => response.results.splice(4,4))
        .catch(err => console.error(err));
}
fetchMovies();

*/
