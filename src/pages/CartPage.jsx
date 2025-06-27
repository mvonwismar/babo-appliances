import { Link } from 'react-router-dom'
import './CartPage.css'

function CartPage() {
  return (
    <div className="cart-page">
      <div className="container">
        <h1>🛒 Shopping Cart</h1>
        
        <div className="cart-content">
          <div className="empty-cart">
            <p className="empty-message">Your cart is currently empty</p>
            <p>Browse our selection of quality refurbished fridges and microwaves!</p>
            <Link to="/shop" className="btn btn-primary">Start Shopping</Link>
          </div>
          
          <div className="cart-info">
            <h2>How Our Ordering Works</h2>
            <ol className="order-steps">
              <li>Browse our selection of fridges and microwaves</li>
              <li>Submit a reservation through our contact form</li>
              <li>We'll confirm your order within 24 hours</li>
              <li>Pay when we deliver to your dorm</li>
            </ol>
            
            <div className="payment-info">
              <h3>Payment Methods Accepted</h3>
              <ul>
                <li>💵 Cash</li>
                <li>📱 Venmo</li>
                <li>💳 Zelle</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage