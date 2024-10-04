import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import ProductImageGallery from '../components/ProductImageGallery';
import ProductInfo from '../components/ProductInfo';
import { productsData } from '../data/products'; // Import the products data

const ProductPage: React.FC = () => {
  // Fetch productId from URL params
  const { productId } = useParams<{ productId: string }>();

  // Find the product based on the productId
  const product = productsData.find((product) => product.id === parseInt(productId || '', 10));

  // If the product is not found, return a message
  if (!product) {
    return (
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold text-red-500">Product not found!</h2>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { name: 'Accueil', href: '/' },
          { name: 'Femme', href: '/femme' },
          { name: product.name, current: true }
        ]}
      />

      {/* Main Product Container */}
      <div className="container mx-auto px-6 py-8 flex flex-col lg:flex-row">
        {/* Product Image Gallery */}
        <ProductImageGallery
          mainImage={product.image}
          thumbnails={[
            '/path-to-thumbnail-1.jpg', // Use actual product thumbnails if available
            '/path-to-thumbnail-2.jpg',
            '/path-to-thumbnail-3.jpg',
            '/path-to-thumbnail-4.jpg',
          ]}
        />

        {/* Product Info */}
        <ProductInfo
          name={product.name}
          price={product.price}
          rating={product.rating}
          reviews={product.reviews}
          colors={["red", "blue", "yellow", "green"]}
          availableSizes={product.availableSizes}
        />
      </div>
    </div>
  );
};

export default ProductPage;
