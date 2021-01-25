import React from 'react';
import './VideoPlayer.css'

const VideoPlayer = (props) => {
  return (
    <div class="responsive-container">
      <div class="embed-responsive embed-responsive-21by9">
        <iframe class="custom-iframes"
          src={`https://www.youtube.com/embed/${props.youtubeId}?wmode=transparent&autoplay=1&mute=1&theme=dark&controls=1&autohide=1&loop=1&showinfo=0&playlist=false&enablejsapi=0&rel=0&vq=hd1440`}
          frameBorder="0"
          allowfullscreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
      </div>
    </div>

  );
};

export default VideoPlayer;