import { useState } from 'react';
import './FeaturedMeals.css';
import jollofImage from '../assets/images/jollof-meal.jpg';
import platterImage from '../assets/images/platter-meal.jpg';
import delicacyImage from '../assets/images/delicacy-meal.jpg';

export default function FeaturedMeals({ onAddToCart }) {
  // Track selected drink for each meal card by its id
  const [selectedDrinks, setSelectedDrinks] = useState({
    1: 'Bottled Water',
    2: 'Bottled Water',
    3: 'Bottled Water',
  });

  const handleDrinkChange = (mealId, drink) => {
    setSelectedDrinks((prev) => ({
      ...prev,
      [mealId]: drink,
    }));
  };

  const meals = [
    {
      id: 1,
      name: 'Signature Jollof Rice & Plantains',
      description: 'Rich, smoky Nigerian party jollof served with fried plantains and protein of choice.',
      price: 'Verified on Order',
      image: jollofImage,
    },
    {
      id: 2,
      name: 'Special Belle Food Platter',
      description: 'An assorted selection of freshly prepared local delicacies crafted for true food lovers.',
      price: 'Verified on Order',
      image: platterImage,
    },
    {
      id: 3,
      name: 'Classic Nigerian Delicacy',
      description: 'Prepared fresh 24/7 with authentic ingredients and rich traditional spices.',
      price: 'Verified on Order',
      image: delicacyImage,
    },
  ];

  const drinkOptions = [
    'Bottled Water',
    'Malt Drink',
    'Coca-Cola',
    'Chapman',
    'Fanta',
    'Sprite',
  ];

  return (
    <section className="featured-section" id="menu">
      <div className="featured-container">
        <div className="section-header">
          <span className="section-tag">OUR MENU</span>
          <h2 className="section-title">Featured Meals</h2>
          <p className="section-subtitle">
            Explore our most popular dishes, freshly prepared around the clock.
          </p>
        </div>

        <div className="meals-grid">
          {meals.map((meal) => {
            const chosenDrink = selectedDrinks[meal.id] || 'Bottled Water';
            // Combine meal name and drink choice for the cart
            const fullNameWithDrink = `${meal.name} (Drink: ${chosenDrink})`;

            return (
              <div key={meal.id} className="meal-card">
                <div className="meal-image-wrapper">
                  <img src={meal.image} alt={meal.name} className="meal-image" />
                </div>
                <div className="meal-content">
                  <h3 className="meal-name">{meal.name}</h3>
                  <p className="meal-desc">{meal.description}</p>
                  
                  {/* Drink Selector Dropdown */}
                  <div className="drink-selector">
                    <label htmlFor={`drink-${meal.id}`}>Choose Drink / Water:</label>
                    <select
                      id={`drink-${meal.id}`}
                      value={chosenDrink}
                      onChange={(e) => handleDrinkChange(meal.id, e.target.value)}
                      className="drink-select-dropdown"
                    >
                      {drinkOptions.map((drink, index) => (
                        <option key={index} value={drink}>
                          {drink}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="meal-footer">
                    <span className="meal-price">{meal.price}</span>
                    <button 
                      type="button" 
                      className="order-item-btn"
                      onClick={() => onAddToCart(fullNameWithDrink)}
                    >
                      Add to Cart 🛒
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}