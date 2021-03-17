import React from "react";
import { VideoPlayer } from "../videoplayer/VideoPlayer";
import "./Player.css";
import { Link } from "react-router-dom";

export interface IPlayerProps {}

export interface IPlayerState {}

export class Player extends React.Component<IPlayerProps, IPlayerState> {
  private VideoId: string;
  constructor(props: IPlayerProps) {
    super(props);
    this.state = {};

    const urlParams = new URLSearchParams(window.location.search);
    this.VideoId = urlParams.get("videoId") ?? "I7H17HDu8Ic";
  }

  public render() {
    return (
      <div className="vk-flex-container">
        <div className="player-container">
          {/* <h3 id="showreel-subtitle">SHOWREEL</h3> */}
          <VideoPlayer youtubeId={this.VideoId}></VideoPlayer>
          <Link className="back-to-videos" to="videos">
            <div>
              <i className="fa fa-arrow-left"></i>
              <span> BACK TO ALL VIDEOS</span>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
