import './Footer.css'
 
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-title">Ahi va el titulo de nose que</h3>
 
        <ul className="footer-links">
          <li><a href="#">Acerca de </a></li>
          <li><a href="#">Servicio Técnico</a></li>
          <li><a href="#">Contactanos</a></li>
          <li><a href="#">Redes Sociales</a></li>
        </ul>
 
        <p className="footer-copy">
          © {new Date().getFullYear()} Mi Sitio Web · Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}