import React from 'react';
import { Button } from '../components/ui/Button';

interface ColorSelectionProps {
  colors: string[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

const ColorSelection: React.FC<ColorSelectionProps> = ({ colors, selectedColor, onColorSelect }) => {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-lg text-blue-900 mb-2">Couleur disponible</h3>
      <div className="flex space-x-4">
        {colors.map((color) => (
          <Button
            key={color}
            onClick={() => onColorSelect(color)}
            variant={selectedColor === color ? 'solid' : 'outline'}
          >
            {color}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelection;
