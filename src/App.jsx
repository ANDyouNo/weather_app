import { useState } from "react";
import UpdateCover from "./UpdateCover.jsx";
import searchStl from "./Search.module.css";
import styles from "./App.module.css";
import GeneralInterface from "./GeneralInterface.jsx";

const api = {
  key: "f9202fad2b595ea5db03cd1d94196120",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  //weather получает объект со всеми свойствами
  const [isUpdatePressed, setIsUpdatePressed] = useState(false);
  const [isSearchPressed, setIsSearchPressed] = useState(false);
  const [isActive, setIsActive] = useState(true);

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */

  const updatePressed = () => {
    if (
      localStorage.getItem("name") !== "null" &&
      localStorage.getItem("name") !== "undefined"
    ) {
      fetch(
        `${api.base}weather?q=${localStorage.getItem(
          "name"
        )}&units=metric&APPID=${api.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
        });
      console.log("update");
    }
    setIsUpdatePressed(true);
  };

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        if (localStorage.getItem("name") !== result.name) {
          localStorage.clear();
          localStorage.setItem("name", result.name);
        }
      });
    setIsSearchPressed(false);
    setIsActive(true)
  };

  function searchActivate() {
    localStorage.clear()
    setIsSearchPressed(false)
    setIsActive(false)
  }

  return (
    <div className="App">
      {/* Search Box - Input + Button  */}
      {!isUpdatePressed &&
      !isSearchPressed &&
      localStorage.getItem("name") !== null ? (
        <UpdateCover updatePressed={updatePressed}></UpdateCover>
      ) : (
        <div></div>
      )}

      {isSearchPressed ||
      localStorage.getItem("name") === null ? (
        <div className={searchStl.search}>
          <div className={searchStl.input_container}>
            <h1 className={searchStl.header}>Change city</h1>
            <input
              className={searchStl.input}
              type="text"
              placeholder="Enter city/town..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button onClick={searchPressed} className={searchStl.submit}>
            ok
          </button>
        </div>
      ) : (
        <div></div>
      )}

      {/* If weather is not undefined display results from API */}
      {typeof weather.main !== "undefined" && isActive ? (
        <GeneralInterface searchActivate={searchActivate} weather={weather}></GeneralInterface>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
