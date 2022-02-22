import { useState, useEffect } from 'react';
import { fetchWeather } from '../../utils';

import './styles.css';

const Forecast = () => {
  // const [weatherData, setWeatherData] = useState({});
  // useEffect(() => {
  //   const data = fetchWeather();
  //   console.log(data);
  //   setWeatherData(data);
  // }, []);

  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    const data = fetchWeather();
    setWeatherData(data);
  }, []);

  console.log(weatherData);

  return (
    <main className='main'>
      <section>
        <div className='forecast'>
          <img
            src='https://img.icons8.com/fluency/50/000000/sun.png'
            className='forecast__img'
            alt='Forecast img'
          />

          <h3 className='forecast__description'>Today's Forecast</h3>
        </div>
      </section>
      <section>
        <div className='attributes'>
          <div className='attribute-wrapper attribute-wrapper-one'>
            <img
              src='https://img.icons8.com/color/50/000000/air-element.png'
              alt=''
              className=''
            />
            <p className=''>Wind Speed</p>
          </div>
          <div className='attribute-wrapper attribute-wrapper-two'>
            <img
              src='https://img.icons8.com/external-flat-icons-pack-pongsakorn-tan/50/000000/external-heat-ecology-and-pollution-flat-icons-pack-pongsakorn-tan.png'
              alt=''
              className=''
            />
            <p className=''>Temp.:</p>
          </div>
          <div className='attribute-wrapper attribute-wrapper-three'>
            <img
              src='https://img.icons8.com/fluency/50/000000/air-quality.png'
              alt=''
            />
            <p className=''>
              A.Q.I: <span className='warning'></span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Forecast;
