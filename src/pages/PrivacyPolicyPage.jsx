import React from "react";
import "./AboutPage.css";

const PrivacyPolicyPage = () => (
  <div className="about-page">
    <div className="about-content">
      <h1>Privacy Policy</h1>
      <div className="about-section">
        <h2>1. Information We Collect</h2>
        <p>We collect only the information you provide to us, such as your name, email, and delivery details, to process your order.</p>
      </div>
      <div className="about-section">
        <h2>2. How We Use Your Information</h2>
        <p>Your information is used solely for order processing, communication, and delivery. We do not sell or share your data with third parties.</p>
      </div>
      <div className="about-section">
        <h2>3. Data Security</h2>
        <p>We take reasonable steps to protect your information, but cannot guarantee absolute security.</p>
      </div>
      <div className="about-section">
        <h2>4. Cookies</h2>
        <p>We do not use cookies or tracking technologies on this site.</p>
      </div>
      <div className="about-section">
        <h2>5. Contact</h2>
        <p>If you have questions about your privacy, contact us at baboappliances@gmail.com.</p>
      </div>
    </div>
  </div>
);

export default PrivacyPolicyPage;
