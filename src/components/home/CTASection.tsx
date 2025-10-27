import { Link } from 'react-router-dom'
import './CTASection.css'

const CTASection = () => {
  return (
    <section className="cta" id="contact">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Start Your U.S. Education Journey?</h2>
          <p>
            Get free consultation with our certified advisors and take the first step 
            toward your dream university today.
          </p>
          <div className="cta-buttons">
            <Link to="/student-registration" className="btn btn-cta-primary">
              Schedule Free Consultation
            </Link>
            <Link to="/partner-registration" className="btn btn-cta-secondary">
              Become a Partner
            </Link>
          </div>
          <p className="cta-note">✓ No application fees • ✓ Expert guidance • ✓ 100% free counseling</p>
        </div>
      </div>
    </section>
  )
}

export default CTASection