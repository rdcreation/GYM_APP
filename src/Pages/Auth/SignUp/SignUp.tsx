import React, { useState, ChangeEvent, FormEvent } from "react";
import "./SignUp.css";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

interface FormData {
  username: string;
  email: string;
  password: string;
}

interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
}

export const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = (): FormErrors => {
    const formErrors: FormErrors = {};
    if (!formData.username) formErrors.username = "Username is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.password) formErrors.password = "Password is required";
    return formErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form data submitted: ", formData);
      // Perform sign-up logic here
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
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
        <button type="submit">Sign Up</button>
      </form>
      <div>
        <Navbar.Brand as={Link} to="/login">
          Login?
        </Navbar.Brand>
      </div>
    </div>
  );
};
