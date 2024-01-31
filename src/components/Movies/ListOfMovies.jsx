import React, { useState, useEffect } from "react";
import styles from "./ListOfMovies.module.css";
import { getMoviesGenres } from "../../api/movies";

const ListOfMovies = () => {
  /*const [movies, setMovies] = useState([]);
  console.log(movies);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${process.env.REACT_APP_MOVIES_API_KEY}`,
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2020`,
          options
        );
        const data = await response.json();
        console.log(data);
        // Assuming primaryImage is an object with a property 'url'
        const formattedMovies = data.results.splice(4, 4).map((movie) => ({
          ...movie,
          primaryImage: movie.primaryImage.url || null,
        }));
        setMovies(formattedMovies);
      } catch (error) {
        console.error(error);
        alert("Something went wrong!");
      }
    };

    fetchMovies();
  }, [genre]);*/

  console.log("hello");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMoviesDetails();
  }, []);

  const fetchMoviesDetails = async () => {
    const result = await getMoviesGenres("drama");
    console.log(result);
    setMovies(result.Search);
  };

  return (
    <div>
      {movies.map((movie) => {
        <div style={{ color: "white" }}>{movie.title}</div>;
      })}
    </div>
  );
};

export default ListOfMovies;

{
  /* <p className={styles.heading}>{genre}</p>
      <div style={{ display: "flex", overflow: "hidden", marginLeft: "2vw" }}>
        {movies.map((movie, idx) => {
          return (
            <div key={idx} style={{ width: "20vw", margin: "2vw" }}>
              {movie.primaryImage.url ? (
                <img
                  src={movie.primaryImage.url}
                  style={{
                    objectFit: "cover",
                    width: "20vw",
                    height: "20vh",
                    borderRadius: "12px",
                  }}
                  alt={`Movie ${idx}`}
                />
              ) : (
                <span>No Image</span>
              )}
            </div>
          );
        })}
      </div> */
}
