import {combineReducers} from 'redux'


const FetchPostsReducer = (posts=[], action)=>{

    switch (action.type){

        case "FETCH_POSTS":
            return  action.payload
        
        default:
            return posts
    }

}

const FetchUsersReducers = (users = [], action)=>{
    switch(action.type){
        case 'FETCH_USERS':
            return users = [...users, action.payload]
        default :
            return users
    }
}


export default combineReducers({
    posts:FetchPostsReducer,
    users:FetchUsersReducers
})