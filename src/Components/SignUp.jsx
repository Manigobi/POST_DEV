import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from'axios'
const SignUp = () => {

let[name,setName]=useState();
let[email,setEmail]=useState()
let[pass,setpass]=useState();
let navigate= useNavigate()

let handleSubmit= async(e)=>{
 e.preventDefault()
let payload= {
    name:name,
    email : email,
    pass:pass
}

await axios.post("http://localhost:5000/users",payload)
alert("SignUp Done")
setName("")
setEmail("")
setpass("")
navigate('/')
}
  return (
   <>
   <div className="outer">
   <h1>Signup Page</h1>
   <form action="" onSubmit={handleSubmit}>
    <label htmlFor="name">Name</label>
    <input type="text" placeholder='enter the name' value={name} onChange={(e)=>{setName(e.target.value)}} />
    <label htmlFor="email">Email</label>
    <input type="text" placeholder='enter the email' value={email}  onChange={(e)=>{setEmail(e.target.value)}} />
    <label htmlFor="pass">password</label>
    <input type="text" placeholder='enter the pass' value={pass}  onChange={(e)=>{setpass(e.target.value)}} />
    <button>Sign Up</button>
    <p>I have alredy Account <span><Link to="/" >Login</Link></span></p>
    </form>
   </div>
   </>
  )
}

export default SignUp