import React from 'react';
import './VideoPlayer.css'

const VideoPlayer = (props) => {
  return (
    <div class="video-container">
      <iframe class="custom-iframe"
        src={`https://www.youtube.com/embed/${props.youtubeId}?&hd=1&wmode=transparent&autoplay=1&mute=1&theme=dark&controls=1&autohide=1&loop=0&showinfo=0&rel=0&playlist=false&enablejsapi=0`}
        frameBorder="0"
        allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
    </div>
  );
};

export default VideoPlayer;