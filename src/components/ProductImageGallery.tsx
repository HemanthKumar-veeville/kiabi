import React from 'react';

interface ProductImageGalleryProps {
  mainImage: string;
  thumbnails: string[];
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ mainImage, thumbnails }) => {
  return (
    <div className="lg:w-1/2">
      <img src={mainImage} alt="Product Image" className="w-full rounded-lg mb-4" />
      <div className="flex space-x-2">
        {thumbnails.map((thumbnail, index) => (
          <img key={index} src={thumbnail} alt={`Thumbnail ${index}`} className="w-24 h-24 rounded-lg" />
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
