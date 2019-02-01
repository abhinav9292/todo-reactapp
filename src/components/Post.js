import React, { Component } from 'react';
import { connect } from "react-redux";

class Post extends Component {

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/')
    }

    render() {
        console.log("this is the props", this.props)
        const post = this.props.post ?
            (
                <div className="post">
                    <h3 className="center">{this.props.post.title}</h3>
                    <p>{this.props.post.body}</p>
                    <div className="right">
                        <button className="btn red" onClick = {this.handleClick}>Delete Post</button>
                    </div>
                </div>
            )
            : (
                <div className="center">Loading ...</div>
            )

        return (
            <div className="container mb-4">
                <h1 className="center"> {post} </h1>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id == id)
    }
}

const mapDsiapatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch({ type: "DELETE_POST", id: id }) }
    }
}

export default connect(mapStateToProps, mapDsiapatchToProps)(Post);