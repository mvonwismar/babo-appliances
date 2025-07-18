import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../config'
import './ShopPage.css'

function ShopPage() {
  const [viewMode, setViewMode] = useState('buy') // 'buy' or 'rent'

  const fridges = [
    {
      id: 1,
      tier: '🥇 Tier 1',
      name: 'The Starter',
      image: `${BASE_URL}images/h16mrs-honeywell-mini-fridge-with-freezer-stainless-steel-1.jpg`,
      buyPrice: 100,
      buyOldPrice: 150,
      rentPrice: 60,
      description: 'Compact, dorm-sized, best for solo use. <strong>No freezer guaranteed.</strong>',
      stock: 'Limited'
    },
    {
      id: 2,
      tier: '🥈 Tier 2',
      name: 'The Classic',
      image: `${BASE_URL}images/c9f70ba8a526c65d390d77ab41a9c30b1a-magic-chef-refrigerator.2x.h473.w710.webp`,
      buyPrice: 125,
      buyOldPrice: 175,
      rentPrice: 80,
      description: 'Medium size, includes freezer shelf. <strong>Freezer included.</strong>',
      stock: 'In Stock'
    },
    {
      id: 3,
      tier: '🥇 Tier 3',
      name: 'The Pro',
      image: `${BASE_URL}images/stainless-vissani-mini-fridges-hvdr31gse-64_1000.avif`,
      buyPrice: 150,
      buyOldPrice: 200,
      rentPrice: 100,
      description: 'Larger capacity, good for shared rooms. <strong>Freezer included.</strong>',
      stock: 'In Stock'
    },
    {
      id: 4,
      tier: '🥉 Tier 4',
      name: 'The Deluxe',
      image: `${BASE_URL}images/stainless-vissani-mini-fridges-hvdr31gse-64_1000.avif`,
      buyPrice: 200,
      buyOldPrice: 300,
      rentPrice: 125,
      description: 'Like-new, separate freezer, premium pick. <strong>Full freezer guaranteed.</strong>',
      stock: 'Limited'
    }
  ]

  const microwave = {
    id: 5,
    name: '🔥 Microwave',
    image: `${BASE_URL}images/shitty-microwave.jpg`,
    buyPrice: 40,
    rentPrice: 50,
    description: 'Compact, dorm-safe microwaves available with any fridge order'
  }

  return (
    <div className="shop-page">
      <div className="container">
        <h1>Shop Our Collection</h1>
        
        <div className="view-toggle">
          <button 
            className={`toggle-btn ${viewMode === 'buy' ? 'active' : ''}`}
            onClick={() => setViewMode('buy')}
          >
            Buy
          </button>
          <button 
            className={`toggle-btn ${viewMode === 'rent' ? 'active' : ''}`}
            onClick={() => setViewMode('rent')}
          >
            Rent
          </button>
        </div>

        <div className="products-grid">
          {fridges.map(fridge => (
            <div key={fridge.id} className="product-card">
              {fridge.stock === 'Limited' && (
                <span className="stock-badge">Limited Supply</span>
              )}
              <div className="product-image">
                <img src={fridge.image} alt={fridge.name} />
              </div>
              <div className="product-info">
                <h3>{fridge.tier} – {fridge.name}</h3>
                <p className="product-description">{fridge.description}</p>
                {viewMode === 'buy' ? (
                  <div className="price-section">
                    <p className="price">
                      <span className="old-price">${fridge.buyOldPrice}</span>
                      ${fridge.buyPrice}
                    </p>
                    <p className="savings">Save ${fridge.buyOldPrice - fridge.buyPrice}!</p>
                  </div>
                ) : (
                  <div className="price-section">
                    <p className="price">${fridge.rentPrice}/year</p>
                  </div>
                )}
                <Link to="/contact" className="btn btn-primary">Reserve Now</Link>
              </div>
            </div>
          ))}

          <div className="product-card microwave-card">
            <div className="product-image">
              <img src={microwave.image} alt={microwave.name} />
            </div>
            <div className="product-info">
              <h3>{microwave.name}</h3>
              <p className="product-description">{microwave.description}</p>
              {viewMode === 'buy' ? (
                <div className="price-section">
                  <p className="price">${microwave.buyPrice}</p>
                </div>
              ) : (
                <div className="price-section">
                  <p className="price">${microwave.rentPrice}/year</p>
                </div>
              )}
              <Link to="/contact" className="btn btn-primary">Add to Order</Link>
            </div>
          </div>
        </div>

        <div className="bundles-section">
          <h2>📦 Bundle Deals</h2>
          <div className="bundle-cards">
            <div className="bundle-card">
              <h3>Buy & Save</h3>
              <p className="bundle-discount">25% OFF</p>
              <p>Get 25% off your fridge when bundled with a microwave purchase</p>
            </div>
            <div className="bundle-card">
              <h3>Rent & Save</h3>
              <p className="bundle-discount">15% OFF</p>
              <p>Get 15% off the combined total when renting both a fridge and microwave</p>
            </div>
          </div>
        </div>

        <div className="note-section">
          <p>
            <strong>Note:</strong> Images are representative of fridge sizes, not the exact model you'll receive. 
            All fridges are thoroughly cleaned, tested, and in excellent working condition.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ShopPage