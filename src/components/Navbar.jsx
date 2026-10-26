import { useState } from 'react';
import './Navbar.css';

export default function Navbar({ cartCount, onCartClick, onOrderClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo / Brand */}
        <div className="nav-logo">
          <span className="logo-badge">24/7</span>
          <span className="logo-text">BELLE FOOD</span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#menu" onClick={() => setIsMobileMenuOpen(false)}>Menu</a></li>
          <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
        </ul>

        {/* Actions: Cart Button & Order Now CTA */}
        <div className="nav-actions">
          {/* Cart Icon Button */}
          <button type="button" className="cart-icon-btn" onClick={onCartClick} aria-label="Shopping Cart">
            🛒 <span className="cart-badge">{cartCount || 0}</span>
          </button>

          <button type="button" className="nav-order-btn" onClick={onOrderClick}>
            Order Now
          </button>

          {/* Mobile Hamburger Toggle */}
          <div className="hamburger" onClick={toggleMobileMenu}>
            <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </div>
        </div>
      </div>
    </nav>
  );
}