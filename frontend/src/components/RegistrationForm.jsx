import { useState } from 'react';

function RegistrationForm() {
  const [form, setForm] = useState({ fullName: '', jobTitle: '', company: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Registration', form);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="register-card register-card--success text-center">
        <h3 className="register-card-title mb-2">Registration Received</h3>
        <p className="register-card-copy">Thank you — we'll be in touch with event details shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="register-card register-card--form">
      <h3 className="register-card-title">Register for the Summit</h3>

      <div className="register-grid">
        <label className="register-field">
          <span className="register-label">Full Name</span>
          <input name="fullName" placeholder="John Doe" required value={form.fullName} onChange={handleChange} className="register-input" />
        </label>

        <label className="register-field">
          <span className="register-label">Corporate Email</span>
          <input name="email" type="email" placeholder="john@company.com" required value={form.email} onChange={handleChange} className="register-input" />
        </label>

        <label className="register-field">
          <span className="register-label">Job Title</span>
          <input name="jobTitle" placeholder="Logistics Manager" required value={form.jobTitle} onChange={handleChange} className="register-input" />
        </label>

        <label className="register-field">
          <span className="register-label">Company</span>
          <input name="company" placeholder="Global Logistics Inc." required value={form.company} onChange={handleChange} className="register-input" />
        </label>

        <label className="register-field register-field--full">
          <span className="register-label">Phone Number</span>
          <input name="phone" placeholder="+971 50 000 0000" required value={form.phone} onChange={handleChange} className="register-input" />
        </label>
      </div>

      <button type="submit" className="register-submit">Confirm Registration</button>
      <button type="button" onClick={() => setForm({ fullName: '', jobTitle: '', company: '', phone: '', email: '' })} className="register-reset">
        Reset
      </button>
    </form>
  );
}

export default RegistrationForm;