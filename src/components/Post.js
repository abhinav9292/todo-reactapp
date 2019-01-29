import React, { Component } from 'react';
import Axios from 'axios';

class Post extends Component{
    state = {
        post : null
    }

    componentDidMount(){

        let id = this.props.match.params.post_id;
        console.log("id =", id)
        Axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
            .then( res => {
                this.setState({
                    post : res.data
                })
            })
    }
    render(){

        const post = this.state.post ? 
        (
            <div className="post">
                <h3 className="center">{this.state.post.title}</h3>
                <p>{this.state.post.body}</p>
            </div>
        ) 
        : (
            <div className="center">Loading ...</div>
        ) 

        return(
            <div className="container">
                <h1 className="center"> { post } </h1>
            </div>
        )
    }
}

export default Post;