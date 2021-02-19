import React, { Component } from "react";
import './Service.css';
import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";

export interface IServiceProps {

}

export interface IServiceState {
  currentImage: number;
  lightboxIsOpen: Boolean;
}

export class Service extends Component<IServiceProps, IServiceState> {
  private services: string[] = ["Director of Photography", "Camera Operator", "Photographer", "Editor - Colorist"];
  private photos: any[] =
    [{
      src: "./../../assets/images/services/IMG_4468.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "./../../assets/images/services/IMG_4470.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "../../assets/images/services/IMG_4471.jpg",
      width: 4,
      height: 3
    },
    {
      src: "../../assets/images/services/IMG_4472.jpg",
      width: 4,
      height: 3
    }];
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
    console.log("open");
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
      currentImage: this.state.currentImage - 1
    });
  }

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  public render(): React.ReactElement<IServiceProps> {
    return (
      <div>
        <div className="service-container">
          <div className="service-imge">
            <img src={'./../../assets/images/services/IMG_4433.jpg'} alt="Valere Kissi"></img>
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
        <div className="service-container">
          <div>
            <Gallery photos={this.photos} onClick={this.openLightbox} />
            {/* <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway> */}
          </div>
        </div>
      </div >
    );
  }
}