import React, {useState} from 'react';

const Login = () => {
  const [state, setState] = useState({
      username: '',
      password: ''
  });

  const handleChange = (e)=> {
    const inputName = e.target.name;
    const inputValue = e.target.value
    setState({
        ...this.state,
    inputName: inputValue
    })
  }
  return(
    <div>
        <h2>LOGIN</h2>
        <form>
            <label>
                USERNAME
                <input type='text' onChange={this.handleChange} name='username' />
            </label>

            <label>
                PASSWORD
                <input type='text' onChange={this.handleChange} name='password' />
            </label>

            <button>SUBMIT</button>
        </form>
    </div>)
}

export default Login;