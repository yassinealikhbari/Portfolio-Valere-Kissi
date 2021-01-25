import React from "react";
import './Service.css'
import valere from './../../assets/images/me2.jpeg'

const Service = () => {
  //List of services
  var services = ["Director of Photography", "Camera Operator", "Photographer", "Editor - Colorist"];
  return (
    <div>
      <div class="service-container">
        <div class="service-imge">
          <img src={valere} alt="Valere Kissi"></img>
        </div>
        <div class="service-info">
          <h3>SERVICES</h3>
          <div class="service-list">
            {services.map(service => {
              return (<span><p>{service}</p><br /></span>)
            })}
          </div>
        </div>
      </div>
      <div class="service-footer">
        Contact for rates and more info.
      </div>
    </div>
  );
};

export default Service;