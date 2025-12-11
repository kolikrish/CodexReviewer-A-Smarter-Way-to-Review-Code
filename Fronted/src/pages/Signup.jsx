import React, { useState } from 'react'

const styles = {
  outer: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#18181b'
  },
  card: {
    width: '100%',
    maxWidth: '420px',
    padding: '2rem',
    background: '#23232b',
    borderRadius: '18px',
    boxShadow: '0 4px 24px 0 rgba(0,0,0,0.14)',
    border: '1px solid #333348'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#f3f4f6'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  label: {
    display: 'block',
    marginBottom: '0.25rem',
    color: '#d1d5db'
  },
  input: {
    width: '100%',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    background: '#101014',
    border: '1px solid #333348',
    color: '#f3f4f6',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box'
  },
  inputFocus: {
    outline: '2px solid #6366f1'
  },
  rel: {
    position: 'relative'
  },
  passwordButton: {
    position: 'absolute',
    right: '0.5rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#9ca3af',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0
  },
  passwordButtonHover: {
    color: '#f3f4f6'
  },
  small: {
    display: 'block',
    marginTop: '0.25rem',
    marginLeft: '0.25rem',
    fontSize: '0.8rem',
    color: '#6b7280'
  },
  submit: {
    width: '100%',
    padding: '0.5rem',
    marginTop: '0.5rem',
    borderRadius: '8px',
    background: '#6366f1',
    color: '#fff',
    fontWeight: '600',
    fontSize: '1.1rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.2s'
  },
  submitHover: {
    background: '#4338ca'
  },
  message: {
    marginTop: '0.5rem',
    textAlign: 'center',
    color: '#34d399',
    fontSize: '0.9rem'
  }
}

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    // TODO: Call signup API here
    // For now, just log form values.
    console.log(form)
  }

  return (
    <div style={styles.outer}>
      <div style={styles.card}>
        <h2 style={styles.title}>Sign Up</h2>
        <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
          <div>
            <label style={styles.label} htmlFor="name">
              Name
            </label>
            <input
              style={styles.input}
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label style={styles.label} htmlFor="email">
              Email
            </label>
            <input
              style={styles.input}
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label style={styles.label} htmlFor="password">
              Password
            </label>
            <div style={styles.rel}>
              <input
                style={{
                  ...styles.input, 
                  paddingRight: '2.5rem',
                  ...(passwordFocus ? styles.inputFocus : {})
                }}
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                autoComplete="new-password"
                value={form.password}
                onChange={handleChange}
                required
                minLength={6}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
              />
              <button
                type="button"
                tabIndex={-1}
                style={styles.passwordButton}
                onMouseOver={e => (e.currentTarget.style.color = styles.passwordButtonHover.color)}
                onMouseOut={e => (e.currentTarget.style.color = styles.passwordButton.color)}
                onClick={() => setShowPassword(v => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10a10 10 0 0117.657-7.071M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.341A8.98 8.98 0 0021 9c0-5.522-4.477-10-10-10a10 10 0 00-7.07 17.657" />
                  </svg>
                ) : (
                  <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.298.94-.73 1.827-1.272 2.642m-1.743 2.421C17.004 17.404 14.576 19 12 19c-2.576 0-5.004-1.596-6.527-3.937" />
                  </svg>
                )}
              </button>
            </div>
            <span style={styles.small}>At least 6 characters</span>
          </div>
          <button
            type="submit"
            style={styles.submit}
            onMouseOver={e => (e.currentTarget.style.background = styles.submitHover.background)}
            onMouseOut={e => (e.currentTarget.style.background = styles.submit.background)}
          >
            Sign Up
          </button>
          {submitted && (
            <div style={styles.message}>
              Signup successful! (Form data logged in console)
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default Signup