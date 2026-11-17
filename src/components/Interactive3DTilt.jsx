import React from 'react';

/**
 * Interactive3DTilt Component
 * Clean, stable container with subtle elegant elevation for formal academic documentation.
 */
export default function Interactive3DTilt({
  children,
  className = '',
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`transition-all duration-200 hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </div>
  );
}
