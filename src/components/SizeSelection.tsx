import React from 'react';
import { 
  Select, 
  SelectTrigger, 
  SelectContent, 
  SelectItem 
} from '../components/ui/select'; // Import ShadCN components
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

interface SizeSelectionProps {
  selectedSize: string;
  onSizeSelect: (size: string) => void;
}

const SizeSelection: React.FC<SizeSelectionProps> = ({ selectedSize, onSizeSelect }) => {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-lg text-blue-900 mb-2">Choisir une taille</h3>

      {/* ShadCN Select Component */}
      <Select value={selectedSize} onValueChange={onSizeSelect}>
        <SelectTrigger className="w-full">
          <span>{selectedSize || "Sélectionner une taille"}</span>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="S">S</SelectItem>
          <SelectItem value="M">M</SelectItem>
          <SelectItem value="L">L</SelectItem>
        </SelectContent>
      </Select>

      {/* Guide des tailles and Trouver ma taille links */}
      <div className="flex space-x-4 mt-2">
        <a href="#" className="flex items-center text-blue-900 underline">
          <ArrowLongRightIcon className="h-4 w-4 mr-1" /> Guide des tailles
        </a>
        <a href="#" className="text-blue-900 underline">Trouver ma taille</a>
      </div>
    </div>
  );
};

export default SizeSelection;
