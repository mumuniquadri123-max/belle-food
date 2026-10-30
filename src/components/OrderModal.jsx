import { useState } from 'react';
import './OrderModal.css';

export default function OrderModal({ isOpen, onClose, mealName, cartItems = [] }) {
  const [submitted, setSubmitted] = useState(false);
  const [orderMethod, setOrderMethod] = useState(''); // 'online' or 'whatsapp'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e, method) => {
    e.preventDefault();
    setOrderMethod(method);
    setSubmitted(true);

    if (method === 'whatsapp') {
      const orderDescription = cartItems.length > 0 
        ? cartItems.map(item => `- ${item.quantity}x ${item.name}`).join('%0A')
        : `- 1x ${mealName || 'Belle Food Special Dish'}`;

      // Real Belle Food WhatsApp Order Line
      const businessPhoneNumber = '2349137421838';
      const message = `*NEW BELLE FOOD ORDER*%0A%0A*Customer Name:* ${formData.name}%0A*Phone Number:* ${formData.phone}%0A*Delivery Address:* ${formData.address}%0A%0A*Order Items:*%0A${orderDescription}%0A%0A*Payment Method:* Pay via WhatsApp / On Delivery%0A*Additional Notes:* ${formData.notes || 'None'}%0A%0A_Sent via Belle Food Web Proposal App_`;

      // IMMEDIATE REDIRECT: Executing directly without setTimeout so mobile browsers never block it
      const whatsappUrl = `https://wa.me/${businessPhoneNumber}?text=${message}`;
      window.location.href = whatsappUrl;
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setOrderMethod('');
    setFormData({ name: '', phone: '', address: '', notes: '', cardNumber: '', expiry: '', cvv: '' });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        
        {!submitted ? (
          <>
            <span className="modal-badge">BELLE FOOD 24/7 CHECKOUT</span>
            <h2 className="modal-title">Complete Your Order</h2>
            <p className="modal-subtitle">
              Order Summary: <span className="highlight-meal">{mealName || 'Selected Menu Items'}</span>
            </p>

            <form className="order-form">
              <div className="form-group">
                <label>Your Full Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label>Delivery Address</label>
                <textarea 
                  required 
                  rows="2" 
                  placeholder="Enter your delivery location / address"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                ></textarea>
              </div>

              <div className="form-group">
                <label>Special Instructions (Optional)</label>
                <input 
                  type="text" 
                  placeholder="e.g. Extra spicy, no onions"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                />
              </div>

              {/* Payment Section Box */}
              <div className="payment-options-box">
                <label className="payment-label">Choose Checkout Method:</label>
                <div className="checkout-action-buttons">
                  <button 
                    type="button" 
                    className="pay-online-btn"
                    onClick={(e) => handleSubmit(e, 'online')}
                  >
                    💳 Pay Online Now
                  </button>
                  <button 
                    type="button" 
                    className="pay-whatsapp-btn"
                    onClick={(e) => handleSubmit(e, 'whatsapp')}
                  >
                    💬 Order & Pay via WhatsApp
                  </button>
                </div>
              </div>
            </form>
          </>
        ) : (
          <div className="success-state">
            <div className="success-icon">✓</div>
            <h2 className="modal-title">
              {orderMethod === 'online' ? 'Payment Successful! 🎉' : 'Redirecting to WhatsApp... 🚀'}
            </h2>
            <p className="modal-text">
              {orderMethod === 'online' ? (
                <>Thank you, <strong>{formData.name}</strong>! Your online payment was successfully processed. Belle Food has received your order and is preparing your meal for immediate delivery.</>
              ) : (
                <>Thank you, <strong>{formData.name}</strong>! Opening WhatsApp to dispatch your order to Belle Food...</>
              )}
            </p>
            <button onClick={handleReset} className="modal-submit-btn">Close Window</button>
          </div>
        )}
      </div>
    </div>
  );
}