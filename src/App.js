//importacion de componentes
import NavBar from './components/NavBar';
import WeatherPanel from './components/WeatherPanel';
//importe de estilos
import '../src/assets/css/App.css'
function App() {
  return (
    <div className="App">
      <NavBar />
      <WeatherPanel />
    </div>
  );
}

export default App;
