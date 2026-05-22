import "./App.css";
import { useState } from "react";

export default function App() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {

      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLScyoec6tpWh7i9sT4oLchrJjnqDuOufWwblnhqxoXtCst618w/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      setSubmitted(true);
      e.target.reset();

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="app">

      <header className="navbar">

        <div className="logo">
          <img src="/logo.png" alt="Local Boost KE" />
        </div>

      </header>

      <section className="hero">

        <div className="hero-content">

          <h1>
            Fast websites and branding for growing businesses
          </h1>

          <p>
            We help Kenyan businesses build a premium online presence with
            modern websites, branding and digital growth solutions.
          </p>

          <div className="hero-buttons">

            <a href="#packages" className="primary-btn">
              Packages
            </a>

            <a href="#creator-form" className="partner-btn">
              Become Partner
            </a>

          </div>

          <div className="contact-links">

            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              Chat on WhatsApp
            </a>

            <a
              href="mailto:hello@localboostke.co.ke"
              className="email-btn"
            >
              Email Us
            </a>

          </div>

        </div>

      </section>

      <section className="services">

        <div className="service-card">
          <h3>Website Development</h3>
          <p>
            Fast modern websites designed to help businesses look trusted and
            premium online.
          </p>
        </div>

        <div className="service-card">
          <h3>Branding</h3>
          <p>
            Clean visual identity systems and digital branding for modern
            businesses.
          </p>
        </div>

        <div className="service-card">
          <h3>Meta Ads</h3>
          <p>
            Strategic Meta advertising campaigns built to increase visibility
            and attract customers.
          </p>
        </div>

      </section>

      <section className="packages" id="packages">

        <h2>Packages</h2>

        <div className="package-grid">

          <div className="package-card">

            <h3>Starter</h3>

            <h1>KSh 3,500</h1>

            <p>
              Single landing page website for small businesses and startups.
            </p>

          </div>

          <div className="package-card featured">

            <h3>Business</h3>

            <h1>KSh 25K</h1>

            <p>
              Full premium business website with branding and lead generation
              setup.
            </p>

          </div>

          <div className="package-card">

            <h3>Custom</h3>

            <h1>KSh 50K+</h1>

            <p>
              Advanced custom business solutions and scaling packages.
            </p>

          </div>

        </div>

      </section>

      <section className="creator-section" id="creator-form">

        <h2>Creator Partner Program</h2>

        <p>
          Join our creator network and earn commissions by referring businesses
          to Local Boost KE.
        </p>

        {

          submitted ? (

            <div className="success-message">
              Application submitted successfully.
            </div>

          ) : (

            <form onSubmit={handleSubmit} className="creator-form">

              <input
                type="text"
                name="entry.2005620554"
                placeholder="Your Name"
                required
              />

              <input
                type="text"
                name="entry.1045781291"
                placeholder="Instagram Username"
                required
              />

              <input
                type="number"
                name="entry.1166974658"
                placeholder="Followers"
                required
              />

              <input
                type="text"
                name="entry.839337160"
                placeholder="Referral Code (Optional)"
              />

              <button type="submit">
                Submit Application
              </button>

            </form>

          )

        }

      </section>

      <footer>
        © 2026 Local Boost KE. All rights reserved.
      </footer>

    </div>

  );

}