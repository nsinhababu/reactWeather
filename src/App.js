import './App.css';
import NavBar from './components/NavBar';
import Search from './Search';
import Forecast from './components/Forecast';
import HourlyReport from './components/HourlyReport';

const App = () => (
  <>
    <NavBar />
    <Search />
    <Forecast />
    <HourlyReport />
  </>
);

export default App;
