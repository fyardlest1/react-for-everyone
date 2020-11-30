import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';

import { MovieDetails } from './Components/MovieDetails';
import MoviesList from './Components/MoviesList';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={MoviesList} />
          <Route path='/movie/:id' component={MovieDetails} />
        </Switch>      
      </Router>
    </div>
  );
}

export default App;
