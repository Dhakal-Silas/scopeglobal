import { Link } from 'react-router-dom'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Your Gateway to <span className="highlight">U.S. Higher Education</span>
            </h1>
            <p className="hero-description">
              Scope Global specializes in U.S. college and university admissions, 
              offering personalized academic advising to help you reach your dream institution.
            </p>
            <div className="hero-buttons">
              <Link to="/student-registration" className="btn btn-primary-large">
                Get Started Free
              </Link>
              <a href="#services" className="btn btn-secondary">Learn More</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <h3>500+</h3>
                <p>Students Placed</p>
              </div>
              <div className="stat">
                <h3>100+</h3>
                <p>Partner Universities</p>
              </div>
              <div className="stat">
                <h3>Free</h3>
                <p>Application Support</p>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-illustration">
              🎓
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection