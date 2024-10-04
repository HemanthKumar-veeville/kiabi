import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Button } from "../components/ui/Button";

// Define the Product type
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  colors: number;
  isExclusive: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate(); // Use navigate for redirection

  // Handle redirection to product details page
  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden relative cursor-pointer"
      onClick={handleClick} // Add click event to navigate
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />

      {/* Exclu Web Tag */}
      {product.isExclusive && (
        <div className="absolute top-2 left-2 bg-gray-100 px-2 py-1 text-sm rounded">
          Exclu Web
        </div>
      )}

      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-500 mt-1 text-lg font-bold">{product.price.toFixed(2)} €</p>

        {/* Star rating */}
        <div className="flex items-center mt-2">
          <div className="flex items-center space-x-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className={`${
                  index < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                ⭐
              </span>
            ))}
            <span>{product.rating}</span>
          </div>
          <p className="ml-2 text-sm text-gray-400">({product.reviews})</p>
        </div>

        {/* Add to Cart Button */}
        <Button variant="outline" className="mt-4 w-full">
          Ajouter au panier
        </Button>

        <p className="text-blue-500 text-sm mt-2">{product.colors} couleurs</p>
      </div>
    </div>
  );
};

export default ProductCard;
