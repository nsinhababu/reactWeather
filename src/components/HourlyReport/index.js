import './styles.css';
import { getFormattedTime } from '../../utils';

const HourlyReport = ({ data = {} }) => {
  const hourlyData = data?.hourly?.slice(0, 8);

  const HourlyDataLoop = (hourlyData || []).map(
    ({ dt, temp, weather }, index) => {
      // const d = new Date(dt * 1000);
      // const hour = d.getHours();
      // console.log(d, hour);

      const time = getFormattedTime({ date: new Date(dt * 1000) });
      return (
        <div className='hourly__data-screen' key={index}>
          <h3>{time}</h3>
          <h3>{temp}</h3>
          <h3>{weather[0].description}</h3>
        </div>
      );
    }
  );

  return <div className='hourly__data-wrapper'>{HourlyDataLoop}</div>;

  // return (hourlyData || []).map(({ temp, dt }, index) => {
  //   const date = getFormattedDate({ date: new Date(dt * 1000) });
  //   return (
  //     <div key={index} className='hourly__data-wrapper'>
  //       <div className='hourly__data-screen'>{temp}</div>
  //       <div className='hourly__data-screen'>{date}</div>
  //       {/* <div className='hourly__data-screen'></div> */}
  //     </div>
  //   );
  // });
};
export default HourlyReport;
