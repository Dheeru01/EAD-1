import React, { useState } from 'react';

const PasswordChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const checkPasswordStrength = (password) => {
    const lengthCriteria = password.length >= 8;
    const uppercaseCriteria = /[A-Z]/.test(password);
    const lowercaseCriteria = /[a-z]/.test(password);
    const numberCriteria = /[0-9]/.test(password);
    const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const criteriaMet = [
      lengthCriteria,
      uppercaseCriteria,
      lowercaseCriteria,
      numberCriteria,
      specialCharCriteria,
    ].filter(Boolean).length;

    switch (criteriaMet) {
      case 5:
        return 'Very Strong';
      case 4:
        return 'Strong';
      case 3:
        return 'Moderate';
      case 2:
        return 'Weak';
      default:
        return 'Very Weak';
    }
  };

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setStrength(checkPasswordStrength(newPassword));
  };

  return (
    <div>
      <h1>Password Checker</h1>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handleChange}
      />
      <div>
        <strong>Password Strength: </strong>
        <span>{strength}</span>
      </div>
    </div>
  );
};

export default PasswordChecker;
