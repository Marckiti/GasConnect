import "./ServiceFeatures.css";

export default function ServiceFeatures() {
  return (
    <section className="features-container">
      <h2 className="features-title">¿Por qué elegir GasConnect?</h2>

      <div className="features-grid">
        <div className="feature-card">
          <i className="icon">⚡</i>
          <h3>Entrega Rápida</h3>
          <p>Recibe tu tanque de gas en pocos minutos gracias a nuestros repartidores cercanos.</p>
        </div>

        <div className="feature-card">
          <i className="icon">📍</i>
          <h3>Seguimiento en Tiempo Real</h3>
          <p>Visualiza la ubicación de tu pedido desde que sale hasta que llega a tu domicilio.</p>
        </div>

        <div className="feature-card">
          <i className="icon">💳</i>
          <h3>Pago Seguro</h3>
          <p>Paga en efectivo, tarjeta o transferencia sin complicaciones.</p>
        </div>

        <div className="feature-card">
          <i className="icon">🕒</i>
          <h3>Atención 24/7</h3>
          <p>Estamos disponibles a cualquier hora para atender emergencias o pedidos urgentes.</p>
        </div>
      </div>
    </section>
  );
}
