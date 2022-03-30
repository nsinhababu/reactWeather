import React from 'react';
import { useContext } from 'react';
import './styles.css';
import { ThemeContext } from '../../ContextProvider';
import { themeConfig } from '../../ContextProvider';
import { getFormattedTime } from '../../utils';

const WeatherInfo = ({ weatherData }) => {
  return (
    <div>
      <h3>{weatherData}</h3>
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
          <section>
            <div className='forecast'>
              <WeatherInfo weatherData={temp} />
              <WeatherInfo weatherData={feels_like} />
              <WeatherInfo weatherData={humidity} />
              <WeatherInfo weatherData={pressure} />

              <div className='alert'>
                <img
                  className='forecast-icon'
                  src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                  alt=''
                />
                <h2>{weather[0].description}</h2>
              </div>
            </div>
          </section>
          <section>
            <div className='attributes'>
              <WeatherInfo weatherData={wind_speed} />
              <WeatherInfo
                weatherData={getFormattedTime({
                  date: new Date(sunRise * 1000),
                })}
              />
              <WeatherInfo
                weatherData={getFormattedTime({
                  date: new Date(sunSet * 1000),
                })}
              />
              <div className='attribute-wrapper attribute-wrapper-two'>
                <div>
                  <img
                    src=' http://openweathermap.org/img/wn/01d@2x.png'
                    alt='Image_Of_Sun'
                  />
                </div>
                {/* <div>
                  <h3>
                    Set:
                    {getFormattedTime({ date: new Date(sunSet * 1000) })}
                  </h3>
                </div> */}
              </div>
              <WeatherInfo weatherData={uvi} />

              {/* <div className='attribute-wrapper attribute-wrapper-three'>
                <p className=''>UV.: {uvi}</p>
              </div> */}
            </div>
          </section>
        </main>
      )}
    </>
  );
};
export default Forecast;
