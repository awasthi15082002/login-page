// OtpVerification.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Otp.css';

const OtpVerification = () => {
  const [otpInput, setOtpInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedOtp = localStorage.getItem('generatedOtp');
    if (otpInput === storedOtp) {
      alert('OTP Verified Successfully!');
      navigate('/main');
    } else {
      alert('Invalid OTP! Please try again.');
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-card">
        <h2>Verify Your OTP</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            maxLength="6"
            placeholder="Enter 6-digit OTP"
            value={otpInput}
            onChange={(e) => setOtpInput(e.target.value)}
            required
            className="otp-input"
          />
          <button type="submit" className="verify-btn">Verify OTP</button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;