import React from "react";

const UserCard = () => {
  return (
    <div className="user-card">
      <div className="user-card-image">
        <img src="https://via.placeholder.com/100" alt="Usuario" />
      </div>
      <h2 className="user-card-title">Nombre del Usuario</h2>
      <h3 className="user-card-subtitle">Cargo del Usuario</h3>
      <hr className="divider" />
      <p className="user-card-description">
        Aquí va una descripción breve sobre el usuario. Este es un lugar ideal
        para compartir información relevante sobre su experiencia o habilidades.
      </p>
      <hr className="divider" />
      <button className="user-card-button">Saber Más</button>
    </div>
  );
};

export default UserCard;
