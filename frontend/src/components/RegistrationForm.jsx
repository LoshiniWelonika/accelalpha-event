import { useState } from 'react';

function RegistrationForm() {
  const [form, setForm] = useState({ name: '', email: '', focus: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [inviteResponse, setInviteResponse] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const apiBaseUrl = (import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:5000').replace(/\/$/, '');

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(`${apiBaseUrl}/generate-invite`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unable to submit registration. Please try again.');
      }

      setInviteResponse(data);
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error.message || 'Unable to submit registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  function resetForm() {
    setForm({ name: '', email: '', focus: '' });
    setSubmitError('');
    setSubmitted(false);
    setInviteResponse(null);
  }

  if (submitted) {
    return (
      <div className="register-card register-card--success text-center">
        <h3 className="register-card-title mb-2">Registration Received</h3>
        <p className="register-card-copy">Your invitation draft has been generated successfully.</p>
        {inviteResponse?.matched_session && (
          <p className="register-card-copy register-card-copy--result">
            <strong>Recommended Session:</strong> {inviteResponse.matched_session}
          </p>
        )}
        <button type="button" onClick={resetForm} className="register-reset">Submit Another Response</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="register-card register-card--form">
      <h3 className="register-card-title">Register for the Summit</h3>

      <div className="register-grid">
        <label className="register-field">
          <span className="register-label">Full Name</span>
          <input name="name" placeholder="John Doe" required value={form.name} onChange={handleChange} className="register-input" />
        </label>

        <label className="register-field">
          <span className="register-label">Corporate Email</span>
          <input name="email" type="email" placeholder="john@company.com" required value={form.email} onChange={handleChange} className="register-input" />
        </label>

        <label className="register-field register-field--full">
          <span className="register-label">Supply Chain Focus</span>
          <textarea
            name="focus"
            placeholder="Tell us what topic interests you most (for example: demand planning, logistics resilience, or sustainability)."
            required
            value={form.focus}
            onChange={handleChange}
            className="register-input register-textarea"
          />
        </label>
      </div>

      {submitError && <p className="register-error">{submitError}</p>}

      <button type="submit" className="register-submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Confirm Registration'}
      </button>
      <button type="button" onClick={resetForm} className="register-reset" disabled={isSubmitting}>
        Reset
      </button>
    </form>
  );
}

export default RegistrationForm;