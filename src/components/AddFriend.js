import React, {useState} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const AddFriend = () => {
  const initialState = {
    name: '',
    email: ''
  }

  const [state, setState] = useState(initialState);


  const handleChange = (e)=> {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }
      
  console.log('token for add friend', localStorage.getItem('token'));

  const handleSubmit = (e)=> {
    e.preventDefault();
    const newFriend = {
            name: state.name,
            email: state.email,
            id: Date.now()

    }

    console.log('newFriend for addFriend', newFriend);

    const headers = {
      headers: {
        authorization: localStorage.getItem('token')
      }
      
    }

    axios.post('http://localhost:9000/api/friends', newFriend, headers)
      .then( resp => {
          console.log(resp)
      })
      .catch( err => console.error(err))
  }

  return( 
    <div>
       <div>
         
        <h2>ADD FRIEND</h2>
        <form onSubmit={handleSubmit} >
          <label>
            FRIEND NAME
            <input 
              type='text' 
              value={state.name} 
              onChange={handleChange} 
              name='name' 
            />
          </label>
          <label>
            FRIEND EMAIL
            <input 
              type='text'
              value={state.email}
              onChange={handleChange}
              name='email' 
            />
          </label>
           <input type="submit" value="SUBMIT" />
        </form>
      </div>
    
    </div>
  )
}

export default AddFriend;