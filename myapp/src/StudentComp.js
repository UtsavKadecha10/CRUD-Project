import {React, useEffect,useState} from 'react';
import axios from 'axios';
import './App.css'

const Resource1 = () => {

    const [users,setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/Students')
        .then(response => {
            console.log(response.data);
            setUsers(response.data);
        })
        .catch((error) => console.log(error))
    },[]);

    return (
        <div className='Data'>
            <h1>List of Students</h1>
            <ul>
                {
                    users.map(e => (
                        <li key={e} >{e.name} {e.address}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Resource1;
