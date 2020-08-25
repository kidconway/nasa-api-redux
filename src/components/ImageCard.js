import React, { Fragment } from "react";

const ImageCard = ({ img }) => {
  return (
    <Fragment>
      <div className="card">
        <div className="image">
          <img src={img.img_src} alt="rover" />
        </div>
        <div className="content">
          <div className="header">{img.rover.name}</div>
          <div className="meta">
            <span>{img.camera.full_name}</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ImageCard;
