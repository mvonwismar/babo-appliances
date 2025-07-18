import './AboutPage.css'

function AboutPage() {
  return (
    <div className="about-page">
      <div className="container">
        <h1>🧑‍🎓 About Us</h1>
        
        <div className="about-content">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              Babo Fridges was started by three juniors at Babson College after realizing 
              how many fridges were being thrown out at move-out. We decided to change that 
              by building a sustainable system that helps both the planet and our fellow students.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              We're on a mission to reduce waste on campus while making dorm life easier 
              and more affordable for students. By rescuing perfectly good appliances from 
              the landfill, we're creating a win-win situation for everyone involved.
            </p>
          </div>

          <div className="about-section">
            <h2>Why Choose Babo?</h2>
            <ul className="benefits-list">
              <li>
                <strong>Sustainable:</strong> Every fridge we sell is one less in the landfill
              </li>
              <li>
                <strong>Affordable:</strong> Get quality appliances at a fraction of the retail price
              </li>
              <li>
                <strong>Convenient:</strong> We deliver and install directly to your dorm
              </li>
              <li>
                <strong>Student-Run:</strong> Supporting fellow Babson students and entrepreneurs
              </li>
              <li>
                <strong>Tested:</strong> All appliances are thoroughly cleaned and tested
              </li>
            </ul>
          </div>

          <div className="team-section">
            <h2>Meet the Team</h2>
            <p>
              We're three Babson juniors passionate about sustainability and helping our community. 
              What started as a simple observation about waste on campus has grown into a 
                    <div className="fridge-disclaimer">
                        <strong>Important:</strong> All fridges are used and may have small dents, scratches, or stickers from previous use. These cosmetic imperfections do not affect functionality. Please be aware of this before purchasing—there are <u>no refunds</u> for appearance. We want to be fully transparent so no one feels misled or scammed. If you have any concerns, please ask before paying!
                    </div>
              business that serves dozens of students each year.
            </p>
          </div>

          <div className="impact-section">
            <h2>Our Impact</h2>
            <div className="impact-stats">
              <div className="stat">
                <h3>🌿</h3>
                <p>Fridges Saved from Landfills</p>
              </div>
              <div className="stat">
                <h3>💰</h3>
                <p>Thousands Saved by Students</p>
              </div>
              <div className="stat">
                <h3>😊</h3>
                <p>Happy Customers Served</p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h2>Ready to Join the Movement?</h2>
            <p>
              Help us reduce waste and save money while getting a quality fridge for your dorm.
            </p>
            <a href="#/shop" className="btn btn-primary">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage