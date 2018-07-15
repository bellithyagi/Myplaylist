import React, { Component } from 'react';
import List from '../List/list';
import data from '../../playlist.json';
import './playlist.css';

class Playlist extends Component {
  constructor() {
    super();
    this.state = {
      songDetails: data,
    }
  }

  render() {
    return(
      <div className="playlistContainer">
      <h3>My Playlist</h3>
        <List songDetails={this.state.songDetails} />
      </div>
    )
  }
}

export default Playlist;
