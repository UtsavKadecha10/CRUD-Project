import {React, useEffect,useState} from 'react';
import axios from 'axios';
import './App.css'

const Resource2 = () => {

    const [users,setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/Person')
        .then(response => {
            console.log(response.data);
            setUsers(response.data);
        })
        .catch((error) => console.log(error))
    },[]);

    return (
        <div className='Data'>
            <h1>List of Person</h1>
            <ul>
                {
                    users.map(e => (
                        <li key={e}  >{e.first_name} {e.last_name} - {e.Address}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Resource2;
