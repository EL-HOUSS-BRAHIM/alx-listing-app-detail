import React from 'react';

interface PillProps {
  label: string;
  onClick?: () => void;
  selected?: boolean;
}

export const Pill: React.FC<PillProps> = ({ label, onClick, selected = false }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 rounded-full border transition 
        ${selected ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-100 text-gray-700 border-gray-300'}
        hover:bg-blue-600 hover:text-white`}
    >
      {label}
    </button>
  );
};
