import './App.css';
import NavBar from './NavBar';
import ForecastSection from './Forecast';

const App = function () {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <ForecastSection />
    </>
  );
};
export default App;
