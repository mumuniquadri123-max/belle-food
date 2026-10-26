import './CartDrawer.css';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onCheckout }) {
  if (!isOpen) return null;

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-header">
          <h2>Your Cart ({totalItems})</h2>
          <button className="cart-close-btn" onClick={onClose}>&times;</button>
        </div>

        {/* Cart Items List */}
        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is currently empty.</p>
              <span>Add some delicious Belle Food dishes to get started!</span>
            </div>
          ) : (
            <ul className="cart-items-list">
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <span className="cart-item-price">Verified on Order</span>
                  </div>
                  <div className="cart-item-actions">
                    <button 
                      onClick={() => onUpdateQuantity(item.name, item.quantity - 1)}
                      className="qty-btn"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.name, item.quantity + 1)}
                      className="qty-btn"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer / Checkout */}
        {cart.length > 0 && (
          <div className="cart-footer">
            <button className="checkout-btn" onClick={onCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}