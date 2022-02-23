export const APIkey = 'be2f6e1e20098a7bda35e811168fc256';
export const base_url = `https://api.openweathermap.org/data/2.5/onecall?appid=${APIkey}`;

const fetchData = ({ url = '' }) => {
  return fetch(`${base_url}${url}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => console.log(e));
};

export { fetchData };
