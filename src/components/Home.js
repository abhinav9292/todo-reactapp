import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserImg from '../user.png';
import { connect } from "react-redux";

class Home extends Component {

    render() {
        const { posts } = this.props;
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
const mapStateToProps = (state) => {
    return {
        posts : state.posts
    }

}

export default connect(mapStateToProps)(Home);