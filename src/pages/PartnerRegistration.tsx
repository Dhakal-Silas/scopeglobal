import { useState, FormEvent } from 'react'
import './PartnerRegistration.css'

interface PartnerFormData {
  companyName: string
  companyAddress: string
  fullName: string
  designation: string
  phone: string
  email: string
  countries: string
  licenses: string
  signature: string
  date: string
}

const PartnerRegistration = () => {
  const [formData, setFormData] = useState<PartnerFormData>({
    companyName: '',
    companyAddress: '',
    fullName: '',
    designation: '',
    phone: '',
    email: '',
    countries: '',
    licenses: '',
    signature: '',
    date: new Date().toISOString().split('T')[0]
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Partner Registration Form Data:', formData)
    alert('Form submitted successfully! Check console for details.')
    // Reset form
    setFormData({
      companyName: '',
      companyAddress: '',
      fullName: '',
      designation: '',
      phone: '',
      email: '',
      countries: '',
      licenses: '',
      signature: '',
      date: new Date().toISOString().split('T')[0]
    })
  }

  return (
    <div className="registration-page">
      <div className="registration-hero">
        <div className="container">
          <h1>Become Our Partner</h1>
          <p>
            Join Scope Global's exclusive B2B partnership program and become a valued 
            representative in your region. We are actively seeking strategic partners to 
            expand our global reach and deliver high-quality educational support to aspiring 
            students. Our partnership program offers attractive incentives, performance-based 
            bonuses, and comprehensive support to help you grow your business. If you're 
            interested in collaborating with a trusted name in international education, 
            complete the form to become a registered Scope Global partner today.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="form-container">
          <h2>Education Agent Registration Form</h2>
          <p className="form-subtitle">
            Please complete the form below to register as an authorized education agent. 
            All information provided will be kept confidential and used for verification 
            and communication purposes only.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Company Information */}
            <div className="form-section">
              <h3>Company Information</h3>
              
              <div className="form-group">
                <label htmlFor="companyName">
                  Name of Company <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="companyAddress">
                  Company Address <span className="required">*</span>
                </label>
                <textarea
                  id="companyAddress"
                  name="companyAddress"
                  value={formData.companyAddress}
                  onChange={handleChange}
                  rows={3}
                  required
                />
              </div>
            </div>

            {/* Contact Person Details */}
            <div className="form-section">
              <h3>Contact Person Details</h3>
              
              <div className="form-row">
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
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="designation">
                    Designation/Position <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
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
                    required
                  />
                </div>

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
                    required
                  />
                </div>
              </div>
            </div>

            {/* Agency Details */}
            <div className="form-section">
              <h3>Agency Details</h3>
              
              <div className="form-group">
                <label htmlFor="countries">
                  Countries You Offer Educational Services For <span className="required">*</span>
                </label>
                <textarea
                  id="countries"
                  name="countries"
                  value={formData.countries}
                  onChange={handleChange}
                  placeholder="Please list all applicable countries"
                  rows={3}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="licenses">
                  Licenses / Certifications Held
                </label>
                <textarea
                  id="licenses"
                  name="licenses"
                  value={formData.licenses}
                  onChange={handleChange}
                  placeholder="Please specify any relevant government or industry accreditations"
                  rows={3}
                />
              </div>
            </div>

            {/* Declaration */}
            <div className="form-section">
              <h3>Declaration</h3>
              <div className="declaration-text">
                <p>
                  I hereby declare that the information provided above is true and correct 
                  to the best of my knowledge. I understand that submission of this form 
                  does not guarantee approval as an authorized education agent.
                </p>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="signature">
                    Signature (Type your full name) <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="signature"
                    name="signature"
                    value={formData.signature}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="date">
                    Date <span className="required">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Submit Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PartnerRegistration