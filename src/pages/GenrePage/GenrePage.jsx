import React from "react";
import Genre from "../../components/Genre/Genre";
import styles from "./GenrePage.module.css";

const GenrePage = ({setMoviesGenreVisited}) => {
  return <div>
    <Genre setMoviesGenreVisited={setMoviesGenreVisited}/>
  </div>;
};

export default GenrePage;
