import React from 'react';
import {connect} from 'react-redux';

class UserHeader extends React.Component{
    render(){
        const x = this.props.users
        if(!x){
            return null
        }else{
            return(
                <div>
                    <h4>{x.name}</h4>
                </div>
            )
        }
        
    }
}

const mapStateToProps = (state, ownProps)=>{
    return {users: state.users.find(a=>a.id === ownProps.userId)}
}

export default connect(mapStateToProps)(UserHeader)