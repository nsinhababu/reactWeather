import React from 'react';
import { useContext } from 'react';
import './styles.css';
import { ThemeContext } from '../../ContextProvider';
import { themeConfig } from '../../ContextProvider';
import { getFormattedTime } from '../../utils';

const WeatherInfo = ({ weatherData, dataName }) => {
  return (
    <div>
      <h2>{weatherData}</h2>
      <h5>{dataName}</h5>
    </div>
  );
};

const Forecast = ({ data = {} }) => {
  const currentWeatherData = data?.current;
  const dailyWeatherData = data?.daily;
  const sunRise = currentWeatherData?.sunrise;
  const sunSet = currentWeatherData?.sunset;

  const { theme } = useContext(ThemeContext);

  console.log(data);
  const { temp, feels_like, humidity, uvi, weather, wind_speed, pressure } =
    currentWeatherData || {};

  return (
    <>
      {currentWeatherData && (
        <main className='main'>
          <div className='forecast'>
            <div className='alert'>
              <WeatherInfo weatherData={Math.floor(temp)} dataName={null} />

              {/* <img
                  className='forecast-icon'
                  src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                  alt=''
                /> */}
              <p>{weather[0].description}</p>
            </div>
            <div className='weather-data'>
              <WeatherInfo weatherData={feels_like} dataName='Real Feel' />
              <WeatherInfo weatherData={humidity} dataName='Humidity' />
              {/* <WeatherInfo weatherData={pressure} dataName='Pressure' /> */}
              <WeatherInfo weatherData={wind_speed} dataName='W/S' />
              <WeatherInfo
                weatherData={getFormattedTime({
                  date: new Date(sunRise * 1000),
                })}
                dataName='Rise'
              />
              <WeatherInfo
                weatherData={getFormattedTime({
                  date: new Date(sunSet * 1000),
                })}
                dataName='Set'
              />

              <WeatherInfo weatherData={uvi} dataName='UV' />
            </div>
          </div>
        </main>
      )}
    </>
  );
};
export default Forecast;
