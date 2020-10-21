import React from "react";

export default function Footer() {
  return (
    <footer className="h-16 bg-gray-800 flex flex-row items-center text-gray-100">
      <a href="https://www.jamesjohnson.io" target="_blank" rel="noopener noreferrer" className=" pr-4">
        <img
          src="https://raw.githubusercontent.com/JamesJ0717/logo/main/logo.png?token=ACIBGLOCYRJPS7CBUOUUMZC7S6ODO"
          alt="JJ Logo"
          className="h-16 w-16"
        />
      </a>
      <span className="text-xs">Powered by: Express, ReactJS, TailwindCSS, and shortid</span>
    </footer>
  );
}
