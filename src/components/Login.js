import React, {useState} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const Login = () => {
  const initialState = {
    username: '',
    password: ''
  }

  const [state, setState] = useState(initialState);

  const handleChange = (e)=> {
    setState({
        ...state,
    [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (e)=> {
    e.preventDefault();
    const userCredentials = {
            username: state.username,
            password: state.password
    }

    axios.post('http://localhost:9000/api/login', userCredentials)
      .then( resp => {
          const token = resp.data.token;
          localStorage.setItem('token', token);
      })
      .catch( err => console.error(err))
  }

  if (localStorage.token) {
    return (<Redirect to='/api/friends/' />)  
  } else {
    return(
      <div>
          
          <h2>LOGIN</h2>
          <form  onSubmit={handleSubmit} >
              <label>
                  USERNAME
                  <input type='text' value={state.username} onChange={handleChange} name='username' />
              </label>
  
              <label>
                  PASSWORD
                  <input type='text' value={state.password} onChange={handleChange} name='password' />
              </label>
  
              <input type="submit" value="SUBMIT" />
          </form>
      </div>
    )
  }
}
export default Login;