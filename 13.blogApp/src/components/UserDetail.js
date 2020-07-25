import React from 'react'
import {connect} from 'react-redux'
import {fetchUser} from './../actions'

class UserDetail extends React.Component{

    componentDidMount(){    

        this.props.fetchUser(this.props.userId)



    }
    renderList(){
        return this.props.users.map((e)=>{
           return e.id === this.props.userId ? e.name : ''
        })
    }


    render(){

 
        return(
            <div>
                {this.renderList()}
            </div>
        )
    }
}

const mapStatToProps = (state)=>{
   return {users:state.users}
}

export default connect(mapStatToProps, {
    fetchUser
})(UserDetail)