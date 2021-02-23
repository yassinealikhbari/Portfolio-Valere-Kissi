import React from "react";

export interface IVideosProps {
  youtubeId: string;
}

export interface IVideosState { }

export class Videos extends React.Component<IVideosProps, IVideosState> {
  constructor(props: IVideosProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div>
        <h1>VIDEOS</h1>
      </div>
    );
  };
}