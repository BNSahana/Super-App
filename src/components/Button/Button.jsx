import React from "react";
import styles from "./Button.module.css";

const Button = ({ onClick }) => {
  return(
    <div>
    <button type="submit" className={styles.btn} onClick={onClick}>SIGN UP</button>
    
  </div>
  )
  
};

export default Button;
