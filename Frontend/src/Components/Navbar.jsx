import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="w-24 h-12 object-contain" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-500">Home</a>
          <a href="/destinations" className="hover:text-blue-500">Explore</a>
          <a href="/plan" className="hover:text-blue-500">Plan a Trip</a>
          <a href="/budget" className="hover:text-blue-500">Budget</a>
          <a href="/hotels" className="hover:text-blue-500">Hotels</a>
          <a href="/contact" className="hover:text-blue-500">Contact</a>
        </div>

        {/* Call to Action & Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/login" className="text-blue-500">Login</a>
          <a href="/signup" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a href="/" className="block px-6 py-2">Home</a>
          <a href="/destinations" className="block px-6 py-2">Explore</a>
          <a href="/plan" className="block px-6 py-2">Plan a Trip</a>
          <a href="/budget" className="block px-6 py-2">Budget</a>
          <a href="/hotels" className="block px-6 py-2">Hotels</a>
          <a href="/contact" className="block px-6 py-2">Contact</a>
          <a href="/login" className="block px-6 py-2 text-blue-500">Login</a>
          <a href="/signup" className="block px-6 py-2 bg-blue-500 text-white text-center">Sign Up</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;