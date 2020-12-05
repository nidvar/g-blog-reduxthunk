import {combineReducers} from 'redux';
import PostReducer from './PostReducer';

const a_state = (state = 'Trump loses', action)=>{
    if(action.type === 'Trump'){
        return state
    }else{
        return state
    }
}

const Reducers = combineReducers({a_state: a_state})

export default Reducers