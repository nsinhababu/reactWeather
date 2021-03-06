import { useContext } from 'react';

import './styles.css';
import { getFormattedDate } from '../../utils';
import { themeConfig, ThemeContext } from '../../ContextProvider';

const WeeklyForecast = ({ data = {} }) => {
  const { theme } = useContext(ThemeContext);

  const weeklyWeatherData = data?.daily;

  const weeklyDataLoop = (weeklyWeatherData || []).map(
    ({ dt, temp, weather }, index) => {
      const maxTemp = temp?.max;
      const minTemp = temp?.min;
      const description = weather[0]?.description;
      const date = getFormattedDate({ date: new Date(dt * 1000) });

      return (
        <div className='weekly__forecast-screen' key={index}>
          <h3>{date}</h3>
          <div>
            <div className='description'>
              <img
                className='weekly-forecast-icon'
                src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt=''
              />
              <p>{description}</p>
            </div>
            <p>
              Temp: {maxTemp} / {minTemp}
            </p>
          </div>
        </div>
      );
    }
  );

  return <div className='weekly__forecast-container'>{weeklyDataLoop}</div>;
};

export default WeeklyForecast;
