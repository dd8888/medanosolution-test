import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import InfoPokemon from "./components/InfoPokemon";
import Regions from "./components/Regions";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route path="/info" component={InfoPokemon}></Route>
        <Route path="/regions" component={Regions}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
    </Router>
  );
}

export default App;
