import { useState } from "react";
import axios from "axios";
import sunny from "../assets/sunny.avif";
import humidity from "../assets/humidity.avif";
import temp_wind from "../assets/temp_wind.avif";
import "./style.css";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const capitalize = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const fetchWeatherData = async () => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: city },
      headers: {
        "X-RapidAPI-Key": "b1e925a9d9mshf546fba2675f997p14ea07jsna3298c299306",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setWeatherData(response.data);
      setError(null);
      console.log(response);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch weather data.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const capitalizedCity = capitalize(city);
    setCity(capitalizedCity);
    fetchWeatherData();
  };

  return (
    <div className="container">
      <h1 className="text-center text-light m-4">Weather at {city}</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control mx-2 border-danger shadow-none"
            placeholder="Enter City"
            value={city}
            style={{ color: "#330000", backgroundColor: "#ffe9e9" }}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="submit"
            className="btn border-danger"
            style={{ color: "#330000", backgroundColor: "#ffe9e9" }}
          >
            Get Weather
          </button>
        </div>
      </form>
      {error && <p className="text-danger">{error}</p>}
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col">
          <div
            id="temperature-img"
            style={{
              backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.6)), url(${sunny})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "relative",
            }}
            className="card border-2 border-light my-4 rounded-3 shadow-sm"
          >
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal text-white">Temperature</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                <span id="temp2" className="text-white">
                  {weatherData ? `${weatherData.current.temp_c}` : "-"}
                </span>
                <small className="text-light fw-light">
                  <span> &#8451;</span>
                </small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li className="text-white">
                  Feels Like{" "}
                  <span id="feels_like">
                    {weatherData ? weatherData.current.feelslike_c : "-"}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            id="humidity-img"
            style={{
              backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.6)), url(${humidity})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "relative",
            }}
            className="card border-2 border-light my-4 rounded-3 shadow-sm"
          >
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal text-white">Humidity info</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                <span id="humidity2" className="text-white">
                  {weatherData ? `${weatherData.current.humidity}` : "-"}
                </span>
                <small className="text-light fw-light"> %</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li className="text-white">
                  Wind Degrees{" "}
                  <span id="wind_degrees">
                    {weatherData ? weatherData.current.wind_degree : "-"}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            id="wind-img"
            style={{
              backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.6)), url(${temp_wind})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "relative",
            }}
            className="card border-2 border-light my-4 rounded-3 shadow-lg"
          >
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal text-white">Wind info</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                <span id="wind_speed2" className="text-white">
                  {weatherData ? `${weatherData.current.wind_kph}` : "-"}
                </span>
                <small className="fw-light text-light"> Km/hr</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li className="text-white">
                  Wind Speed is{" "}
                  <span id="wind_speed">
                    {weatherData ? weatherData.current.wind_kph : "-"}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
