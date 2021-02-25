import React from 'react';
import './VideoPlayer.css'

export interface IVideoPlayerProps {
  youtubeId: string;
 }

export interface IVideoPlayerState { }

export class VideoPlayer extends React.Component<IVideoPlayerProps, IVideoPlayerState> {
  constructor(props: IVideoPlayerProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div className="responsive-container">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe title={`www.youtube.com/${this.props.youtubeId}`} className="custom-iframes"
            src={`https://www.youtube.com/embed/${this.props.youtubeId}?wmode=transparent&autoplay=1&mute=1&theme=dark&controls=1&autohide=1&loop=1&showinfo=0&enablejsapi=0&rel=0&vq=hd1440`}
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
        </div>
      </div>
    );
  };
}