import { FETCH_POSTS, NEW_POSTS, DELETE_POSTS } from '../actions/types'

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POSTS:
            return {
                ...state,
                item: action.payload
            }
        case DELETE_POSTS:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload.article._id)
            }
        default:
            return state;
    }
}