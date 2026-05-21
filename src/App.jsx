import "./App.css";

export default function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Local Boost Ke" />
        </div>

        <a
          href="https://wa.me/254734006916"
          className="nav-btn"
        >
          Let's Talk
        </a>
      </nav>

      <section className="hero">
        <h1>
          Elevate Your <span>Business Online.</span>
        </h1>

        <p>
          Helping Kenyan businesses grow through premium web development,
          branding and Meta advertising.
        </p>

        <div className="hero-buttons">
          <a href="#packages" className="primary-btn">
            View Packages
          </a>

          <a href="#creator" className="secondary-btn">
            Become A Partner
          </a>
        </div>
      </section>

      <section className="services">
        <div className="services-container">

          <div className="service-card large-card">
            <h3>Web Development</h3>

            <p>
              Premium high-converting business websites built for modern brands.
            </p>
          </div>

          <div className="bottom-services">

            <div className="service-card">
              <h3>Branding</h3>

              <p>
                Elegant premium business identity systems.
              </p>
            </div>

            <div className="service-card">
              <h3>Meta Ads</h3>

              <p>
                Smart advertising campaigns focused on business growth.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="packages" id="packages">

        <h2 className="section-title">
          Website Packages
        </h2>

        <div className="package-grid">

          <div className="package-card">
            <h3>Starter Package</h3>

            <div className="price">
              Ksh 3,500
            </div>

            <ul>
              <li>✔ 1 Premium Landing Page</li>
              <li>✔ Mobile Friendly Design</li>
              <li>✔ WhatsApp Integration</li>
              <li>✔ Fast Delivery</li>
            </ul>
          </div>

          <div className="package-card">
            <h3>Business Package</h3>

            <div className="price">
              Ksh 10,000
            </div>

            <ul>
              <li>✔ Up To 5 Custom Pages</li>
              <li>✔ Booking System</li>
              <li>✔ SEO Optimization</li>
              <li>✔ Premium UI Layout</li>
            </ul>
          </div>

          <div className="package-card">
            <h3>Premium Brand</h3>

            <div className="price">
              Ksh 25,000
            </div>

            <ul>
              <li>✔ Advanced Custom Design</li>
              <li>✔ Smooth Animations</li>
              <li>✔ Priority Support</li>
              <li>✔ Interactive Sections</li>
            </ul>
          </div>

        </div>
      </section>

      <section className="creator-section" id="creator">

        <div className="creator-box">

          <div className="creator-content">

            <h2>
              Creator Partnership Program
            </h2>

            <p>
              Earn commissions by referring businesses to Local Boost Ke.
            </p>

            <div className="creator-benefits">
              <div>✔ Earn Ksh 500 per referral</div>
              <div>✔ Earn 20% commission on premium packages</div>
              <div>✔ Fast payouts after successful sales</div>
            </div>

          </div>

          <div className="form-container">

            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLScyoec6tpWh7i9sT4oLchrJjnqDuOufWwblnhqxoXtCst618w/formResponse"
              method="POST"
              target="hidden_iframe"
              className="creator-form"
            >

              <input
                type="text"
                name="entry.545798751"
                placeholder="Full Name"
                required
              />

              <input
                type="text"
                name="entry.1137478223"
                placeholder="Instagram Username"
                required
              />

              <input
                type="text"
                name="entry.1462881790"
                placeholder="Phone Number"
                required
              />

              <textarea
                name="entry.971559874"
                placeholder="Tell us about yourself"
                rows="5"
              ></textarea>

              <button type="submit">
                Apply Now
              </button>

            </form>

            <iframe
              name="hidden_iframe"
              style={{ display: "none" }}
              title="hidden"
            ></iframe>

          </div>

        </div>

      </section>

      <section className="contact">

        <h2>
          Ready To Grow Your Brand?
        </h2>

        <p>
          Let's build your premium online presence.
        </p>

        <a
          href="https://wa.me/254734006916"
          className="contact-btn"
        >
          Chat On WhatsApp
        </a>

      </section>

      <a
        href="https://wa.me/254734006916"
        className="whatsapp-float"
      >
        WhatsApp Us
      </a>

      <footer>
        © 2026 Local Boost Ke. All Rights Reserved.
      </footer>

    </>
  );
}

