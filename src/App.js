import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import LogoutButton from './components/LogoutButton';
import PrivateRoute from './components/PrivateRoute';
function App() {

  return (
  <Router>
    <div className='App'>
      <div className='row'>
        <h2>FRIENDS DATABASE</h2>

        <div className='blockButton' >
          <Link to="/login">LOGIN.</Link>
        </div>
        <div className='blockButton' >
          <Link to="/friends">FRIENDSLIST.</Link>
        </div>
        <div className='blockButton' >
          <Link to="/friends/add">ADD FRIEND.</Link>
        </div>
        <div className='blockButton' >
          <Route path='/' component={LogoutButton} />
        </div>
      </div>
      <Switch>
        <PrivateRoute path='/friends/add' component={AddFriend} />
        <PrivateRoute path='/friends' component={FriendsList} />
        <Route path='/login' component={Login} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
