export default (state = [], action)=>{
    if(action.type === 'Trump'){
        return action.payload
    }
    return state
}