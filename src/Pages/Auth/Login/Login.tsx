import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

export const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = (): FormErrors => {
    const formErrors: FormErrors = {};
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.password) formErrors.password = 'Password is required';
    return formErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form data submitted: ', formData);
      // Perform sign-in logic here
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="signin-form-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit">Sign In</button>
      </form>
      <div>
        <Navbar.Brand as={Link} to="/register">
          Create New User?
        </Navbar.Brand>
      </div>
    </div>
  );
};
