import { useState } from 'react';
import './Navbar.css'; // Archivo de estilos CSS para la barra de navegación

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-logo">
        <span className="navbar-text">Navbar</span>
      </div>
      <div className="navbar-toggle" onClick={handleToggle}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          {/* Coloca aquí tus enlaces de menú */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
