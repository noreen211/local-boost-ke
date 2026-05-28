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

        <img
          src="/logo.png"
          alt="Local Boost KE"
          className="logo"
        />

      </header>

      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <h1>
            Modern websites and mobile applications built for business growth
          </h1>

          <p>
            We help Kenyan businesses build online brands with modern
            websites, strategic design and digital growth solutions.
          </p>

          <div className="hero-buttons">

            <a href="#packages" className="primary-btn">
              View Packages
            </a>

            <a href="#creator-form" className="partner-btn">
              Become Partner
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
            Modern visual identity systems and digital branding for ambitious
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

        <h2>Website Packages</h2>

        <div className="package-grid">

          <div className="package-card">

            <h3>Starter Website Package</h3>

            <h1>KSh 3,500</h1>

            <ul>
              <li>✅ 1 Landing Page</li>
              <li>✅ Mobile Friendly Design</li>
              <li>✅ WhatsApp Chat Button</li>
              <li>✅ Business Information Section</li>
              <li>✅ Product / Services Display</li>
              <li>✅ Social Media Links</li>
              <li>✅ Basic SEO Setup</li>
              <li>✅ Fast Delivery</li>
              <li>✅ Free Minor Edits After Delivery</li>
            </ul>

          </div>

          <div className="package-card">

            

            <h3>Business Website Package</h3>

            <h1>KSh 10,000</h1>

            <ul>
              <li>✅ Up To 5 Custom Pages</li>
              <li>✅ Modern Design</li>
              <li>✅ Mobile & Tablet Optimization</li>
              <li>✅ Contact Forms</li>
              <li>✅ Gallery / Portfolio Sections</li>
              <li>✅ Booking or Inquiry System</li>
              <li>✅ Google Maps Integration</li>
              <li>✅ WhatsApp Integration</li>
              <li>✅ Faster Loading Speeds</li>
              <li>✅ Professional UI Layout</li>
              <li>✅ SEO Optimization</li>
              <li>✅ 14 Days Free Support</li>
            </ul>

          </div>

          <div className="package-card featured">

            
            <div className="popular-tag">
              MOST POPULAR
            </div>

            <h3>Premium Brand Website</h3>

            <h1>KSh 25,000</h1>

            <ul>
              <li>✅ Everything In Business Package</li>
              <li>✅ Advanced Custom Design</li>
              <li>✅ Smooth Animations & Transitions</li>
              <li>✅ Premium Brand Styling</li>
              <li>✅ Advanced Booking Systems</li>
              <li>✅ Interactive Sections</li>
              <li>✅ Blog / News Setup</li>
              <li>✅ Advanced SEO Structure</li>
              <li>✅ Priority Support</li>
              <li>✅ Performance Optimization</li>
              <li>✅ User Experience Design</li>
              <li>✅ Brand Consultation</li>
            </ul>

          </div>

          <div className="package-card">

            <h3>Ecommerce / Custom Website</h3>

            <h1>From KSh 85,000</h1>

            <ul>
              <li>✅ Full Online Store Setup</li>
              <li>✅ M-PESA Integration</li>
              <li>✅ Product Management System</li>
              <li>✅ Customer Order System</li>
              <li>✅ Shopping Cart & Checkout</li>
              <li>✅ Inventory Management</li>
              <li>✅ User Accounts / Login Systems</li>
              <li>✅ Dashboard Features</li>
              <li>✅ Advanced Integrations</li>
              <li>✅ Custom Functionality</li>
              <li>✅ UI/UX Design</li>
              <li>✅ Security Optimization</li>
              <li>✅ Ongoing Technical Support</li>
            </ul>

          </div>
          <div className="package-card">

  <h3>Mobile App Development</h3>

  <h1>From KSh 120,000</h1>

  <ul>
    <li>✅ Android & iOS App Development</li>
    <li>✅ Custom UI/UX Design</li>
    <li>✅ User Authentication Systems</li>
    <li>✅ API & Database Integration</li>
    <li>✅ Admin Dashboard Systems</li>
    <li>✅ Push Notifications</li>
    <li>✅ Advanced App Functionality</li>
    <li>✅ Play Store Deployment Assistance</li>
    <li>✅ Performance Optimization</li>
    <li>✅ Ongoing Technical Support</li>
    <li>✅ Scalable Infrastructure Setup</li>
    <li>✅ Product Consultation</li>
  </ul>

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

        <div className="footer-contact">

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
            hello@localboostke.co.ke
          </a>

        </div>

        <p>
          © 2026 Local Boost KE. All rights reserved.
        </p>

      </footer>

    </div>

  );

}