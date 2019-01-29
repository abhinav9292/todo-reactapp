import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import UserImg from '../user.png';


class Home extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log("the response is ", res)
                this.setState({
                    posts: res.data.slice(0, 20)
                })
            })
    }

    render() {

        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                    <img src={ UserImg } alt="User Image"/>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span>{ post.id }</span>
                                <span className="card-title">
                                    {post.title}
                                </span>
                            </Link>
                            <p> {post.body} </p>
                        </div>
                    </div>
                )
            })
        )
            : (<p>There are no posts yet! come back later</p>)


        return (
            <div className="container home">
                <h1 className="center">Home</h1>
                <div> {postList} </div>
            </div>
        )

    }
}

export default Home;