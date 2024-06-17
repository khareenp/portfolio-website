import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  // Initialize state to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input change event
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update form data state with the new value
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Handle form submission logic here (e.g., send data to a server)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      {/* Contact form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required // Make the field required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required // Make the field required
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required // Make the field required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
