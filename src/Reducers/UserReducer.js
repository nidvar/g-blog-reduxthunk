export default (state = [], action)=>{
    if(action.type==='GRAB_USERS'){
        return [...state, action.payload]
    }
    return state
}