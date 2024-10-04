import React from 'react';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import ProductImageGallery from '../components/ProductImageGallery';
import ProductInfo from '../components/ProductInfo';

const ProductPage: React.FC = () => {
  return (
    <div>
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { name: 'Accueil', href: '/' },
          { name: 'Femme', href: '/femme' },
          { name: 'Veste sans manches en jean - Gris clair', current: true }
        ]}
      />

      <div className="container mx-auto px-6 py-8 flex flex-col lg:flex-row">
        {/* Product Image Gallery */}
        <ProductImageGallery
          mainImage="/path-to-main-image.jpg"
          thumbnails={[
            '/path-to-thumbnail-1.jpg',
            '/path-to-thumbnail-2.jpg',
            '/path-to-thumbnail-3.jpg',
            '/path-to-thumbnail-4.jpg',
          ]}
        />

        {/* Product Info */}
        <ProductInfo />
      </div>
    </div>
  );
};

export default ProductPage;
