// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token); // Store JWT token
        //alert('Login successful');
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      alert('Error logging in');
    }
  };

  return (
    <div 
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(40, 13, 9)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />

      {/* Login Box */}
      <form 
        onSubmit={handleSubmit}
        style={{
          position: 'relative',
          zIndex: 2,
          backgroundColor: '#rgb(242, 240, 237)',
          padding: '2rem',
          borderRadius: '16px',
          boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
          width: '320px',
          textAlign: 'center',
        }}
      >
        <h2 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          color: '#000000'
        }}>
          LOGIN
        </h2>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '0.8rem',
            marginBottom: '1rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '14px',
          }}
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '0.8rem',
            marginBottom: '1.5rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '14px',
          }}
        />

        {/* Login Button */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.8rem 1.5rem',
            fontSize: '0.9rem', // Adjust font size for single-line text
            fontWeight: 'bold',
            border: '1px solid black',
            borderRadius: '50px',
            backgroundColor: 'transparent',
            color: 'black',
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'black';
            e.target.style.color = 'white';
        }}
        onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'black';
        }}
        >
          Login<span style={{ marginLeft: '0.5rem' }}>&#8594;</span>
        </button>
      </form>
    </div>
  );
};

export default Login;

