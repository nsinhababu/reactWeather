const APIkey = 'be2f6e1e20098a7bda35e811168fc256';
const url = ` https://api.openweathermap.org/data/2.5/onecall?lat=${0}&lon=${0}&appid=${APIkey}`;

// const fetchWeather = () => {
//   return fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       // debugger;
//     })
//     .catch((e) => console.log(e));
// };

// export { fetchWeather };

const fetchWeather = () => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
};
export { fetchWeather };
