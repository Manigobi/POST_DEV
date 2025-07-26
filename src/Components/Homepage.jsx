import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

const Homepage = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        getData();
        getUser();
    }, []);

    useEffect(() => {
        if (title.trim() !== "") {

            const searchTerm = title.toLowerCase();
            const filtered = allPosts.filter((post) => {
              
                const creator = users.find((u) => u.id === post.userId);
                const creatorName = creator ? creator.name.toLowerCase() : "";

                return (
                    post.title.toLowerCase().includes(searchTerm) ||
                    post.body.toLowerCase().includes(searchTerm) ||
                    creatorName.includes(searchTerm)
                );
            });
            setFilteredPosts(filtered);

        } else {
            setFilteredPosts(allPosts);
        }
    }, [title, allPosts, users]);

    const getData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setAllPosts(data);
        setFilteredPosts(data);
    };

    const getUser = async () => {
        const userData = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(userData.data);
    };

    return (
        <div className="outer-home">
            <Navbar />
            <div className="inner">
                <div className="searach-sec">
                    <input type="text" placeholder="Search ..." value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>

                {filteredPosts.length > 0 ? (
                    filteredPosts.map((ele) => {
                        const creator = users.find((u) => u.id === ele.userId);
                        return (
                            <div className="card" key={ele.id}>
                                <h1>{ele.title.slice(0, 40)}...</h1>
                                <p>{ele.body}</p>
                                <h3>
                                    Created by: {creator ? creator.name : "Unknown"}
                                </h3>
                                {}
                                <Link to={`/home/${ele.id}`}>View details</Link>
                            </div>
                        );
                    })
                ) : (
                    <h1>Post not Found</h1>
                )}
            </div>
        </div>
    );
};

export default Homepage;
