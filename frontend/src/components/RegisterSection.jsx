import RegistrationForm from './RegistrationForm';

function RegisterSection() {
  return (
    <section id="register" className="register-section py-20 animate-on-scroll">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop register-shell">
        <div className="register-copy">
          <h2 className="register-heading">Secure Your Place at the Forefront of Logistics</h2>
          <p className="register-description">
            Registration provides full access to sessions, networking luncheons, and the post-event digital knowledge hub.
          </p>

          <div className="register-divider" />

          <div className="register-partners">
            <div className="register-section-label">Summit Partners</div>
            <div className="register-logos">
              <div className="register-logo"><span className="material-symbols-outlined">cloud</span><span>Oracle</span></div>
              <div className="register-logo"><span className="material-symbols-outlined">rocket_launch</span><span>Accelalpha</span></div>
            </div>
          </div>

          <div className="register-stats">
            <div className="register-stat">
              <div className="register-stat-value">1200+</div>
              <div className="register-stat-label">Delegates</div>
            </div>
            <div className="register-stat">
              <div className="register-stat-value">45+</div>
              <div className="register-stat-label">Countries</div>
            </div>
          </div>
        </div>

        <RegistrationForm />
      </div>
    </section>
  );
}

export default RegisterSection;