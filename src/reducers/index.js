const reducer = (state, action) => {
    switch (action.type) {
        case 'START_ANIMATION':
            return {
                ...state,
                startAnimation: action.payload
            }
        default:
        return state
    }
}

export default reducer
