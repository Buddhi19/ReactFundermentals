import React, { useState } from 'react';

const Upload = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/submitData', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log('Data submitted successfully:', responseData);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Upload;