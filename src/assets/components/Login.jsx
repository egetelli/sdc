import Navbar from './Navbar'
import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import { Link } from 'react-router-dom';


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }


    return (
      <div>
        <Navbar/>
        <ParticlesBg type="thick" bg={true} />
        <div class="App">
          <div className="auth-form-container">
              <h2 class="font-bold text-2xl" >Login</h2>
              <form className="login-form" onSubmit={handleSubmit}>
                  <label class="font-bold" htmlFor="email">Email</label>
                  <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                  <label class="font-bold" htmlFor="password">Password</label>
                  <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                  <button class="my-3 text-white bg-gradient-to-r from-blue-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
            focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit">Log In</button>
              </form>
              <Link class="underline" to="/Register">Don't have an account? Register here.</Link>

          </div>
        </div>
      </div>
    )
}

export default Login