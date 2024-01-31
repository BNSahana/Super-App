import React from "react";
import styles from "./Home.module.css";
import Profile from "../Profile/Profile";
import Weather from "../Weather/Weather";
import Notes from "../Notes/Notes";
import News from "../News/News";
import Clock from "../Clock/Clock";
import { useNavigate } from "react-router-dom";
const Home = ({setHomeVisited}) => {
  const navigate = useNavigate()

  const handleBrowse = () =>{
    setHomeVisited(true)
    navigate("/movies")
  } 
  return (
    <div>
       <div className={styles.home_container}>
      <div className={styles.home_section}>
        <div className={styles.profile_weather}>
          <Profile />
          <Weather />
          <Clock />
        </div>
      </div>
      <div>
        <Notes />
      </div>
      <div>
        <News />
      </div>
    </div>
   
      <div>
        <button className={styles.browse} onClick={handleBrowse}>Browse</button>
      </div>
    </div>
  );
};

export default Home;
