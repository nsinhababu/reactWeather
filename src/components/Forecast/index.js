import './styles.css';
import { getFormattedTime } from '../../utils';

const Forecast = ({ data = {} }) => {
  const currentWeatherData = data?.current;
  const dailyWeatherData = data?.daily;
  const sunRise = currentWeatherData?.sunrise;
  const sunSet = currentWeatherData?.sunset;

  console.log(data);
  const { temp, feels_like, humidity, uvi, weather, wind_speed, pressure } =
    currentWeatherData || {};

  return (
    <>
      {currentWeatherData && (
        <main className='main'>
          <section>
            <div className='forecast'>
              <div className='temp'>
                <h2>Temp: {temp} C</h2>
              </div>
              <div className='real-feel'>
                <h2>Real Feel: {feels_like} C</h2>
              </div>
              <div className='humidity'>
                <h2>Humidity: {humidity} %</h2>
              </div>
              <div className='alert'>
                <img
                  className='forecast-icon'
                  src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                  alt=''
                />
                <h2>{weather[0].description}</h2>
              </div>
              <div className='pressure'>
                <h2>Atm. Pressure: {pressure} </h2>
              </div>
            </div>
          </section>
          <section>
            <div className='attributes'>
              <div className='attribute-wrapper attribute-wrapper-one'>
                <p className=''>W/S: {wind_speed}</p>
              </div>
              <div className='attribute-wrapper attribute-wrapper-two'>
                <div>
                  <h3>
                    Rise:
                    {getFormattedTime({ date: new Date(sunRise * 1000) })}
                  </h3>
                </div>
                <div>
                  <img
                    src=' http://openweathermap.org/img/wn/01d@2x.png'
                    alt='Image_Of_Sun'
                  />
                </div>
                <div>
                  <h3>
                    Set:
                    {getFormattedTime({ date: new Date(sunSet * 1000) })}
                  </h3>
                </div>
              </div>
              <div className='attribute-wrapper attribute-wrapper-three'>
                <p className=''>UV.: {uvi}</p>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
};
export default Forecast;
