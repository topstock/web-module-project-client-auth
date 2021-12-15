import React, { useState, useEffect }from 'react';
import axios from 'axios';

const FriendsList = ()=> {
    const [state, setState] = useState([]);
    const headers = {
        headers: {
            authorization: localStorage.getItem('token'),
        }
    };
    useEffect(()=> {
        axios.get('http://localhost:9000/api/friends', headers)
        .then(res => setState(res.data))
        .catch(err => console.error({err}))
    },[])

    return(
        <div className='centeredColumn'>
            <div className='wd400'>
                <h1>FRIENDS LIST</h1>
                { state.map( friend => {
                    return( 
                        <p key={friend.name} className='uppercase' >
                            -{friend.name} -{friend.email}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}

export default FriendsList;