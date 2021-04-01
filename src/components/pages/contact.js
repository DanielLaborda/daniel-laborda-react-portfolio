import React from "react";
import porfilePicture from "../../../static/assets/images/bio/Contact.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
  return (
    <div className = "content-page-wrapper" >
      <div className = "left-column" 
        style={{
          background:"url(" + porfilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      /> 
      <div className="right-column">
        <div className="contact-bullet-point">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone-alt" />
            </div>

            <div className="text">555-555-555</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="paper-plane" />
            </div>

            <div className="text">dlaborda@example.com</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>

            <div className="text">Zaragoza, Spain</div>
          </div>
        </div>
      </div> 
    </div>
  );
}