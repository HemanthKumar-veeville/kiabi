import React from 'react';
import { ChevronLeftIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'; // Import necessary icons
import { Button } from "../components/ui/Button"; // Assuming this is the reusable button component

const CategoryAndFilters: React.FC = () => {
  return (
    <div className="container mx-auto flex justify-between items-center mt-24 px-4">
      {/* Left Category Section */}
      <div className="flex items-center space-x-2">
        <ChevronLeftIcon className="h-6 w-6 text-blue-900" strokeWidth={2.5} /> {/* Increased size and stroke width */}
        <span className="text-blue-900 font-semibold text-lg">Femme</span>
      </div>

      {/* Filter and Sort */}
      <Button variant="solid" className="bg-gray-100 flex items-center space-x-2 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200">
        <AdjustmentsHorizontalIcon className="h-6 w-6 text-blue-900" strokeWidth={2.5} /> {/* Increased size and stroke width */}
        <span className="text-blue-900 text-sm">Trier & Filtrer</span>
      </Button>
    </div>
  );
};

export default CategoryAndFilters;
