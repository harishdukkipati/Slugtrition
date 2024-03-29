import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import SignInForm  from './components/SignInForm';
import FilterCard from './components/FilterCard';
import SignUpForm from './components/SignUpForm';
import PasswordReset from './components/PasswordReset';
import LandingPage from './components/Landing';
import Home from './components/Home';
import FAQ from './components/FAQ';
import About from './components/About'
import './App.css';
import './style.css';



function App() {
  return (
    <Router>
      <CustomCursor />
      <Routes>
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/" element={<LandingPage />} /> {/* Set LandingPage as the default route */}
        <Route path="/home" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;