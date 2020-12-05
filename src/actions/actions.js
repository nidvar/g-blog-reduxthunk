import jsonplaceholder from '../apis/jsonplaceholder';



const grab_posts = ()=>{
    return async (dispatch, getState)=>{

        const response = await jsonplaceholder.get('/posts');
    
        dispatch({type:'Trump', payload: response})
    
    }
}

export default grab_posts