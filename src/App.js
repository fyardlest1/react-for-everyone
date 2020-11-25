// import logo from './logo.svg';
import './App.css';

import MoviesList from './Components/MoviesList';

function App() {
  return (
    <div className="App">      
      <MoviesList />
    </div>
  );
}

const Greetings = ({ name, greeting }) => {
  return (
    <div>
        <h1> {greeting} {name} </h1>
    </div>
  )
}

export default App;
