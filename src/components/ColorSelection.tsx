import React from 'react';

interface Color {
  color: string;
  image: string;
}

interface ColorSelectionProps {
  colors: Color[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

const ColorSelection: React.FC<ColorSelectionProps> = ({ colors, selectedColor, onColorSelect }) => {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-lg text-blue-900 mb-2">Couleur disponible</h3>

      {/* Display Color Options as Images */}
      <div className="flex space-x-4">
        {colors.map(({ color, image }) => (
          <div
            key={color}
            onClick={() => onColorSelect(color)}
            className={`cursor-pointer border-2 rounded-lg p-1 ${
              selectedColor === color ? 'border-blue-900' : 'border-gray-300'
            }`}
          >
            <img
              src={image}
              alt={color}
              className="w-20 h-20 object-cover rounded-md"
            />
            <p
              className={`text-center mt-2 text-sm font-medium ${
                selectedColor === color ? 'text-blue-900' : 'text-gray-600'
              }`}
            >
              {color}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorSelection;
