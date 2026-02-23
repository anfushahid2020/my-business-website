import React from 'react';
import './Card.css'; // Assuming you have a separate CSS file for Card styles

const Card = ({ title, content }) => {
    return (
        <div className="card" style={{ backgroundColor: '#000000', color: '#D4AF37' }}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default Card;