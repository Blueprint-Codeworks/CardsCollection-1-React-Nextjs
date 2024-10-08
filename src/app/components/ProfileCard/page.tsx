// ProfileCard.js
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const ProfileCard = () => {
    return (
        <div className="profile-card">
            <div className="profile-card-image">
                <img
                    src="https://via.placeholder.com/300x150" // Imagen principal
                    alt="Imagen de la Card"
                />
                <div className="profile-card-user-image">
                    <img
                        src="https://via.placeholder.com/80" // Imagen de usuario
                        alt="Usuario"
                    />
                </div>
            </div>
            <h2 className="profile-card-title">Nombre del Usuario</h2>
            <p className="profile-card-description">
                Esta es una breve descripción del usuario. Aquí puedes incluir información relevante sobre su perfil.
            </p>
            <div className="profile-card-buttons">
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

export default ProfileCard;
