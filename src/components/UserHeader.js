import React from 'react';
import {connect} from 'react-redux';
import {grab_users} from '../actions/actions';

class UserHeader extends React.Component{
    componentDidMount(){
        // this.props.grab_users()
    }

    display=()=>{
        if(this.props.x !== undefined){
            return (
                <h5>{this.props.x.name}</h5>
            )
        }else{
            return null
        }
    }
    render(){        
        return(
            <div style={{backgroundColor:'wheat'}}>
                <h5>telli</h5>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return state
}

export default connect(mapStateToProps, {grab_users:grab_users})(UserHeader);