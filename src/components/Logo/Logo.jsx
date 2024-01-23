import React from 'react'
import superapp from "../../assets/Super-app.png";

const Logo = () => {
    const logo = {
        width: "180px",
        height: "50px",   
        paddingTop : "60px" 
    }
  return (
    <div>
        <img  style={logo} src={superapp} alt="logo" />
    </div>
  )
}

export default Logo


