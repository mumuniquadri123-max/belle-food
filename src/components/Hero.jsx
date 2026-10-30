import './Hero.css';
import heroImage from '../assets/images/hero-foods1.png';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        {/* Left Column: Text Content */}
        <div className="hero-content">
          <span className="hero-badge">AUTHENTIC CATERING & DELIVERY</span>
          <h1 className="hero-title">
            BELLE FOOD <span className="highlight-text">24/7</span>
          </h1>
          <p className="hero-description">
            Authentic Nigerian flavors, anytime you crave. Experience rich, freshly prepared meals delivered straight to your doorstep.
          </p>
          <div className="hero-buttons">
            <a href="#menu" className="primary-btn">Explore Our Menu</a>
            <a href="#contact" className="secondary-btn">Contact Us</a>
          </div>
        </div>

        {/* Right Column: Signature Food Image */}
        <div className="hero-image-wrapper">
          <img 
            src={heroImage} 
            alt="Belle Food signature Nigerian dish with jollof rice and plantains" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}