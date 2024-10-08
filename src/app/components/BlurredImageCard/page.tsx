// BlurredImageCard.js
import React from "react";

const BlurredImageCard = () => {
  return (
    <div className="blurred-image-card">
      <img
        src="https://via.placeholder.com/400x300" // Imagen de fondo (puedes cambiar la URL)
        alt="Imagen de Fondo"
        className="bg-image"
      />
      <div className="overlay">
        <h2 className="overlay-title">Título de la Card</h2>
        <p className="overlay-description">
          Esta es una breve descripción que aparece sobre la imagen.
        </p>
      </div>
    </div>
  );
};

export default BlurredImageCard;
