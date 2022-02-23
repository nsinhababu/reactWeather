import { useState, useEffect } from 'react';

import './App.css';
import NavBar from './components/NavBar';
import Search from './Search';
import Forecast from './components/Forecast';
import HourlyReport from './components/HourlyReport';
import { fetchData } from './utils/index';

const App = () => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    try {
      fetchData({ url: `&lat=${0}&lon=${0}&units=metric` }).then((data) => {
        // console.log('🚀 ~ file: index.js ~ line 12 ~ fetchData ~ data', data);
        setWeatherData(data);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <NavBar data={weatherData} />
      <Search />
      <Forecast data={weatherData} />
      <HourlyReport data={weatherData} />
    </>
  );
};

export default App;
