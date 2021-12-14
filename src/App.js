import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
  return (

    <div className="App">
      <h2>FRIENDS DATABASE</h2>
      <Route path="/" component={Login} />
      <Route path="/api/friends" component={FriendsList} />
    </div>
  
  );
}

export default App;
