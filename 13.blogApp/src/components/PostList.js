import React from 'react'
import {connect} from 'react-redux'

import {fetchPost} from './../actions/'
import UserDetail from './UserDetail'


class PostList extends React.Component{

    componentDidMount = async()=>{

        this.props.fetchPost();

    }

    renderList(){

        return this.props.posts.map((e)=>{
            return (
                <div className="ui relaxed divided list" key={e.id}>
                    <div className="ui segment item">
                        <i className="large react middle aligned icon"></i>
                        <div className="content">
                        <p className="header">{e.title}</p>
                        <div className="description">{e.body}</div>
                        <div className="header">
                            <UserDetail userId={e.userId}/>
                        </div>
                        </div>
                    </div>
                </div>
            )
        })

    }


    render(){
      
        

        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}


const mapStateToProp = (state)=>{

 return {   
     posts:  state.posts
 }
}

export default connect(mapStateToProp, {
    fetchPost
})(PostList)