import { useState } from 'react';

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  disabled = false, 
  style = {}, 
  type = 'button' 
}) {
  const [isHovered, setIsHovered] = useState(false);

  const getButtonStyles = () => {
    const baseStyles = {
      padding: '0.75rem 1.5rem',
      border: 'none',
      borderRadius: '6px',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s ease',
      outline: 'none',
      opacity: disabled ? 0.6 : 1,
      ...style
    };

    const variantStyles = {
      primary: {
        backgroundColor: isHovered ? 'var(--blue-dark)' : 'var(--blue-primary)',
        color: 'white'
      },
      secondary: {
        backgroundColor: isHovered ? '#d1d5db' : 'var(--border-light)',
        color: 'var(--text-primary)'
      },
      danger: {
        backgroundColor: isHovered ? '#dc2626' : '#ef4444',
        color: 'white'
      }
    };

    return { ...baseStyles, ...variantStyles[variant] };
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={getButtonStyles()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
}
