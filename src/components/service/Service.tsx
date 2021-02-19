import React, { Component } from "react";
import './Service.css';
import Gallery from "react-photo-gallery";
import Valere from "./../../assets/images/services/IMG_4433.jpg"
import { Photos } from "./equipment";
import Lightbox from 'react-image-lightbox';
// import Lightbox from '@boomfly/react-lightbox-component';
import 'react-image-lightbox/style.css';

export interface IServiceProps {
}

export interface IServiceState {
  currentImage: number;
  lightboxIsOpen: Boolean;
}

export class Service extends Component<IServiceProps, IServiceState> {
  private services: string[] = ["Director of Photography", "Camera Operator", "Photographer", "Editor - Colorist"];

  constructor(props: IServiceProps) {
    super(props);

    this.state = {
      currentImage: 0,
      lightboxIsOpen: false
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);


    //List services images

  }
  //List of services


  openLightbox = (event: any, obj: any) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage === 0 ? this.state.currentImage - 1 : 3
    }, this.forceUpdate);
  }

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage === 3 ? 0 : this.state.currentImage + 1
    }, this.forceUpdate);
  }

  public render(): React.ReactElement<IServiceProps> {
    console.log("Valere", Valere);
    return (
      <div>
        <div className="service-container">
          <div className="service-imge">
            <img src={Valere} alt="Valere Kissi"></img>
          </div>
          <div className="service-info">
            <h3>SERVICES</h3>
            <div className="service-list">
              {this.services.map(service => {
                return (<span key={service}><p>{service}</p><br /></span>)
              })}
            </div>
          </div>
        </div>
        <div className="service-footer">
          Contact for rates and more info.
        </div>
        <div className="service-container equipment">
          <div>
            <Gallery photos={Photos} onClick={this.openLightbox} />
            {this.state.lightboxIsOpen && <Lightbox
              onCloseRequest={this.closeLightbox}
              onMovePrevRequest={this.gotoPrevious}
              onMoveNextRequest={this.gotoNext}
              mainSrc={Photos[this.state.currentImage].src}
              nextSrc={Photos[this.state.currentImage].src}
              prevSrc={Photos[this.state.currentImage].src}
            />}
          </div>
        </div>
      </div >
    );
  }
}