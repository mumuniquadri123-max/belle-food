import './About.css';
import heroImage from '../assets/images/hero-foods.jpg';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Column: Image / Visual Accent */}
        <div className="about-image-wrapper">
          <img 
            src={heroImage} 
            alt="Belle Food kitchen and dining experience" 
            className="about-image"
          />
        </div>

        {/* Right Column: Story & Information */}
        <div className="about-content">
          <span className="section-tag">ABOUT US</span>
          <h2 className="section-title">Authentic Flavors, Crafted 24/7</h2>
          <p className="about-text">
            Belle Food brings you the rich, authentic taste of premium Nigerian cuisine, prepared fresh around the clock to satisfy your cravings whenever they strike. Associated with King Mitchy, our commitment is rooted in quality, speed, and unforgettable culinary experiences.
          </p>
          <div className="about-features">
            <div className="feature-item">
              <span className="feature-bullet">✓</span>
              <span>Freshly prepared local delicacies</span>
            </div>
            <div className="feature-item">
              <span className="feature-bullet">✓</span>
              <span>Round-the-clock (24/7) service and delivery</span>
            </div>
            <div className="feature-item">
              <span className="feature-bullet">✓</span>
              <span>Authentic ingredients and traditional recipes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}