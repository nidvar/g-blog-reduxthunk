import _ from 'lodash';
import jsonplaceholder from '../apis/jsonplaceholder';

const grab_posts = ()=>{
    return async (dispatch, getState)=>{
        const response = await jsonplaceholder.get('/posts');
        dispatch({type:'Trump', payload: response.data})
    }
}

const grab_users = ()=>{
    return async (dispatch, getState)=>{
        const response = await jsonplaceholder.get('/users');
        dispatch({type:'GRAB_USERS', payload: response.data})
    }
}

export {grab_posts, grab_users}