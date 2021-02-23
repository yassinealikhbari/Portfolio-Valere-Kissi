import React from "react";

export interface IPhotosProps { }

export interface IPhotosState { }

export class Photos extends React.Component<IPhotosProps, IPhotosState> {
  constructor(props: IPhotosProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div>
        <h1>PHOTOS</h1>
      </div>
    );
  };
}