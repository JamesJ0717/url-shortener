import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-600 relative flex items-center sm:h-10 p-8">
      <div className="flex items-center flex-shrink-0">
        <div className="flex items-center w-full">
          <img
            className="h-8 w-8"
            src="https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/link.svg"
            alt="Logo"
          />
        </div>
        <div className="">
          <div className="ml-10 flex items-baseline space-x-4">
            <a
              href="/"
              className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
            >
              Home
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
