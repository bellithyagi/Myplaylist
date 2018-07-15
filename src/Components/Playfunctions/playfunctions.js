import React from 'react'
import './playfunctions.css';
import next from '../../icons/next.svg';
import play from '../../icons/play.svg';
import previous from '../../icons/previous.svg';

const Playfunction = (props) => {
  return (
    <div className="media">
      <img className="coverImage" src={props.songDetails.track.album.cover_image} alt="Album" />
      <div className="media-body">
        <div className="d-flex flex-row">
          <div className="headingSection text-left">
            <h4>{props.songDetails.track.title}</h4>
            <h6>{props.songDetails.track.album.title}</h6>
          </div>
          <div className="playOptions">
              <img src={previous} alt="Previous button" />
              <img src={play} alt="Play button" />
              <img src={next} alt="Next button" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Playfunction;
