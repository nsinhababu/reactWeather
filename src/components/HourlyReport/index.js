import './styles.css';
import HourInfo from './HourInfo';

const HourlyReport = ({ data = {} }) => {
  const hourlyData = data?.hourly?.slice(0, 9);

  return (
    <div className='hourly__data-wrapper'>
      {(hourlyData || []).map((hourData, index) => {
        return <HourInfo key={index} data={hourData} />;
      })}
    </div>
  );
};
export default HourlyReport;
