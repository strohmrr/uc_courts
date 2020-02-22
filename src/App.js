import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/LoginPage';
import Profile from './pages/Profile';



class App extends React.Component {
  render() {
    return (
      <>
      <Router>
        <div className="App">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/login" component={Login} exact/>
              <Route path="/profile" component={Profile} exact/>
            </Switch> 
        </div> 
      </Router>
      </>
    );
  }
}

export default App;
