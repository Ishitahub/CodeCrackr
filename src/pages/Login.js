import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/practice');
      } else {
        setError(data.msg || 'Login failed');
      }
    } catch {
      setError('Network error');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Login</h2>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required className="auth-input"/>
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required  className="auth-input"/>
        <button type="submit" className="auth-button" >Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
