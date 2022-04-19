import logo from './logo.svg';
import './App.css';
import Card from './Component/Card/Card';
import MoviesContext from './context/Movies';

function App() {
  return (
    <div className='App'>
      <MoviesContext>
        <Card />
      </MoviesContext>
    </div>
  );
}

export default App;
