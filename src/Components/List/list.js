import React, { Component } from 'react'
import './list.css';
import Playfunction from '../Playfunctions/playfunctions';

class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentSong: this.props.songDetails[0],
        }
        this.playlistRows = [];
    }

    componentDidMount() {
        this.playlistRows[0].className = 'active';
    }

    changeActive(item, ev) {
        this.setState({
            currentSong: item,
        });
        let activeElement = document.getElementsByClassName('active');
        activeElement[0].className = activeElement[0].className.replace(/active/g, '');
        ev.parentNode.className += 'active';
        
    }

    render() {
        const song = this.props.songDetails.map((item, index) => {
            const min = Math.floor(item.track.duration_in_ms/60000);
            const sec = Math.floor((item.track.duration_in_ms % 60000) / 1000).toFixed(0) < 10 ? `0${Math.floor((item.track.duration_in_ms % 60000) / 1000).toFixed(0)}` : Math.floor((item.track.duration_in_ms % 60000) / 1000).toFixed(0);
            const time = `${min}:${sec}`;
            return <tr onClick={(ev) => this.changeActive(item, ev.target)} key={item.track.title} ref={ref => this.playlistRows[index] = ref}>
             <td>{item.track.title}</td>
            <td>{item.track.artists}</td>
            <td>{item.track.album.title}</td>
            <td>{time}</td>
          </tr>
        });
        return (
            <div className="listContainer">
                <div className="tableContainer">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Artist</th>
                        <th scope="col">Album</th>
                        <th scope="col">Length  </th>
                    </tr>
                    </thead>
                    <tbody>
                    {song}
                    </tbody>
                </table>
                </div>
              <Playfunction songDetails={this.state.currentSong} />
            </div>
          )
    }
}

export default List;
