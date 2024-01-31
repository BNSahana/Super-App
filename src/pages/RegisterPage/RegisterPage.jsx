import React from "react";
import styles from "./RegisterPage.module.css";
import Register from "../../components/Register/Register";

const RegisterPage = ({setUserRegistered}) => {
  return <div>
    <Register setUserRegistered={setUserRegistered}/>
  </div>;
};

export default RegisterPage;
