import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar'
const Post = () => {
    let param = useParams()
    let [post, setPost] = useState({})
    let [user, setUser] = useState([])
    let [comments, setComments] = useState([])

    let getData = async () => {
        let data = (await axios.get(`https://jsonplaceholder.typicode.com/posts/${param.pid}`)).data
       setPost(data)
        getComment(data.id)
    }
     let getUser = async () => {
    let user = (await axios.get("https://jsonplaceholder.typicode.com/users")).data
    setUser(user)
  }

let getComment= async(id)=>{
console.log('getComment ...')
console.log(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
   let com =(await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)).data
   setComments(com)
   console.log(`com : ${com}`)

}

    useEffect(() => {
        getData()
        getUser()
        
    }, [])


    let creator=user.find((e)=>e.id===post.userId)
    return (
        
        <>
         
            <div className="post-outer">
                <Navbar/>
                <div className="post-inner">
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <h3>Created by: {creator ? creator.name : "Unknown"}</h3>
                    <hr/>
                    <h3>comments</h3>
                    {
                        comments.map((ele)=>{
                            return(
                                <div>
                                <div className='cmd'>
                                <p key={ele.id}>{ele.body}</p>
                                <div className="user-det">
                                    <p>{ele.name}</p>
                                    <p>{ele.email}</p>
                                </div>
                            </div>
                            </div>
                            )
                        })
                    }
                    <Link to="/" >back to home</Link>
                </div>
            </div>
        </>
    )
}
export default Post