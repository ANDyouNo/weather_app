import styles from "./GeneralInterface.module.css";

const clouds = "./icons/Cloud.png";
const thunder = "./icons/Light.png";
const rain = "./icons/Rainy.png";
const snow = "./icons/Snow.png";
const storm = "./icons/Strong_wind.png";
const sun = "./icons/Sun.png";
const wind = "./icons/Wind.png";
const smoke = "./icons/Smoke.png";

function GeneralInterface(props) {
  let img = null;
  console.log(props.weather.weather[0].main);
  switch (props.weather.weather[0].main) {
    case "Drizzle":
      img = clouds;
      break;
    case "Thunderstorm":
      img = thunder;
      break;
    case "Rain":
      img = rain;
      break;
    case "Snow":
      img = snow;
      break;

    case "Mist":
      img = smoke;
      break;
    case "Smoke":
      img = smoke;
      break;
    case "Haze":
      img = smoke;
      break;
    case "Dust":
      img = smoke;
      break;
    case "Fog":
      img = smoke;
      break;
    case "Sand":
      img = smoke;
      break;
    case "Ash":
      img = smoke;
      break;
    case "Squall":
      img = storm;
      break;
    case "Tornado":
      img = storm;
      break;

    case "Clear":
      img = sun;
      break;
    case "Clouds":
      img = clouds;
      break;
  }

  return (
    <div className={styles.GeneralInterface}>
      <div className={styles.container}>
        <h2 className={styles.city}>{props.weather.name}</h2>
        <img className={styles.img} src={img}></img>
        <h1 className={styles.temperature}>{props.weather.main.temp}°C</h1>
        <p className={styles.description}>
          {props.weather.weather[0].description}
        </p>
      </div>
      <button onClick={props.searchActivate} className={styles.settings}>set up</button>
    </div>
  );
}

export default GeneralInterface;
