import {
    CURRENT_USER,
    SIGN_UP,
    FETCH_USER_BY_TOKEN,
    PATCH_CURRENT_USER
} from '../actions/types'

const initialState = {
    user: {
        id: null
    }
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CURRENT_USER:
            return {
                ...state, user: action.payload
            };
        case FETCH_USER_BY_TOKEN:
            return {
                ...state, user: action.payload
            };
        case SIGN_UP:
            return {
                ...state, user: action.payload
            };
        case PATCH_CURRENT_USER:
            return {
                ...state, user: action.payload
            }
            default:
                return state;
    }
}