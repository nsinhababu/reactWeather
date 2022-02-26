import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './ContextProvider';
import './App.css';

// Import components
import NavBar from './components/NavBar';
import Search from './Search';
import Forecast from './components/Forecast';
import HourlyReport from './components/HourlyReport';
import WeeklyForecast from './components/WeeklyForecast';

// Utils
import { fetchData } from './utils/index';
import { themeConfig } from './ContextProvider';

const App = () => {
  const { theme } = useContext(ThemeContext);

  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    try {
      fetchData({ url: `&lat=${0}&lon=${0}&units=metric` }).then((data) => {
        setWeatherData(data);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      {weatherData && (
        <div
          style={{
            backgroundColor:
              theme === 'dark'
                ? themeConfig.dark.backgroundColor
                : themeConfig.light.backgroundColor,
            color:
              theme === 'light'
                ? themeConfig.light.color
                : themeConfig.grey.color,
          }}
        >
          <NavBar data={weatherData} />
          <Search />
          <Forecast data={weatherData} />
          <HourlyReport data={weatherData} />
          <WeeklyForecast data={weatherData} />
        </div>
      )}
    </>
  );
};

export default App;
