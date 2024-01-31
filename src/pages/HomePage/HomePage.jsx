import React from "react";
import styles from "./HomePage.module.css";
import Home from "../../components/Home/Homee/Home";

const HomePage = ({setHomeVisited}) => {
  return <div>
    <Home setHomeVisited={setHomeVisited}/>
  </div>;
};

export default HomePage;
