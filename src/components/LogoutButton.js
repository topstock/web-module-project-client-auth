import React from 'react';  
import axios from 'axios';
import { localeData } from 'moment';
import {useHistory} from 'react-router-dom';

const LogoutButton = () => {
    const { push } = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
       
        const headers = {
            headers: {
              authorization: localStorage.getItem('token')
            }
        };     

        axios.post('http://localhost:9000/api/logout', {}, headers)
            .then( resp => {
                push('/');
                localStorage.removeItem('token');
            })
            .catch( err => console.error(err))
    }

    return(
        
        <div>
            { localStorage.getItem('token') && <button onClick={handleClick}>LOGOUT</button>}
        </div>
    )
}

export default LogoutButton;