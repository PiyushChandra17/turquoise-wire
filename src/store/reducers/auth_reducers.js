const INITIAL_STATE = {
    user: [],
    isAuth: false,
    error: null
}

export default function(state=INITIAL_STATE,action) {
    switch(action.type){
        case 'AUTH_USER':
            return {
                ...state,
                ...action.payload
            }
        case 'LOGOUT_USER':
            return { ...state, user: [], isAuth: false }

        case 'CLEAR_AUTH_ERROR':
            return {
                ...state,
                error: null
            }
        case 'UPD_USER_DATA':
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}