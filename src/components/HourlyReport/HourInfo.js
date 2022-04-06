import { getFormattedTime } from '../../utils';

const HourInfo = ({ data }) => {
  const { dt, temp, weather, wind_speed } = data || {};
  const time = getFormattedTime({ date: new Date(dt * 1000) });
  return (
    <div className='hourly__data-screen'>
      <h5
        style={{
          marginRight: 'auto',
          backgroundColor: '#87cefa37',
          padding: '3px',
          marginBottom: '45px',
        }}
      >
        {time}
      </h5>

      <h2 style={{ color: 'black' }}>{Math.floor(temp)}</h2>

      <img
        className='hourly-forecast-icons'
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt=''
      />

      <div className='hourly__data'>
        <h4>{weather[0].description}</h4>
        <h4>W/S: {wind_speed}</h4>
      </div>
    </div>
  );
};

export default HourInfo;
