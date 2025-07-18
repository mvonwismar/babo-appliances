import { Link } from 'react-router-dom'
import './HomePage.css'

function HomePage() {
  const whyBaboFeatures = [
    { icon: '🚚', title: 'Delivered to your dorm' },
    { icon: '🔧', title: 'Installed by Babson juniors' },
    { icon: '💰', title: 'Cheaper than new' },
    { icon: '✨', title: 'Cleaned and tested' },
    { icon: '🌿', title: 'Eco-friendly and sustainable' },
    { icon: '⏰', title: 'Limited supply' }
  ]

  return (
    <div className="homepage">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Dorm-Ready Fridges, Delivered & Installed.</h1>
            <p className="hero-subtitle">
              Skip the store. Let Babson students deliver and install your fridge for you.
            </p>
            <div className="hero-buttons">
              <Link to="/shop" className="btn btn-primary">Shop Now</Link>
              <Link to="/contact" className="btn btn-secondary">Reserve Yours Today</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="container">
          <h2>🌿 Giving Fridges a Second Chance</h2>
          <p className="mission-text">
            Every year, dozens of perfectly good fridges are thrown out. We rescued them, 
            cleaned them, and built Babo to give them a second life — saving students 
            time, cash, and effort.
          </p>
        </div>
      </section>

      <section className="why-babo">
        <div className="container">
          <h2>🚚 Why Babo</h2>
          <div className="features-grid">
            {whyBaboFeatures.map((feature, index) => (
              <div key={index} className="feature-card">
                <span className="feature-icon">{feature.icon}</span>
                <p className="feature-title">{feature.title}</p>
              </div>
            ))}
          </div>
          <p className="disclaimer">
            Note: Images are representative of fridge sizes, not the exact model you'll receive.
          </p>
        </div>
      </section>

      <section className="shop-preview">
        <div className="container">
          <h2>🛒 Shop Our Collection</h2>
          <div className="preview-grid">
            <div className="preview-card">
              <h3>🥇 Tier 1 – The Starter</h3>
              <p className="price">Buy: <span className="old-price">$150</span> $100</p>
              <p className="price">Rent: $60/year</p>
              <Link to="/shop" className="btn btn-primary">Shop Now</Link>
            </div>
            <div className="preview-card">
              <h3>🥈 Tier 2 – The Classic</h3>
              <p className="price">Buy: <span className="old-price">$175</span> $125</p>
              <p className="price">Rent: $80/year</p>
              <Link to="/shop" className="btn btn-primary">Shop Now</Link>
            </div>
            <div className="preview-card">
              <h3>🥇 Tier 3 – The Pro</h3>
              <p className="price">Buy: <span className="old-price">$200</span> $150</p>
              <p className="price">Rent: $100/year</p>
              <Link to="/shop" className="btn btn-primary">Shop Now</Link>
            </div>
          </div>
          <div className="bundle-deal">
            <h3>📦 Bundle Deals</h3>
            <p>Buy & Save: Get 25% off your fridge when bundled with a microwave purchase</p>
            <p>Rent & Save: Get 15% off the combined total when renting both</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2>🔄 How It Works</h2>
          <div className="steps-grid">
            <div className="step">
              <span className="step-number">1</span>
              <p>Choose your fridge or microwave</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <p>Reserve online</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <p>We deliver and install to your dorm</p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <p>You pay on delivery</p>
            </div>
            <div className="step">
              <span className="step-number">5</span>
              <p>Plug it in and chill</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage