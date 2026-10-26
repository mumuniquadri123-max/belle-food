import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const strengths = [
    {
      id: 1,
      title: '24/7 Availability',
      description: 'Craving delicious food late at night or early in the morning? We serve and deliver round the clock.',
      icon: '🕒',
    },
    {
      id: 2,
      title: 'Authentic Flavors',
      description: 'Prepared using traditional recipes and rich local spices to deliver genuine Nigerian taste in every bite.',
      icon: '🥘',
    },
    {
      id: 3,
      title: 'Freshly Prepared',
      description: 'Every meal is cooked fresh with high-quality ingredients to ensure maximum flavor and satisfaction.',
      icon: '🔥',
    },
  ];

  return (
    <section className="why-section">
      <div className="why-container">
        <div className="section-header">
          <span className="section-tag">WHY BELLE FOOD</span>
          <h2 className="section-title">Built for Real Food Lovers</h2>
          <p className="section-subtitle">
            Discover what makes our service stand out every single day.
          </p>
        </div>

        <div className="why-grid">
          {strengths.map((item) => (
            <div key={item.id} className="why-card">
              <div className="why-icon">{item.icon}</div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}