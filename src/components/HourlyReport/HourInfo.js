import { getFormattedTime } from '../../utils';

const HourInfo = ({ data }) => {
  const { dt, temp, weather, wind_speed } = data || {};
  const time = getFormattedTime({ date: new Date(dt * 1000) });
  return (
    <div className='hourly__data-screen'>
      <img
        className='hourly-forecast-icons'
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt=''
      />
      <div className='hourly__data'>
        <h4>{time}</h4>
        <h3>{weather[0].description}</h3>
        <h3>{temp}C</h3>
        <h3>W/S: {wind_speed}</h3>
      </div>
    </div>
  );
};

export default HourInfo;
