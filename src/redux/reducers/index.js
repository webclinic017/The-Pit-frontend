import {
    combineReducers
} from 'redux';
import usersReducer from './usersReducer';
import chatsReducer from './chatsReducer';

export default combineReducers({
    users: usersReducer,
    chats: chatsReducer
});