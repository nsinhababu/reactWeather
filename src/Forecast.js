import './Forecast.css';
const imgArr = [1, 2, 3, 4, 5];

const ForecastSection = () => {
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
          <div className='attribute-wrapper'>
            <img src='' alt='' className='' />
            <p className=''>Wind Speed</p>
          </div>
          <div className='attribute-wrapper'>
            <img src='' alt='' className='' />
            <p className=''>Temp.:</p>
          </div>
          <div className='attribute-wrapper'>
            <img src='' alt='' className='' />
            <p className=''>
              A.Q: <span className='warning'></span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
export default ForecastSection;
