import React, { useState } from 'react';

const ValidationLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    // Use a regular expression to allow only digits and limit the length to 10 digits
    const formattedPhoneNumber = value.replace(/\D/g, '').slice(0, 10);
    setPhoneNumber(formattedPhoneNumber);
  };

  return (
    <div>
      <label>Phone Number:</label>
      <input
        type="tel"
        name="phoneNumber"
        value={phoneNumber}
        onChange={handleChange}
        placeholder="Enter your phone number"
      />
    </div>
  );
};

export default ValidationLogin;
