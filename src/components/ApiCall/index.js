import './styles.css';

// const ApiCall = ( APIkey) => {
const APIkey = 'be2f6e1e20098a7bda35e811168fc256';
const url = ` https://api.openweathermap.org/data/2.5/onecall?lat=${0}&lon=${0}&appid=${APIkey}`;
// };
const fetchWeather = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
};

export default fetchWeather;
