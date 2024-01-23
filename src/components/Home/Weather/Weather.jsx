import React, { useEffect, useState } from "react";
import styles from "./Weather.module.css";
import { getWeatherDetails } from "../../../api/weather";
import Humidity from "../../../assets/Humidity.png";
import Wind from "../../../assets/Wind.png";
import Pressure from "../../../assets/Pressure.png";

const Weather = () => {
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    fetchWeatherDetails();
    console.log(weather);
  }, []);

  const fetchWeatherDetails = async () => {
    const result = await getWeatherDetails();
    setWeather(result.current);
    setDate(result.location.localtime);
  };

  return (
    <div className={styles.weather_container}>
      <div className={styles.date}>
        <span>{date}</span>
      </div>
      <div>
        {weather ? (
          <div
            style={{
              display: "flex",
              color: "white",
              alignItems: "start",
              justifyContent: "space-evenly",
              gap: "50px",
            }}
          >
            {" "}
            <div>
              <img
                src={weather?.condition?.icon}
                style={{ width: "160px", height: "100px" }}
                alt="Weather condition icon"
              />
              <p
                style={{
                  marginBottom: "12px",
                  fontSize: "20px",
                  marginTop: "-20px",
                  width: "70px",
                  fontWeight: "500",
                  textAlign: "center",
                  paddingLeft: "40px",
                }}
              >
                {weather?.condition?.text}
              </p>
            </div>
            <div>
              <p
                style={{
                  marginBottom: "12px",
                  fontSize: "24px",
                  marginTop: "10px",
                  fontSize: "2.5rem",
                  fontWeight: "800",
                }}
              >
                <span>{weather?.temp_c}</span>°C
              </p>
              <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                <img
                  src={Pressure}
                  alt="Pressure"
                  style={{ width: "13px", height: "22px" }}
                />
                <p
                  style={{
                    marginBottom: "12px",
                    fontSize: "15px",
                    marginTop: "-10px",
                    width: "90px",
                    fontWeight: "500",
                  }}
                >
                  {weather.pressure_mb} mbar Pressure
                </p>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                <img
                  src={Wind}
                  alt="Wind"
                  style={{ width: "30px", height: "22px" }}
                />
                <p
                  style={{
                    marginBottom: "12px",
                    fontSize: "15px",
                    marginTop: "-10px",
                    width: "70px",
                    fontWeight: "500",
                  }}
                >
                  {weather.wind_kph} km/h Wind
                </p>
              </div>
              <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                <img
                  src={Humidity}
                  alt="Humidity"
                  style={{ width: "18px", height: "22px" }}
                />
                <p
                  style={{
                    marginBottom: "12px",
                    fontSize: "15px",
                    marginTop: "-10px",

                    width: "70px",
                    fontWeight: "500",
                  }}
                >
                  {weather.humidity} % Humidity
                </p>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Weather;
