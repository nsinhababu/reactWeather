import './styles.css';

const Forecast = ({ data = {} }) => {
  const currentWeatherData = data?.current;

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
                <h2>Temp: {temp}</h2>
              </div>
              <div className='real-feel'>
                <h2>Real Feel: {feels_like}</h2>
              </div>
              <div className='humidity'>
                <h2>Humidity: {humidity}</h2>
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
                <img
                  src='https://img.icons8.com/color/50/000000/air-element.png'
                  alt=''
                  className=''
                />
                <p className=''>W/S: {wind_speed}</p>
              </div>
              <div className='attribute-wrapper attribute-wrapper-two'>
                <img
                  src='https://img.icons8.com/external-flat-icons-pack-pongsakorn-tan/50/000000/external-heat-ecology-and-pollution-flat-icons-pack-pongsakorn-tan.png'
                  alt=''
                  className=''
                />
                <p className=''>UV.: {uvi}</p>
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
      )}
    </>
  );
};
export default Forecast;
