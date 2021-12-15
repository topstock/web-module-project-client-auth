import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
function App() {
  return (

    <div className="App">
      <h2>FRIENDS DATABASE</h2>
    
      <Route path="/api/friends/add" component={AddFriend} />
      <Switch>
        <Route path="/api/friends" component={FriendsList} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  
  );
}

export default App;
