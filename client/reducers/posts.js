function posts( state = [], action) {
    if(action.type === 'INCREMENT_LIKES') {
            return [
                ...state.slice(0, action.index),
                {...state[action.index], likes: state[action.index].likes + 1},
                ...state.slice(action.index + 1),
            ]
    } else {
            return state;
    }
}

export default posts;