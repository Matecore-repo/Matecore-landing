import React from "react";
import Paleta from "../assets/Features/Paleta.png";
import Maleta from "../assets/Features/Maleta.png";
import Tienda from "../assets/Features/Tienda.png";
import Flecha from "../assets/Features/Flecha.png";

const features = [
  {
    icon: Paleta,
    title: "Construí tu portfolio",
    description: "Mostrá tu talento con un portfolio siempre actualizado y listo para impresionar.",
    link: "#",
  },
  {
    icon: Maleta,
    title: "Conseguí trabajos freelance",
    description: "Recibí propuestas de diseño directo en tu bandeja de entrada todos los días.",
    link: "#",
  },
  {
    icon: Tienda,
    title: "Vendé tus productos",
    description: "Poné tus diseños frente a miles de potenciales clientes sin complicaciones.",
    link: "#",
  },
];


const Features: React.FC = () => {
  return (
    <div className="bg-transparent text-white py-16 px-4 mb-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 group transition-colors duration-300 hover:text-gray-300"
          >
            <img src={feature.icon} alt={feature.title} className="w-8 h-8 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-gray-400 mt-1">{feature.description}</p>
              <a
                href={feature.link}
                className="font-semibold mt-2 inline-flex items-center space-x-1 transition-colors duration-300"
              >
                <span>Learn more</span>
                <img
                  src={Flecha}
                  alt="Arrow"
                  className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
