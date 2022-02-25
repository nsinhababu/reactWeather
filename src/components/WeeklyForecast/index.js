import './styles.css';
import { getFormattedDate } from '../../utils';

const WeeklyForecast = ({ data = {} }) => {
  const weeklyWeatherData = data?.daily;

  const weeklyDataLoop = (weeklyWeatherData || []).map(
    ({ dt, temp, weather }, index) => {
      const maxTemp = temp?.max;
      const minTemp = temp?.min;
      const description = weather[0]?.description;
      const date = getFormattedDate({ date: new Date(dt * 1000) });

      return (
        <div className='weekly__forecast-screen' key={index}>
          <h4>{date}</h4>
          <div className='description'>
            <img
              className='weekly-forecast-icon'
              src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
              alt=''
            />
            <h3>{description}</h3>
          </div>
          <h3>
            Temp: {maxTemp} / {minTemp}
          </h3>
        </div>
      );
    }
  );

  return <div className='weekly__forecast-container'>{weeklyDataLoop}</div>;
};

export default WeeklyForecast;
