import { useState, FormEvent } from 'react'
import './StudentRegistration.css'

interface StudentFormData {
  fullName: string
  email: string
  phone: string
  country: string
  desiredCountry: string
  levelOfStudy: string
  fieldOfStudy: string
  message: string
}

const StudentRegistration = () => {
  const [formData, setFormData] = useState<StudentFormData>({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    desiredCountry: '',
    levelOfStudy: '',
    fieldOfStudy: '',
    message: ''
  })

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Australia', 
    'Germany', 'France', 'Netherlands', 'Other'
  ]

  const studyLevels = [
    'Undergraduate (Bachelor\'s)',
    'Graduate (Master\'s)',
    'Doctorate (PhD)',
    'Diploma/Certificate',
    'Language Program'
  ]

  const fieldsOfStudy = [
    'Business & Management',
    'Computer Science & IT',
    'Engineering',
    'Medicine & Health Sciences',
    'Arts & Humanities',
    'Social Sciences',
    'Natural Sciences',
    'Law',
    'Architecture',
    'Other'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Student Registration Form Data:', formData)
    alert('Registration submitted successfully! Our team will contact you soon.')
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      country: '',
      desiredCountry: '',
      levelOfStudy: '',
      fieldOfStudy: '',
      message: ''
    })
  }

  return (
    <div className="registration-page">
      <div className="registration-hero">
        <div className="container">
          <h1>Start Your U.S. Education Journey</h1>
          <p>
            Take the first step toward your dream university. Complete this form to receive 
            personalized guidance from our expert advisors. We'll help you navigate the 
            application process, prepare for tests, and secure admission to top U.S. institutions—absolutely free!
          </p>
        </div>
      </div>

      <div className="container">
        <div className="form-container">
          <h2>Student Registration Form</h2>
          <p className="form-subtitle">
            Fill out the form below and our counselors will get in touch with you within 24 hours.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div className="form-section">
              <h3>Personal Information</h3>
              
              <div className="form-group">
                <label htmlFor="fullName">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    Phone Number <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (123) 456-7890"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="country">
                  Current Country of Residence <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Enter your country"
                  required
                />
              </div>
            </div>

            {/* Academic Preferences */}
            <div className="form-section">
              <h3>Academic Preferences</h3>
              
              <div className="form-group">
                <label htmlFor="desiredCountry">
                  Desired Study Destination <span className="required">*</span>
                </label>
                <select
                  id="desiredCountry"
                  name="desiredCountry"
                  value={formData.desiredCountry}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a country</option>
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="levelOfStudy">
                    Desired Level of Study <span className="required">*</span>
                  </label>
                  <select
                    id="levelOfStudy"
                    name="levelOfStudy"
                    value={formData.levelOfStudy}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select level</option>
                    {studyLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="fieldOfStudy">
                    Field of Study <span className="required">*</span>
                  </label>
                  <select
                    id="fieldOfStudy"
                    name="fieldOfStudy"
                    value={formData.fieldOfStudy}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select field</option>
                    {fieldsOfStudy.map(field => (
                      <option key={field} value={field}>{field}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Additional Information (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your academic background, goals, or any questions you have..."
                  rows={4}
                />
              </div>
            </div>

            <div className="benefits-box">
              <h4>✓ What Happens Next?</h4>
              <ul>
                <li>Free one-on-one consultation with certified advisors</li>
                <li>Personalized university recommendations</li>
                <li>Application support with no fees</li>
                <li>Test preparation guidance</li>
              </ul>
            </div>

            <button type="submit" className="submit-btn">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default StudentRegistration