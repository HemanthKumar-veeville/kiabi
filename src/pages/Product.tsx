import React, { useState } from 'react';
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

  // Initialize the state for the selected image
  const [selectedImage, setSelectedImage] = useState(product?.image || '');

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
          { name: 'Femme', href: '/' },
          { name: product.name, current: true }
        ]}
      />

      {/* Main Product Container */}
      <div className="container mx-auto px-6 py-8 flex flex-col lg:flex-row">
        {/* Product Image Gallery */}
        <ProductImageGallery
          mainImage={selectedImage} // Display the selected image
        />

        {/* Product Info */}
        <ProductInfo
          name={product.name}
          price={product.price}
          rating={product.rating}
          reviews={product.reviews}
          colors={product.colors} // Pass colors with images
          availableSizes={product.availableSizes}
          onColorChange={setSelectedImage} // Update the image when color changes
        />
      </div>
    </div>
  );
};

export default ProductPage;
