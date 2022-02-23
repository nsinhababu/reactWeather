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
              <div className='temp'>{temp}</div>
              <div className='real-feel'>{feels_like}</div>
              <div className='humidity'>{humidity}</div>
              <div className='alert'>{weather[0].description}</div>
              <div className='pressure'>{pressure}</div>
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
