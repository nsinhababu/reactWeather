import './App.css';
import NavBar from './NavBar';
import Search from './Search';
import ForecastSection from './Forecast';

const App = function () {
  return (
    <>
      <header>
        <NavBar />
        <Search />
      </header>
      <ForecastSection />
    </>
  );
};
export default App;
