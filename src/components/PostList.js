import React from 'react';
import {connect} from 'react-redux'
import grab_posts from '../actions/actions'

class PostList extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.grab_posts()
        console.log(this.props)
    }
    render(){
        return(
            <div>
                <h1>Post List</h1>
            </div>
        )
    }
}

export default connect(null, {grab_posts})(PostList)