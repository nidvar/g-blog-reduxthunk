import React from 'react';
import {connect} from 'react-redux';
import {grab_posts} from '../actions/actions';
import UserHeader from './UserHeader';

class PostList extends React.Component{
    componentDidMount(){
        this.props.grab_posts()
    }

    display_list = ()=>{
        return this.props.posts.map(a=>{
            return (
                <div key={Math.random()}>
                    <h3>{a.title} - (user: {a.userId})</h3>
                    <p>{a.body}</p>
                    <UserHeader userId={a.userId}/>
                </div>
            )
        })
    }





    
    render(){
        return(
            <div>
                <h1>Post List</h1>
                {this.display_list()}       
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return state
}

export default connect(mapStateToProps, {grab_posts})(PostList)