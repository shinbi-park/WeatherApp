import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const WeatherInfo = () => {
  const { id } = useParams();

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}`;

    axios.get(url).then((res) => {
      setName(res.data.name);
      setTemp(res.data.main.temp);
      setMin(res.data.main.temp_min);
      setMax(res.data.main.temp_max);
      setWeather(res.data.weather[0].main);
      setIsLoading(true);
    });
  }, [id]);

  return (
    <>
      {!isLoading ? (
        <h3
          className="card-header"
          style={{ textAlign: "center", paddingTop: "80px" }}
        >
          로딩중입니다{" "}
        </h3>
      ) : (
        <div className="card bg-light mb-3">
          <div className="card-header" style={{ textAlign: "center" }}>
            <h1 style={{ color: "black" }}>
              <strong>{name}</strong>
            </h1>
            <p className="card-text text-primary">{weather}</p>
          </div>
          <div className="card-body" style={{ margin: "0 auto" }}>
            <p
              className="card-text"
              style={{ fontSize: "80px", textAlign: "center", color: "navy" }}
            >
              <strong>{Math.floor(temp - 273.15)}º</strong>
            </p>
            <p
              className="card-text"
              style={{ textAlign: "center", fontSize: "20px" }}
            >
              <span className="badge bg-dark">
                최고:{Math.floor(max - 273.15)}º&nbsp;&nbsp;&nbsp;&nbsp;최저:
                {Math.floor(min - 273.15)}º
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherInfo;
