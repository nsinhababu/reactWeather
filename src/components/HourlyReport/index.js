import './styles.css';
import { getFormattedTime } from '../../utils';

const HourlyReport = ({ data = {} }) => {
  const hourlyData = data?.hourly?.slice(0, 8);

  const HourlyDataLoop = (hourlyData || []).map(
    ({ dt, temp, weather, wind_speed }, index) => {
      const time = getFormattedTime({ date: new Date(dt * 1000) });
      return (
        <div className='hourly__data-screen' key={index}>
          <h4>{time}</h4>
          <h3>{weather[0].description}</h3>
          <h3>{temp}C</h3>
          <h3>W/S: {wind_speed}</h3>
        </div>
      );
    }
  );

  return <div className='hourly__data-wrapper'>{HourlyDataLoop}</div>;
};
export default HourlyReport;
