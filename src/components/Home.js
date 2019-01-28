import React, { Component } from 'react';
import Axios from 'axios';


class Home extends Component{

    state = {
        posts : []
    }
    
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log("the response is ", res)
                this.setState({
                    posts : res.data.slice(0,20)
                })
            })
    }

    render(){

        const { posts } = this.state;
        const postList =  posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key = {post.id}>
                        <div className="card-content">
                            <div className="card-title orange-text">
                                {post.title}
                            </div>
                            <p> {post.body} </p>
                        </div>
                    </div>
                )
            })
        ) 
        : ( <p>There are no posts yet! come back later</p> )


        return(
            <div className="container">
                <h1 className="center">Home</h1>
                <div> { postList } </div>
            </div>
        )
        
    }
}

export default Home;