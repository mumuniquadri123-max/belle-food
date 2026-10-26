import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedMeals from './components/FeaturedMeals';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import OrderCTA from './components/OrderCTA';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import CartDrawer from './components/CartDrawer';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('belle_food_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState('');

  useEffect(() => {
    localStorage.setItem('belle_food_cart', JSON.stringify(cart));
  }, [cart]);

  // Secret shortcut: Press Ctrl + Shift + A (or Cmd + Shift + A) to open Admin Panel
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        setIsAdminOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleAddToCart = (mealName) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.name === mealName);
      if (existing) {
        return prevCart.map((item) =>
          item.name === mealName ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { name: mealName, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (mealName, newQuantity) => {
    if (newQuantity <= 0) {
      setCart((prevCart) => prevCart.filter((item) => item.name !== mealName));
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.name === mealName ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    const summaryText = cart.map(item => `${item.quantity}x ${item.name}`).join(', ');
    setSelectedMeal(summaryText);
    setIsModalOpen(true);
    setCart([]);
  };

  return (
    <div className="app">
      <Navbar 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        onOrderClick={() => handleAddToCart('Belle Food Special Dish')} 
      />
      <Hero onOrderClick={() => handleAddToCart('Signature Jollof Rice & Plantains')} />
      <FeaturedMeals onAddToCart={handleAddToCart} />
      <About />
      <WhyChooseUs />
      <OrderCTA onOrderClick={() => handleAddToCart('Full Menu Order')} />
      
      {/* Clean public footer without admin links */}
      <Footer />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onCheckout={handleCheckout}
      />

      <OrderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        mealName={selectedMeal} 
        cartItems={cart}
      />

      {/* Secret Admin Dashboard Modal */}
      <AdminDashboard 
        isOpen={isAdminOpen} 
        onClose={() => setIsAdminOpen(false)} 
      />
    </div>
  );
}

export default App;