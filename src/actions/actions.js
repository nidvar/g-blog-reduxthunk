import _ from 'lodash';
import jsonplaceholder from '../apis/jsonplaceholder';

export const grab_both = ()=> {
    return async (dispatch, getState)=>{
        await dispatch(grab_posts())

        const userIds = _.uniq(_.map(getState().posts, 'userId'))
        userIds.forEach(a=> dispatch(grab_users(a)));
    }
}

export const grab_posts = ()=> async dispatch=>{
    const response = await jsonplaceholder.get('/posts');
    
    dispatch({type:'Trump', payload: response.data})
}

export const grab_users = (id)=>{
    return async (dispatch)=>{
        const response = await jsonplaceholder.get(`/users/${id}`);
    
        dispatch({type:'GRAB_USERS', payload: response.data})
    }
}

// export const grab_users = id=> async dispatch=>{
//     x(id, dispatch)
// }

// const x = _.memoize(async (id, dispatch)=>{
//     const response = await jsonplaceholder.get(`/users/${id}`);
    
//     dispatch({type:'GRAB_USERS', payload: response.data})
// })