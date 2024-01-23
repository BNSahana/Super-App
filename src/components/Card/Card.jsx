import React from "react";
import styles from "./Card.module.css";

const Card = ({ genreData, toggleGenre, selectedGenres }) => {
  //console.log(genreData);
  
  return (
    
    <div className={styles.genre_container}>
      {genreData.map((genre) => (
        <div
          key={genre.id}
          style={{
            background: genre["color"],
            color: "white",
            padding: "15px",
            width: "220px",
            borderRadius: "12px",
            border: `4px solid ${selectedGenres.includes(genre) ? '#11B800' : ""}`,
          }}
          className={styles.selected}
          onClick={() => toggleGenre(genre)}
        >
          <p className={styles.genre_title}>{genre.title}</p>
          <div className={styles.genre_image}>{genre.image}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
