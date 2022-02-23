import { monthNames } from './consts';
export const APIkey = 'be2f6e1e20098a7bda35e811168fc256';
export const base_url = `https://api.openweathermap.org/data/2.5/onecall?appid=${APIkey}`;

const fetchData = ({ url = '' }) => {
  return fetch(`${base_url}${url}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => console.log(e));
};

const getFormattedDate = ({ date }) => {
  if (date) {
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${monthNames[month]} ${day}, ${year}`;
  }
};

const getFormattedTime = ({ date }) => {
  if (date) {
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${hour}:${minute}`;
  }
};

export { fetchData, getFormattedDate, getFormattedTime };
