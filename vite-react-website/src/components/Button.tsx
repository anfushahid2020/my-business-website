import React from 'react';
import './Button.css'; // Assuming you have a separate CSS file for button styles

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  return (
    <button
      className={`button ${variant}`}
      onClick={onClick}
      style={{
        backgroundColor: variant === 'primary' ? '#D4AF37' : '#000000', // Gold for primary, black for secondary
        color: variant === 'primary' ? '#000000' : '#D4AF37', // Black text for primary, gold text for secondary
      }}
    >
      {label}
    </button>
  );
};

export default Button;