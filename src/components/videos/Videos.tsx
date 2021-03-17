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
              alt="Untitled - Shot on Blackmagic Pocket Cinema Camera 4K by Valere Kissi"
              src={require("./../../assets/images/videos/video8.png")?.default}
            />
          </Link>

          <Link className="videos-item" to="player?videoId=JDZHce56XjI">
            <img
              alt="Trevis Porter - FVCK LOVE (Prod. Eem Triplin x PRODBYKXVI) [Official Video] by Valere Kissi"
              src={require("./../../assets/images/videos/video2.png")?.default}
            />
          </Link>

          <Link className="videos-item" to="player?videoId=9xB3hoqZrW4">
            <img
              alt="The Break UP // Short film by Valere Kissi"
              src={require("./../../assets/images/videos/video7.png")?.default}
            />
          </Link>

          <Link className="videos-item" to="player?videoId=ExhtsEZgFXI">
            <img
              alt="AXEL MERRYL VIVIANE Parody Viviane by Prince Aime by Valere Kissi"
              src={require("./../../assets/images/videos/video3.png")?.default}
            />
          </Link>

          <Link className="videos-item" to="player?videoId=byb0UmGsZN8">
            <img
              alt="GINEVRA: BMPCC 4K - SIGMA 17-70mm FASHION VIDEO by Valere Kissi"
              src={require("./../../assets/images/videos/video9.png")?.default}
            />
          </Link>

          <Link className="videos-item" to="player?videoId=gAHgjcxVxXM">
            <img
              alt="CANON M50 100FPS B ROLL VIDEO by Valere Kissi"
              src={require("./../../assets/images/videos/video6.png")?.default}
            />
          </Link>

          <Link className="videos-item" to="player?videoId=3AUPVK9KeJc">
            <img
              alt="ERASMUS 2019/2020 Interview N°1 by Valere Kissi"
              src={require("./../../assets/images/videos/video4.png")?.default}
            />
          </Link>

          <Link className="videos-item" to="player?videoId=Tukjxfl9JCU">
            <img
              alt="Presentazione REHOBOTH ONLUS by Valere Kissi"
              src={require("./../../assets/images/videos/video1.png")?.default}
            />
          </Link>

          <Link className="videos-item" to="player?videoId=dfbzq54B_og">
            <img
              alt="Venezia - Carnevale 2019 - Venice Carnival 2019 - Carnaval de Venise 2019 by Valere Kissi"
              src={require("./../../assets/images/videos/video5.png")?.default}
            />
          </Link>
        </div>
      </div>
    );
  }
}
