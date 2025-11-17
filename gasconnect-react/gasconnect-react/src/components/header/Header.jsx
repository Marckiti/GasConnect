import React from 'react';
import './Header.css'; // Importamos los estilos del Header

function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        Gas Connect
      </div>
      <nav className="main-nav">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;