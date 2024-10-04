import React from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Button } from '../components/ui/Button';

interface AddToCartButtonProps {
  price: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ price }) => {
  return (
    <Button variant="solid" className="flex items-center space-x-2">
      <ShoppingBagIcon className="h-5 w-5" />
      <span>Ajouter au panier ({price})</span>
    </Button>
  );
};

export default AddToCartButton;
