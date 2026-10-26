import './OrderCTA.css';

export default function OrderCTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <span className="cta-badge">READY TO EAT?</span>
        <h2 className="cta-title">Experience Authentic Belle Food Today</h2>
        <p className="cta-description">
          Satisfy your cravings with our fresh, delicious Nigerian meals delivered to your doorstep 24/7.
        </p>
        <div className="cta-buttons">
          <a href="#menu" className="cta-primary-btn">Explore Menu & Order</a>
          <a href="#contact" className="cta-secondary-btn">Contact Us</a>
        </div>
      </div>
    </section>
  );
}