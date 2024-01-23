import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Genre.module.css";
import { IoIosWarning } from "react-icons/io";
import action from "../../assets/action.png"
import drama from "../../assets/drama.png";
import fantasy from "../../assets/fantasy.png";
import fiction from "../../assets/fiction.png";
import horror from "../../assets/horror.png";
import music from "../../assets/music.png";
import romance from "../../assets/romance.png";
import thriller from "../../assets/thriller.png";
import western from "../../assets/Western.png";
import Logo from "../Logo/Logo";
import Card from "../Card/Card";

const Default_genres = [
  {
    id: 1,
    title: " Action ",
    color: "#FF5209",
    image: (
      <img
        src={action}
        alt="Action"
        style={{ width: "200px", height: "120px" }}
      />
    ),
  },
  {
    id: 2,
    title: "Drama",
    color: "#D7A4FF",
    image: (
      <img
        src={drama}
        alt="Drama"
        style={{ width: "200px", height: "120px" }}
      />
    ),
  },
  {
    id: 3,
    title: "Romance",
    color: "#11B800",
    image: (
      <img
        src={romance}
        alt="Romance"
        style={{ width: "200px", height: "120px" }}
      />
    ),
  },
  {
    id: 4,
    title: "Thriller",
    color: "#84C2FF",
    image: (
      <img
        src={thriller}
        alt="Thriller"
        style={{ width: "200px", height: "120px" }}
      />
    ),
  },

  {
    id: 5,
    title: "Western",
    color: "#902500",
    image: (
      <img
        src={western}
        alt="Western"
        style={{ width: "200px", height: "120px" }}
      />
    ),
  },
  {
    id: 6,
    title: "Horror",
    color: "#7358FF",
    image: (
      <img
        src={horror}
        alt="Horror"
        style={{ width: "200px", height: "120px" }}
      />
    ),
  },
  {
    id: 7,
    title: "Fantasy",
    color: "#FF4ADE",
    image: (
      <img
        src={fantasy}
        alt="Fantasy"
        style={{ width: "200px", height: "120px" }}
      />
    ),
  },

  {
    id: 8,
    title: "Music",
    color: "#E61E32",
    image: (
      <img
        src={music}
        alt="Music"
        style={{ width: "200px", height: "120px" }}
      />
    ),
  },
  {
    id: 9,
    title: "Fiction",
    color: "#6CD061",
    image: (
      <img
        src={fiction}
        alt="Fiction"
        style={{ width: "200px", height: "120px" }}
      />
    ),
  },
];
//console.log(Default_genres);
const Genre = () => {
  const navigate = useNavigate();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [lengthError, setLengthError] = useState(false);

  const toggleGenre = (genre) => {
    if (selectedGenres.some((selectedGenre) => selectedGenre.id === genre.id)) {
      // Remove genre if already selected
      setSelectedGenres(
        selectedGenres.filter((selectedGenre) => selectedGenre.id !== genre.id)
      );
    } else if (selectedGenres.length < 3 || selectedGenres.length >= 3) {
      // Add genre if not selected and within the limit
      setSelectedGenres([...selectedGenres, genre]);
      setLengthError([...selectedGenres].length < 2 ? true : false);
    }
  };

  const removeGenre = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selectedGenre) => selectedGenre.id !== genre.id)
    );
  };

  const handleSubmit = () => {
    if (selectedGenres.length <3 ) {
      setLengthError(true);
      return;
    }
    localStorage.setItem("Genre", JSON.stringify(selectedGenres));
    navigate("/home");
  };

  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <Logo />
        <h1>Choose your entertainment category</h1>
        <div className={styles.selected_category}>
          {selectedGenres.length > 0 && (
            <div className={styles.z}>
              {selectedGenres.map((selectedGenre) => (
                <div key={selectedGenre.id}>
                  <button className={styles.selected_genre}>
                    {selectedGenre.title}
                    <span
                      className={styles.cancel}
                      onClick={() => removeGenre(selectedGenre)}
                    >
                      X
                    </span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={styles.minCat}>
          {lengthError ? (
            <div>
              <IoIosWarning className={styles.icon}  />
              <span>Minimum 3 category required</span>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className={styles.genre_section}>
        <div className={styles.list_category}>
          <Card
            genreData={Default_genres}
            toggleGenre={toggleGenre}
            selectedGenres={selectedGenres}
          />
        </div>
        <div className={styles.btn}>
          <button className={styles.next_btn} onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Genre;
