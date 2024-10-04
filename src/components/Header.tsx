import React from 'react';
import { Input } from "../components/ui/Input"; // Assuming Input component is here
import { ShoppingBagIcon, UserIcon, MapPinIcon, Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'; // Import necessary icons

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section with Menu Icon and Logo */}
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-center">
            <Bars3Icon className="h-[28px] w-6 text-blue-900"  strokeWidth={2.5} />
            <span className="text-sm text-blue-900">Menu</span>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-[900] text-blue-900">KIABI</h1>
            <p className="text-[10px] text-blue-700">la mode à petits prix</p>
          </div>
        </div>

        {/* Centered Search Bar */}
        <div className="flex-grow mx-4 flex justify-center relative">
          <div className="relative w-full max-w-lg">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-900"  strokeWidth={2.5} />
            <Input
              type="text"
              placeholder="Recherchez un article"
              className="w-full pl-10 py-2 bg-gray-100 text-blue-900 rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right Section with Magasins, Compte, and Panier */}
        <div className="flex items-center space-x-6 text-blue-900">
          <div className="flex flex-col items-center">
            <MapPinIcon className="h-6 w-6"  strokeWidth={2.5} />
            <span className="text-sm">Magasins</span>
          </div>
          <div className="flex flex-col items-center">
            <UserIcon className="h-6 w-6"  strokeWidth={2.5} />
            <span className="text-sm">Compte</span>
          </div>
          <div className="flex flex-col items-center">
            <ShoppingBagIcon className="h-6 w-6"  strokeWidth={2.5} />
            <span className="text-sm">Panier</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
