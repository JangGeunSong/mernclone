import { FETCH_POSTS, NEW_POSTS } from '../actions/types'

export const fetchPosts = () => dispatch => {
    console.log("Fetching...")
    fetch("http://localhost:5500/api/articles")
        .then(response => response.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))
        .catch(err => console.log(err))
}

export const createPost = postData => dispatch => {
    console.log("Posting to the server")

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
}