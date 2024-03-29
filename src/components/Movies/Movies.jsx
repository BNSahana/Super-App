import React from "react";
import styles from "./Movies.module.css";
import Logo from "../../assets/Super-app.png";
import Profile from "../../assets/profie.png";
import { useNavigate } from "react-router-dom";
import ListOfMovies from "./ListOfMovies";

const Movies = () => {
  console.log("hello")
  let movies = JSON.parse(localStorage.getItem("Genre"));
  const navigate = useNavigate();
  const toggleProfile = () => {
    console.log("toggle")
    navigate("/home", { replace: true });
  };

  return (
    <div className={styles.movies_container}>
      <div className={styles.logo}>
        <img
          src={Logo}
          alt="App Logo"
          style={{ width: "150px", height: "50px" }}
        />
        <img
          src={Profile}
          alt="Profile"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50px",
            cursor: "pointer",
          }}
          onClick={toggleProfile}
        />
      </div>
      <div className={styles.heading}>
        Entertainment according to your choice
      </div>
      <div className={styles.ListofGenre}>
      <ListOfMovies/>
      </div>
    </div>
  );
};

export default Movies;
