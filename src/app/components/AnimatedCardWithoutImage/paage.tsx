import React from "react";

const CardWithoutImage = () => {
  return (
<div className="card card-no-image">
  <div className="card-content">
    <h2 className="card-title">Card Without Image</h2>
    <p className="card-description">
    This is a description for a card without an image. Here, we provide additional information that highlights the features and benefits of the content being presented. This card serves as a brief introduction to a more comprehensive topic, inviting users to engage further and explore more in-depth details. Whether you're looking for insights, tools, or resources, this card aims to capture your interest and encourage interaction.
    </p>
  </div>
  <div className="chip-container">
    <span className="chip">Category 1</span>
    <span className="chip">Category 2</span>
    <span className="chip">Category 3</span>
  </div>
  <div className="button-group">
    <button className="card-button">Action 1</button>
    <button className="card-button">Action 2</button>
  </div>
</div>
  );
};

export default CardWithoutImage;
