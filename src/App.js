import React, { Component } from 'react';
import './index.css';
import Playlist from '../src/Components/Playlist/playlist';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Playlist />
      </div>
    );
  }
};

export default App;
