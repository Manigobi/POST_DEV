import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Homepage = () => {
  let [post, setPost] = useState([])
  let [user, setUser] = useState([])
  let [title, settitle] = useState("")
  let getData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await response.json()
    setPost(data)
  }
  let getUser = async () => {
    let user = (await axios.get("https://jsonplaceholder.typicode.com/users")).data
    setUser(user)
  }
  useEffect(() => {
    getData()
    getUser()
  }, [])
  let handleSearch = () => {
   if (title!="") {
    let tdata = post.filter((e)=>e.title.toLowerCase().includes(title.toLowerCase()))
    console.log(`tdata : ${tdata}`)
    console.log(`tdata.length :${tdata.length}`)
     
    setPost(tdata);
  } else {
    getData(); 
  }
  }
  return (
    <>
      <div className="outer-home">
        <Navbar />
        <div className="inner">
          <div className="searach-sec">
            <input type="text" name="" id="" placeholder='enter the title' value={title} onChange={(e) => settitle(e.target.value)} />
            <button onClick={handleSearch} >Search</button>
          </div>
          {
            post.length>0?(
            post.map((ele) => {
              let creator = user.find((e) => e.id === ele.userId)
              return (
                <div className="card" key={ele.id}>
                  <h1> {(ele.title).slice(0, 40)}...</h1>
                  <p>{ele.body}</p>
                  <h3>Created by: {creator ? creator.name : "Unknown"}</h3>
                  <Link to={`${ele.id}`} >view details</Link>
                </div>
              )
            }))
            :(
              <h1> Post not Found</h1>
            )

          }
        </div>
      </div>
    </>
  )
}
export default Homepage