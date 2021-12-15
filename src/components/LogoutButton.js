import React from 'react';  
import axios from 'axios';
import { localeData } from 'moment';

const LogoutButton = () => {
    
    const handleClick = (e) => {
        e.preventDefault();
       
        const headers = {
            headers: {
              authorization: localStorage.getItem('token')
            }
        }     
        
        axios.post('http://localhost:9000/api/logout', headers)
            .then( resp => {
                localStorage.removeItem('token');
            })
            .catch( err => console.error(err))
        }
    }

    return(
        <div>
            { localStorage.getItem('token') && <button onCLick={handleClick}>LOGOUT</button>}
        </div>
    )
}

export default LogoutButton;