import getUserIp from "./getUserLocation";

const ip = await getUserIp();

async function getWeather() {
  const data = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=3fdced88feca433f991170322242104&q=${ip}`,
    {
      mode: "cors",
    }
  );
  const raw = await data.json();

  let location = raw.location.name;
  let temp = `${raw.current.temp_c}°C`;
  let time = raw.location.localtime.split(" ")[1];
  let condition = raw.current.condition.text;
  let wind = `${raw.current.wind_kph}km/h`;
  let feelsLike = `${raw.current.feelslike_c}°C`;

  return { location, temp, time, condition, wind, feelsLike };
}

export default getWeather;
