// import pakages
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//import files
import Homepage from './Pages/Homepage/Homepage';
import Login from './Pages/Accounts/Login';
import Registration from './Pages/Accounts/Registration';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage></Homepage>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
