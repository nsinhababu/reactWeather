import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './ContextProvider';
import './App.css';

// Import components
import NavBar from './components/NavBar';
import Search from './components/Search';
import Forecast from './components/Forecast';
import HourlyReport from './components/HourlyReport';
import WeeklyForecast from './components/WeeklyForecast';

// Utils
import { fetchData } from './utils/index';
import { themeConfig } from './ContextProvider';

const App = () => {
  const { dark, light } = themeConfig;

  const { theme, getThemeColor } = useContext(ThemeContext);
  const [bgColor, setBgColor] = useState('');
  const [color, setColor] = useState('');
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

  useEffect(() => {
    if (theme) {
      setBgColor(getThemeColor({ mode: theme, type: 'bgColor' }));
      setColor(getThemeColor({ mode: theme, type: 'textColor' }));
    }
  }, [theme]);

  return (
    <>
      {weatherData && (
        <div
          style={{
            backgroundColor: bgColor,
            color,
          }}
        >
          <NavBar data={weatherData} />
          <Search />
          <section>
            <Forecast data={weatherData} />
            <HourlyReport data={weatherData} />
          </section>
          <WeeklyForecast data={weatherData} />
        </div>
      )}
    </>
  );
};

export default App;
