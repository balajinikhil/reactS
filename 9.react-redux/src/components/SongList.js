import React from 'react'
import {connect} from 'react-redux'

import {selectSong} from './../actions/index'

class SongList extends React.Component{

    renderList(){
        return this.props.songs.map((e,i)=>{
            return (
                <div key={i}>
                    <h3>{e.title}</h3>
                    <p>{e.duration}</p>
                    <button onClick={()=>this.props.selectSong(e)}>Select</button>
                </div>
            )
        })
    }

    render(){
        return(
        <div>{this.renderList()}</div>
                       
        )
    }
}

const mapStateToProp = state =>{
    return{
        songs:state.songs
    }
}

export default connect(mapStateToProp, {selectSong})(SongList)