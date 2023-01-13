import React from 'react'
import Navbar from './Navbar'
import User from './User'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router";
import ParticlesBg from "particles-bg";
import CryptoPaymentsForm from './CryptoPaymentsForm'
import Wallet1 from './Wallet1'


const Profile = () => {

    const navigate = useNavigate();

    const signOut = () => {
        localStorage.removeItem("temitope");
        navigate("/login");
    };

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
            <Navbar />
            <ParticlesBg num={100} type="cobweb" bg={true} />

            <div className='App'>
                {/* <div>
                    <h1 class="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-gray-200 to-teal-100" >Profile page</h1>
                    <p class="font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-gray-400 via-teal-500 to-green-400">Hello there, welcome to your profile page</p>

                    <button class="mt-5 text-white bg-gradient-to-r from-blue-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
            focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={signOut}>Sign-Out</button>

                </div> */}
                <div>
                    <Wallet1 />
                    <h1 className='mt-20 white font-bold text-2xl text-center'>Send Crypto to a Campaign</h1>
                    <CryptoPaymentsForm />
                    <ul>
                        {
                            users.map((user, index) => <li key={index}>{user.fullName}</li>)
                        }
                    </ul>


                </div>
            </div>
        </div>
    )
}




export default Profile