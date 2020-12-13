import React from 'react';
import {connect} from 'react-redux';
import {grab_both} from '../actions/actions';
import UserHeader from './UserHeader';

class PostList extends React.Component{
    componentDidMount(){
        this.props.grab_both()
    }
    
    display_list = ()=>{
        return this.props.posts.map(a=>{
            return (
                <div key={Math.random()}>
                    <h3>{a.title}</h3>
                    <p>{a.body}</p>
                    <UserHeader userId={a.userId} />
                </div> 
            )
        })
    }
    render(){
        return(
            <div>
                {this.display_list()}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {posts: state.posts}
}

export default connect(mapStateToProps, {grab_both})(PostList)