import { useState } from 'react';
import './AdminDashboard.css';

export default function AdminDashboard({ isOpen, onClose, orders = [] }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [orderList, setOrderList] = useState([
    // Sample mock data for demonstration
    {
      id: 'ORD-101',
      customerName: 'Chidi Okonkwo',
      phone: '08012345678',
      address: 'Lekki Phase 1, Lagos',
      items: ['Signature Jollof Rice & Plantains (Drink: Malt Drink)'],
      paymentMethod: 'Online Payment',
      status: 'Pending',
      time: '10 mins ago',
    },
    {
      id: 'ORD-102',
      customerName: 'Amina Bello',
      phone: '08087654321',
      address: 'Victoria Island, Lagos',
      items: ['Special Belle Food Platter (Drink: Chapman)', 'Bottled Water x2'],
      paymentMethod: 'WhatsApp Dispatch',
      status: 'Preparing',
      time: '25 mins ago',
    },
  ]);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    // Default demo passcode for Belle Food Admin
    if (password === 'bellefood247') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid admin password. Try again.');
    }
  };

  const handleStatusChange = (orderId, newStatus) => {
    setOrderList((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="admin-overlay" onClick={onClose}>
      <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
        <button className="admin-close-btn" onClick={onClose}>&times;</button>

        {!isAuthenticated ? (
          /* Admin Login State */
          <div className="admin-login-box">
            <span className="admin-badge">RESTRICTED ACCESS</span>
            <h2>Belle Food Staff Login</h2>
            <p>Enter administrative passkey to view incoming customer orders.</p>

            <form onSubmit={handleLogin} className="admin-login-form">
              <input
                type="password"
                placeholder="Enter Admin Password (demo: bellefood247)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <p className="admin-error">{error}</p>}
              <button type="submit" className="admin-login-btn">Access Dashboard</button>
            </form>
          </div>
        ) : (
          /* Admin Order Tracking Dashboard */
          <div className="admin-content">
            <div className="admin-header">
              <div>
                <h2>Belle Food Live Orders</h2>
                <span className="admin-subtitle">Real-time Customer Dispatch Control</span>
              </div>
              <button onClick={() => setIsAuthenticated(false)} className="admin-logout-btn">
                Logout 🔒
              </button>
            </div>

            <div className="admin-table-wrapper">
              <table className="admin-orders-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer Details</th>
                    <th>Items & Drinks</th>
                    <th>Channel</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orderList.map((order) => (
                    <tr key={order.id}>
                      <td className="order-id-cell">{order.id}</td>
                      <td>
                        <strong>{order.customerName}</strong>
                        <div className="sub-detail">📞 {order.phone}</div>
                        <div className="sub-detail">📍 {order.address}</div>
                      </td>
                      <td>
                        <ul className="order-items-sublist">
                          {order.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </td>
                      <td>
                        <span className={`channel-badge ${order.paymentMethod.includes('Online') ? 'online' : 'whatsapp'}`}>
                          {order.paymentMethod}
                        </span>
                      </td>
                      <td>
                        <select
                          value={order.status}
                          onChange={(e) => handleStatusChange(order.id, e.target.value)}
                          className={`status-select ${order.status.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <option value="Pending">Pending ⏳</option>
                          <option value="Preparing">Preparing 👨‍🍳</option>
                          <option value="Out for Delivery">Out for Delivery 🛵</option>
                          <option value="Completed">Completed ✅</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}