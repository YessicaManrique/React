import logo from './logo.svg';
import './App.css';
import logo2 from './foto yessica.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo2} className="App-logo" alt="logo" />
        <p>
         Yessica Manrique Bazalar
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Grupo 8 - Pollitos en Fuga
        </a>
      </header>
    </div>
  );
}

export default App;
