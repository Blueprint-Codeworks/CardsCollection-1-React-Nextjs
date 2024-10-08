import React from "react";

const CustomCard = () => {
  return (
    <div className="card custom-card">
      <div className="custom-card-image">
        <img
          src="https://via.placeholder.com/200"
          alt="Custom"
          className="custom-card-image"
        />
      </div>
      <div className="custom-card-content">
        <h3 className="custom-card-difficulty-title">
          Dificultad:{" "}
          <span className="custom-card-difficulty-level">Difícil</span>
        </h3>
        <h2 className="custom-card-title">Título de la Card</h2>
        <p className="custom-card-description">
          Esta es una descripción más larga para la nueva card, que incluye
          información adicional sobre el contenido que se presenta aquí.
        </p>
        <div className="custom-card-button-container">
          <button className="custom-card-button">Acción</button>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
