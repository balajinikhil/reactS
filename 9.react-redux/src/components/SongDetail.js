import React from 'react'
import {connect} from 'react-redux'


const SongDetail =(props)=>{

    console.log(props);

    if(!props.song){
        return <h3>Select A Song</h3>
    }

    return(
        <div>
            <h3>{props.song.title}</h3>
            <p>{props.song.duration}</p>
        </div>
    )
}


const mapStateToProps = (state)=>{
    return {
        song:state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail)