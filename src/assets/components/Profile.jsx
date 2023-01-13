import React from 'react'
import Navbar from './Navbar'
import User from './User'
import {useState, useEffect} from 'react'
import axios from 'axios'


const Profile = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/user')
        .then(res => {
           //console.log(res.data)
            setUsers(res.data)
        })
        .catch(err => {
            console.log(err)

        })
    }, [])
    return (
        
        <div>
            <Navbar/>
        <ul>
            {
                users.map((user,index)=> <li key={index}>{user.fullName}</li>)
            }
        </ul>

        </div>
     )
}




export default Profile