import React from 'react';

interface ProductImageGalleryProps {
  mainImage: string;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ mainImage }) => {
  return (
    <div className="lg:w-1/3">
      <img src={mainImage} alt="Product Image" className="w-full rounded-lg mb-4" />
    </div>
  );
};

export default ProductImageGallery;
