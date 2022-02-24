import './styles.css';
import { getFormattedDate } from '../../utils';

const WeeklyForecast = ({ data = {} }) => {
  const weeklyWeatherData = data?.daily?.slice(0, 7);

  const weeklyDataLoop = (weeklyWeatherData || []).map(
    ({ dt, temp, weather }, index) => {
      const maxTemp = temp?.max;
      const minTemp = temp?.min;
      const description = weather[0]?.description;
      const date = getFormattedDate({ date: new Date(dt * 1000) });

      return (
        <div className='weekly__forecast-screen' key={index}>
          <h4>{date}</h4>
          <h3>{description}</h3>
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
