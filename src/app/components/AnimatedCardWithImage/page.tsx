import React from "react";

const CardWithImage = () => {
  return (
    <div className="card card-image-bordered">
      <img
        src="https://via.placeholder.com/400"
        alt="Card with image"
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-title">Card With Image</h2>
        <p className="card-description">
          This is a description for a card that includes an image.
        </p>
      </div>
    </div>
  );
};

export default CardWithImage;
