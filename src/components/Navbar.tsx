import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Requiere instalar: lucide-react
import logo from "../assets/Navbar/logo.png"; // O podés usar texto en lugar del logo

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", url: "/" },
    { name: "Sobre nosotros", url: "/about" },
    { name: "Contacto", url: "/contact" },
    { name: "Política de privacidad", url: "/privacidad" },
    { name: "Términos y condiciones", url: "/terminos" },
  ];

  return (
    <nav className="text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          {/* <span className="text-xl font-bold">MiEmpresa</span> si no usás logo */}
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="hover:text-gray-300 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="block text-white hover:text-gray-300 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
