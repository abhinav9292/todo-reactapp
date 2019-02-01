
const initState = {
    posts : [
        {id:1, title:"eat food", body:'lorem20'},
        {id:2, title:"drink water", body:'lorem50'},
        {id:3, title:"study hard", body:'lorem40'},
    ]
}

const rootReducer = ( state = initState, action ) => {
    console.log(action);
    if(action.type == 'DELETE_POST'){
        let newPosts = state.posts.filter( post => action.id != post.id);
        return{
                ...state,
                posts: newPosts
        } 
    }
    return state;
}

export default rootReducer;