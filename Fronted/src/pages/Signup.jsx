import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Code2, Eye, EyeOff, User, Mail, ShieldCheck } from 'lucide-react';
import './Auth.css';

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setMessage(null)
    try {
      const res = await axios.post('http://localhost:3000/user/register', form)
      if (res.data && res.data.token) {
        localStorage.setItem("token", res.data.token)
        setMessage(res.data.message || "Signup successful!")
        setTimeout(() => {
          navigate("/code");
        }, 800);
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error)
      } else {
        setError('Signup failed. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-glow"></div>
      
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">
            <Code2 size={24} />
            Codex<span>Reviewer</span>
          </div>
          <h2 className="auth-title">Create account</h2>
          <p style={{ color: "#71717a", fontSize: "0.875rem", marginTop: "0.5rem" }}>
            Join the elite code review platform.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <div className="input-wrapper">
              <input
                className="auth-input"
                placeholder='John Doe'
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <div className="input-wrapper">
              <input
                className="auth-input"
                placeholder='name@company.com'
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                className="auth-input"
                placeholder='••••••••'
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                minLength={6}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(v => !v)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <span style={{ fontSize: "0.75rem", color: "#52525b", marginTop: "0.25rem" }}>
              At least 6 characters required.
            </span>
          </div>

          <button
            type="submit"
            className="auth-submit"
            disabled={isLoading}
          >
            {isLoading ? "Creating account..." : "Start your journey"}
          </button>

          {(message || error) && (
            <div className={`auth-message ${error ? 'auth-error' : ''}`}>
              {message || error}
            </div>
          )}
        </form>

        <div className="auth-footer">
          Already have an account? 
          <Link to="/login" className="auth-link">Log in</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup