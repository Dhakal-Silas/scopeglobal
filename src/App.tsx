import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import PartnerRegistration from './pages/PartnerRegistration'
import StudentRegistration from './pages/StudentRegistration'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partner-registration" element={<PartnerRegistration />} />
          <Route path="/student-registration" element={<StudentRegistration />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App