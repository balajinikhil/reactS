import {combineReducers} from 'redux'


const songListReducer = ()=>{
    return [
        {title:'track1', duration:'2:15'},
        {title:'track2', duration:'4:15'}
    ]
}

const selectedSongReducer = (selectedSong = null, action)=>{
    if(action.type === 'SELECT_A_SONG'){
        return action.payload
    }

    return selectedSong
}



export default combineReducers({
    songs:songListReducer,
    selectedSong:selectedSongReducer
})