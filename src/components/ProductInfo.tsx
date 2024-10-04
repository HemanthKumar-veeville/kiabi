import React, { useState } from 'react';
import ColorSelection from './ColorSelection';
import SizeSelection from './SizeSelection';
import AddToCartButton from './AddToCartButton';
import { StarIcon } from '@heroicons/react/24/outline';

const ProductInfo: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState('Gris clair');
  const [selectedSize, setSelectedSize] = useState('');

  const handleColorChange = (color: string) => setSelectedColor(color);
  const handleSizeChange = (size: string) => setSelectedSize(size);

  return (
    <div className="lg:w-1/2 lg:pl-8">
      <h1 className="text-2xl font-bold text-blue-900 mb-2">
        Veste sans manches en jean - {selectedColor}
      </h1>
      <div className="flex items-center mb-4">
        <StarIcon className="h-5 w-5 text-yellow-500" />
        <span className="ml-1 text-blue-900">4.6/5</span>
        <span className="ml-2 text-gray-600">(11 avis)</span>
      </div>
      <p className="text-3xl font-bold text-blue-900 mb-4">15,00 €</p>
      <p className="text-gray-600 mb-4">
        Cette pièce intemporelle est l'alliée idéale pour créer des tenues casual chic, tout en restant à l'aise.
      </p>
      <a href="#" className="text-blue-900 underline mb-4 block">Voir la description</a>
      
      {/* Color Selection */}
      <ColorSelection
        colors={['Gris clair', 'Noir', 'Rose', 'Vert']}
        selectedColor={selectedColor}
        onColorSelect={handleColorChange}
      />

      {/* Size Selection */}
      <SizeSelection
        selectedSize={selectedSize}
        onSizeSelect={handleSizeChange}
      />

      {/* Add to Cart Button */}
      <AddToCartButton price="15,00 €" />

      <div className="mt-4">
        <p className="text-gray-600 text-sm">Payez en <span className="font-semibold">3x Oney</span> dès 100 €.</p>
      </div>
    </div>
  );
};

export default ProductInfo;
