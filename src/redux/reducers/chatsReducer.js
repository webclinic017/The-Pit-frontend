import {
    CREATE_ROOM_SUCCESS,
    JOIN_ROOM_SUCCESS,
    SET_USERNAME
} from '../actions/types';

const initialState = {
    room: null,
    rooms: [],
    chatLog: [],
    username: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_ROOM_SUCCESS:
            return {
                ...state.room = action.payload
            };
        case JOIN_ROOM_SUCCESS:
            return {
                ...state.room = action.payload
            };
        case SET_USERNAME:
            return {
                ...state.username = action.username
            };

        default:
            return state;
    }
}