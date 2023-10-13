import styles from "./GeneralInterface.module.css";

function GeneralInterface(props) {
  let icon = "";
  console.log(props.weather.weather[0].main);
  switch (props.weather.weather[0].main) {
    case "Drizzle":
      icon = styles.clouds;
      break;
    case "Thunderstorm":
      icon = styles.thunder;
      break;
    case "Rain":
      icon = styles.rain;
      break;
    case "Snow":
      icon = styles.snow;
      break;

    case "Mist":
      icon = styles.smoke;
      break;
    case "Smoke":
      icon = styles.smoke;
      break;
    case "Haze":
      icon = styles.smoke;
      break;
    case "Dust":
      icon = styles.smoke;
      break;
    case "Fog":
      icon = styles.smoke;
      break;
    case "Sand":
      icon = styles.smoke;
      break;
    case "Ash":
      icon = styles.smoke;
      break;
    case "Squall":
      icon = styles.storm;
      break;
    case "Tornado":
      icon = styles.storm;
      break;

    case "Clear":
      icon = styles.sun;
      break;
    case "Clouds":
      icon = styles.clouds;
      break;
  }

  return (
    <div className={styles.GeneralInterface}>
      <div className={styles.container}>
        <h2 className={styles.city}>{props.weather.name}</h2>
        <div className={`${styles.img} ${icon}`}></div>
        <h1 className={styles.temperature}>{props.weather.main.temp}°C</h1>
        <p className={styles.description}>
          {props.weather.weather[0].description}
        </p>
      </div>
      <button onClick={props.searchActivate} className={styles.settings}>
        set up
      </button>
    </div>
  );
}

export default GeneralInterface;
