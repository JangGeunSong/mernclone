import { FETCH_POSTS, NEW_POSTS, DELETE_POSTS } from '../actions/types'

export const fetchPosts = () => dispatch => {
    fetch("http://localhost:5500/api/articles")
        .then(response => response.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))
        .catch(err => console.log(err))
}

export const createPost = postData => dispatch => {
    fetch("http://localhost:5500/api/articles", {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(response => response.json())
        .then(post => {
            dispatch({
                type: NEW_POSTS,
                payload: post
            })
        })
        .catch(err => console.log(err))
}

export const deletePost = deleteDataID => dispatch => {
    fetch("http://localhost:5500/api/articles/" + deleteDataID, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({id: deleteDataID})
    })
        .then(response => response.json())
        .then(post => {
            dispatch({
                type: DELETE_POSTS,
                payload: post
            })
        })
        .catch(err => console.log(err))
    
}