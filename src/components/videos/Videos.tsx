import React from "react";
import "./Videos.css";
import { Link } from "react-router-dom";

export interface IVideosProps {
  youtubeId: string;
}

export interface IVideosState {}

export class Videos extends React.Component<IVideosProps, IVideosState> {
  constructor(props: IVideosProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div>
        <div className="videos-container">
          <Link className="videos-item" to="player?videoId=Tml5U-zWpxw">
            <img
              src={require("./../../assets/images/videos/video8.png")?.default}
            />
          </Link>

          <Link className="videos-item" to="player?videoId=JDZHce56XjI">
            <img
              src={require("./../../assets/images/videos/video2.png")?.default}
            />
          </Link>

          <Link className="videos-item" to="player?videoId=9xB3hoqZrW4">
            <img
              src={require("./../../assets/images/videos/video7.png")?.default}
            />
          </Link>

          <Link className="videos-item" to="player?videoId=ExhtsEZgFXI">
            <img
              src={require("./../../assets/images/videos/video3.png")?.default}
            />
          </Link>

          <Link className="videos-item" to="player?videoId=byb0UmGsZN8">
            <img
              src={require("./../../assets/images/videos/video9.png")?.default}
            />
          </Link>

          <Link className="videos-item" to="player?videoId=gAHgjcxVxXM">
            <img
              src={require("./../../assets/images/videos/video6.png")?.default}
            />
          </Link>

          <Link className="videos-item" to="player?videoId=3AUPVK9KeJc">
            <img
              src={require("./../../assets/images/videos/video4.png")?.default}
            />
          </Link>

          <Link className="videos-item" to="player?videoId=Tukjxfl9JCU">
            <img
              src={require("./../../assets/images/videos/video1.png")?.default}
            />
          </Link>

          <Link className="videos-item" to="player?videoId=dfbzq54B_og">
            <img
              src={require("./../../assets/images/videos/video5.png")?.default}
            />
          </Link>
        </div>
      </div>
    );
  }

  private openVideoPlayer = (videoId: string) => {};
}
