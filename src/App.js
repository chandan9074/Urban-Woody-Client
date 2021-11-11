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
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Private route/PrivateRoute';
import Explore from './Pages/Explorepage/Explore';
import Dashboard from './Pages/Dashboardpage/Dashboard';
import Purchase from './Pages/PurchasePage/Purchase';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
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
          <PrivateRoute exact path="/explore">
            <Explore />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path="/purchase">
            <Purchase />
          </PrivateRoute>
        </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
