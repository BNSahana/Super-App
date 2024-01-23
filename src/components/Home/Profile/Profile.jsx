import React from "react";
import styles from "./Profile.module.css";
import ProfileImage from "../../../assets/profie.png";

const Profile = () => {
  let userDtails = localStorage.getItem("Form Data");

  if (userDtails) {
    userDtails = JSON.parse(userDtails);
  }
  let genre = localStorage.getItem("Genre");
  if (genre) {
    genre = JSON.parse(genre);
  }

  return (
    <div className={styles.profile_container}>
      <div className={styles.profile_img}>
        <img
          src={ProfileImage}
          alt="Profile"
          style={{ width: "130px", height: "280px" }}
        />
      </div>
      <div className={styles.user_info}></div>
      <div className={styles.profile_details}>
        <div className={styles.profile_info}>
          <p className={styles.profile_name}>{userDtails.name}</p>
          <p className={styles.profile_email}>{userDtails.email}</p>
          <p className={styles.profile_username}>{userDtails.userName}</p>
        </div>
        <div>
          {genre.map((genreItem) => (
            <button key={genreItem.id} className={styles.genre_btn}>
              {genreItem.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
