import './ServicesSection.css'

const ServicesSection = () => {
  const services = [
    {
      icon: '🎯',
      title: 'Personalized Academic Advising',
      description: 'Get one-on-one guidance from our expert counselors to identify the best universities that match your goals and profile.'
    },
    {
      icon: '🏛️',
      title: 'Official Admission Partners',
      description: 'Access our wide network of top-ranked U.S. colleges and universities with free application opportunities.'
    },
    {
      icon: '📚',
      title: 'Test Preparation',
      description: 'High-quality prep courses for SAT, ACT, TOEFL, and IELTS to help you achieve competitive scores.'
    },
    {
      icon: '💡',
      title: 'Free Counseling',
      description: 'Receive free one-on-one counseling sessions with certified test analysts to plan your study abroad journey.'
    }
  ]

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Everything you need to succeed in U.S. higher education</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection