// SocialCard.js
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialCard = () => {
  return (
    <div className="social-card">
      <div className="social-card-image">
        <img
          src="https://via.placeholder.com/300x150"
          alt="Imagen de la Card"
        />
      </div>
      <h2 className="social-card-title">Título de la Card</h2>
      <h3 className="social-card-subtitle">Subtítulo de la Card</h3>
      <p className="social-card-description">
        Esta es una breve descripción del contenido de la card. Aquí puedes
        incluir información relevante sobre el tema.
      </p>
      <div className="social-card-buttons">
        <button className="social-button facebook">
          <FaFacebookF size={24} />
        </button>
        <button className="social-button instagram">
          <FaInstagram size={24} />
        </button>
        <button className="social-button twitter">
          <FaTwitter size={24} />
        </button>
      </div>
    </div>
  );
};

export default SocialCard;
