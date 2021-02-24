import React from "react";
import Gallery from "react-photo-gallery";
import Lightbox from 'react-image-lightbox';
import { Pics } from "./works";
import 'react-image-lightbox/style.css';
import './Photos.css';

export interface IPhotosProps { }

export interface IPhotosState {
  currentImage: number;
  lightboxIsOpen: Boolean;
}

export class Photos extends React.Component<IPhotosProps, IPhotosState> {
  constructor(props: IPhotosProps) {
    super(props);
    this.state = {
      currentImage: 0,
      lightboxIsOpen: false
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  public render() {
    return (
      <div>
        <h3 id="photos-subtitle">Photos</h3>
        <div className="photos-container">
          <Gallery photos={Pics} onClick={this.openLightbox} />
          {this.state.lightboxIsOpen && <Lightbox
            onCloseRequest={this.closeLightbox}
            onMovePrevRequest={this.gotoPrevious}
            onMoveNextRequest={this.gotoNext}
            mainSrc={Pics[this.state.currentImage].src}
            nextSrc={Pics[this.state.currentImage].src}
            prevSrc={Pics[this.state.currentImage].src}
          />}
        </div>
      </div>
    );
  };

  /**
   * componentDidMount
   */
  public componentDidMount() {
    Pics.map(photo => {
      photo.loading = "lazy";
      return photo;
    });
  }

  private openLightbox = (event: any, obj: any) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }

  private closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }

  private gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage === 0 ? 45 : this.state.currentImage - 1
    }, this.forceUpdate);
  }

  private gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage === 45 ? 0 : this.state.currentImage + 1
    }, this.forceUpdate);
  }
}