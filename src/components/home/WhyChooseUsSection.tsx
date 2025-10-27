import './WhyChooseUsSection.css'

const WhyChooseUsSection = () => {
  const benefits = [
    {
      title: 'Expert Guidance',
      description: 'Our team of experienced advisors knows the U.S. education system inside and out.'
    },
    {
      title: 'Save Time & Money',
      description: 'Free application support through our official partnerships with universities.'
    },
    {
      title: 'Proven Success',
      description: 'Hundreds of students successfully placed in top U.S. institutions.'
    },
    {
      title: 'Comprehensive Support',
      description: 'From test prep to visa guidance, we support you at every step.'
    }
  ]

  return (
    <section className="why-choose-us" id="about">
      <div className="container">
        <div className="why-content">
          <div className="why-text">
            <h2>Why Choose Scope Global?</h2>
            <p className="subtitle">
              We're dedicated exclusively to U.S. higher education admissions, 
              ensuring you get specialized expertise every step of the way.
            </p>
            
            <div className="benefits-list">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-check">✓</div>
                  <div>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="why-visual">
            <div className="stats-card">
              <div className="stat-item">
                <h3>100%</h3>
                <p>Dedicated to U.S. Admissions</p>
              </div>
              <div className="stat-item">
                <h3>Free</h3>
                <p>Application Services</p>
              </div>
              <div className="stat-item">
                <h3>24/7</h3>
                <p>Student Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection