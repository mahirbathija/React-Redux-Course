import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
}

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
        type: 'FETCH_POST', payload: response.data
    });
}

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder('/users/'+id);
    dispatch({
        type: 'FETCH_USER', payload: response.data
    });
}

// MEMOIZE METHOD

// export const fetchUser = id => async dispatch => {
//     _fetchUser(id, dispatch);
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder('/users/'+id);
//     dispatch({
//         type: 'FETCH_USER', payload: response.data
//     });
// });