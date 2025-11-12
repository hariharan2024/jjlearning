import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Programs", id: "programs" },
    { name: "Why choose us", id: "why-choose-us" },
    { name: "Testimonials", id: "Testimonials" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <span className="text-2xl font-bold text-blue-600 cursor-pointer">
          JJLearnings 🌿
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.id)}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.id)}
              className="block w-full text-left px-6 py-3 text-gray-700 border-b hover:bg-blue-50 transition"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
