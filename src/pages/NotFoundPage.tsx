import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 text-center bg-background h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-6 text-primary">404 - Page Not Found</h1>
      <p className="text-xl mb-6 text-secondary">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="text-lg underline text-primary hover:text-secondary">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
