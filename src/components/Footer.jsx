import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section" id="contact">
      <div className="footer-container">
        {/* Brand & Mission */}
        <div className="footer-col">
          <div className="footer-logo">
            <span className="logo-badge">24/7</span>
            <span className="logo-text">BELLE FOOD</span>
          </div>
          <p className="footer-desc">
            Authentic Nigerian flavors, anytime you crave. Associated with King Mitchy, delivering fresh meals round the clock.
          </p>
        </div>

        {/* Contact Numbers */}
        <div className="footer-col">
          <h4 className="footer-heading">Direct Lines</h4>
          <ul className="footer-links">
            <li><a href="tel:09137421838">📞 0913 742 1838</a></li>
            <li><a href="tel:09063584306">📞 0906 358 4306</a></li>
          </ul>
        </div>

        {/* Official Social Media */}
        <div className="footer-col">
          <h4 className="footer-heading">Official Channels</h4>
          <ul className="footer-links">
            <li>
              <a href="https://www.instagram.com/popular/bellefood-king-mitchy/" target="_blank" rel="noopener noreferrer">
                Instagram (@bellefood-king-mitchy)
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@bellefoodlagos" target="_blank" rel="noopener noreferrer">
                TikTok (@bellefoodlagos)
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Belle Food. All rights reserved. Proposal Website Project.</p>
      </div>
    </footer>
  );
}