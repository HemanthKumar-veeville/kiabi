import React from "react";
import { ChevronRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

interface BreadcrumbProps {
  items: { name: string, href?: string, current?: boolean }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="py-4 px-6 bg-gray-100 mt-24">
      <ul className="flex items-center text-sm text-gray-600">
        <li className="mr-4 flex items-center">
          <ArrowLeftIcon className="h-5 w-5 text-blue-900" />
          <a href="#" className="ml-2 text-blue-900">
            Retour
          </a>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <a href={item.href} className="text-blue-900">
                {item.name}
              </a>
            ) : (
              <span className="text-blue-900">{item.name}</span>
            )}
            {!item.current && <ChevronRightIcon className="h-4 w-4 mx-1" />}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
