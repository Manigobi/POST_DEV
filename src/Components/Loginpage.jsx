import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Loginpage = () => {

    let [email, setEmail] = useState("")
    let [pass, setPass] = useState("")
    let navigate = useNavigate();
    let handleSubmit = async (e) => {
        e.preventDefault()
        let users = (await axios.get(('http://localhost:5000/users'))).data
        console.log(users)

        let user = users.find((ele) => {
            console.log(`ele.email:${ele.email}`)
            console.log(`email:${email}`)
            console.log(`ele.pass:${ele.pass}`)
            console.log(`pass:${pass}`)

            return ele.email == email && ele.pass == pass
        })

        console.log(`user :${user}`)
        if (user) {

            navigate('/home')
        }
        else {
            console.log("Wrong cretentials")
        }

    }
    return (
        <>
            <div className="login">
                <h1>Login Page</h1>
                <form action="" onSubmit={handleSubmit}>

                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder='enter the email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="pass">password</label>
                    <input type="text" placeholder='enter the pass' value={pass} onChange={(e) => setPass(e.target.value)} />
                    <button>Login</button>
                    <p>I don't have Account <span><Link to="/signup" >Sign Up</Link></span></p>
                </form>
            </div>
        </>
    )
}

export default Loginpage