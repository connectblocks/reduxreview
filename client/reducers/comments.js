function postComments( state = [], action) {
    if(action.type === 'ADD_COMMENT') {
        return [
            ...state,{
                user: action.author,
                text: action.comments
            }
        ]
    } else if (action.type === 'REMOVE_COMMENT') {
        return [
            ...state.slice(0, action.i),
            ...state.slice(action.i + 1)
        ]
    } else {
        return state;
    }
}

function comments( state = [], action) {
    if(typeof action.postId !== 'undefined') {
        return {
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments;