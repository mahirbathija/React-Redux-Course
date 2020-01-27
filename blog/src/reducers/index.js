import {combineReducers} from 'redux';

import usersReducer from './usersReducer';
import postsReducer from './postsReducer';

//  this is the state 
export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});