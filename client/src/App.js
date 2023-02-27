import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import PokemonCreate from './components/PokemonCreate'
import Details from './components/Detail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path = '/' component={LandingPage}/>
        <Route path = '/home' component={Home}/>
        <Route path ='/pokemons' component={PokemonCreate}/>
        <Route path ='/detail/:idPokemon' component={Details}/>
      </Switch>      
    </div>
    </BrowserRouter>
  );
}

export default App;
