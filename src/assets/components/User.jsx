import React, {useState, useEffect} from 'react'
import axios from 'axios'


const getAllUsers = (users) => {
    return users;
}
const User = () => {

    const [users, setUsers] = useState([])

    

    useEffect(() => {
        axios.get('http://localhost:3000/api/user')
        .then(res => {
           console.log(res.data)
            setUsers(res.data)
        })
        .catch(err => {
            console.log(err)

        })
    }, [])
    getAllUsers(users);
    return (
    
        <div>
            <ul>
                {
                    users.map((user,index)=> <li key={index}>{user.fullName}</li>)
                }
            </ul>

        </div>
  )
}
export default {User, getAllUsers}