import { useState } from 'react'
import './ContactPage.css'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dormBuilding: '',
    roomNumber: '',
    productType: 'fridge',
    tier: '',
    purchaseType: 'buy',
    includesMicrowave: false,
    message: ''
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const subject = `Babo Appliances Reservation - ${formData.name}`
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Dorm Building: ${formData.dormBuilding}
Room Number: ${formData.roomNumber}

Product Type: ${formData.productType === 'fridge' ? 'Fridge' : 'Microwave Only'}
${formData.productType === 'fridge' ? `Tier: ${formData.tier}` : ''}
Purchase Type: ${formData.purchaseType === 'buy' ? 'Buy' : 'Rent'}
Includes Microwave: ${formData.includesMicrowave ? 'Yes' : 'No'}

Message:
${formData.message}
    `.trim()

    const mailtoLink = `mailto:babofridges@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="contact-page">
      <div className="container">
        <h1>Reserve Your Appliances</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Ready to reserve your fridge or microwave? Fill out the form and we'll get back to you within 24 hours to confirm your reservation.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <h3>📧 Email</h3>
                <p><a href="mailto:babofridges@gmail.com">babofridges@gmail.com</a></p>
                <p><a href="mailto:mrosado1@babson.edu">mrosado1@babson.edu</a></p>
              </div>
              
              <div className="contact-item">
                <h3>📍 Delivery Info</h3>
                <p>We deliver to all Babson dorms on official move-in days</p>
              </div>
              
              <div className="contact-item">
                <h3>💳 Payment</h3>
                <p>Cash, Venmo, or Zelle accepted on delivery</p>
              </div>
            </div>
          </div>

          <form className="reservation-form" onSubmit={handleSubmit}>
            <h2>Reservation Form</h2>
            
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="dormBuilding">Dorm Building *</label>
                <input
                  type="text"
                  id="dormBuilding"
                  name="dormBuilding"
                  value={formData.dormBuilding}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="roomNumber">Room Number</label>
                <input
                  type="text"
                  id="roomNumber"
                  name="roomNumber"
                  value={formData.roomNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="productType">Product Type *</label>
              <select
                id="productType"
                name="productType"
                value={formData.productType}
                onChange={handleChange}
                required
              >
                <option value="fridge">Fridge</option>
                <option value="microwave">Microwave Only</option>
              </select>
            </div>

            {formData.productType === 'fridge' && (
              <div className="form-group">
                <label htmlFor="tier">Fridge Tier *</label>
                <select
                  id="tier"
                  name="tier"
                  value={formData.tier}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a tier</option>
                  <option value="tier1">Tier 1 - The Starter</option>
                  <option value="tier2">Tier 2 - The Classic</option>
                  <option value="tier3">Tier 3 - The Pro</option>
                  <option value="tier4">Tier 4 - The Deluxe</option>
                </select>
              </div>
            )}

            <div className="form-group">
              <label>Purchase Type *</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="purchaseType"
                    value="buy"
                    checked={formData.purchaseType === 'buy'}
                    onChange={handleChange}
                  />
                  <span>Buy</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="purchaseType"
                    value="rent"
                    checked={formData.purchaseType === 'rent'}
                    onChange={handleChange}
                  />
                  <span>Rent</span>
                </label>
              </div>
            </div>

            {formData.productType === 'fridge' && (
              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="includesMicrowave"
                    checked={formData.includesMicrowave}
                    onChange={handleChange}
                  />
                  <span>Add microwave to order (bundle discount applies)</span>
                </label>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="message">Additional Notes</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Any special requests or questions?"
              />
            </div>

            <button type="submit" className="btn btn-primary">Submit Reservation</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage