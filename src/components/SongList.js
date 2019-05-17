import React, {Component} from 'react';
import {connect} from 'react-redux';

//import the action creator from actions/index.js
import {selectSong} from '../actions';

class SongList extends Component{

  renderList(){
    return this.props.songs.map((song)=> {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <div>{/* Add and onClick event handler. When onClick is invoked call selectSong with the song that is in a particular element of the SongList */}</div>
            <button
              className="ui button primary"
              onClick={()=> this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render(){
    return <div className="ui divided list">{this.renderList()}</div>;
  }
};

// Any time redux state is changed, mapStateToProps is called with the new state object
const mapStateToProps = (state) => {
  return {songs:state.songs};
}

export default connect(mapStateToProps,{
  // value selectSong refers to the selectSong from the import statement
  // takes the select song action creator and passes into our SongList component as a prop
  selectSong:selectSong
})(SongList);
