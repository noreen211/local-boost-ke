import logo from './assets/logo.png'

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden">

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-[#020617]/80 border-b border-white/5">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">

          <div className="flex items-center overflow-hidden">
            <img
              src={logo}
              alt="Local Boost Ke"
              className="h-14 w-auto object-contain"
            />
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm tracking-wide text-gray-300 font-medium">

            <a href="#" className="hover:text-emerald-400 transition duration-300">
              Home
            </a>

            <a href="#" className="hover:text-emerald-400 transition duration-300">
              Services
            </a>

            <a href="#" className="hover:text-emerald-400 transition duration-300">
              Pricing
            </a>

            <a href="#" className="hover:text-emerald-400 transition duration-300">
              Contact
            </a>

          </div>

          <a
            href="https://wa.me/254734006916"
            target="_blank"
            className="px-7 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-400 text-white font-semibold shadow-2xl shadow-blue-500/20 hover:scale-105 transition duration-300"
          >
            Let&apos;s Talk
          </a>

        </div>

      </nav>

      {/* HERO */}

      <section className="relative pt-40 px-6 lg:px-20 pb-28">

        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[140px] rounded-full"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <div className="inline-block px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 mb-8">
              Nairobi&apos;s Premium Digital Growth Agency
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">

              Elevate Your

              <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Local Brand.
              </span>

            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10">

              Local Boost Ke helps businesses grow online through premium web development, branding, social media management and high-converting Meta Ads strategies.

            </p>

            <div className="grid grid-cols-3 gap-8 mt-14">

              <div>
                <h2 className="text-3xl font-bold text-emerald-400">
                  Web
                </h2>

                <p className="text-gray-400 mt-2">
                  Development
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-emerald-400">
                  Meta
                </h2>

                <p className="text-gray-400 mt-2">
                  Ads
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-emerald-400">
                  Brand
                </h2>

                <p className="text-gray-400 mt-2">
                  Strategy
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-400/10 blur-3xl rounded-[40px]"></div>

            <div className="relative bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-xl grid grid-cols-2 gap-6">

              <div className="bg-[#081028] rounded-3xl p-8 hover:-translate-y-2 transition duration-300">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-400 mb-8"></div>

                <h3 className="text-2xl font-semibold mb-4">
                  Web Development
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Modern high-converting websites built for businesses ready to grow.
                </p>

              </div>

              <div className="bg-[#081028] rounded-3xl p-8 mt-10 hover:-translate-y-2 transition duration-300">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-400 mb-8"></div>

                <h3 className="text-2xl font-semibold mb-4">
                  Branding
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Elegant brand identity systems designed to stand out professionally.
                </p>

              </div>

              <div className="bg-[#081028] rounded-3xl p-8 hover:-translate-y-2 transition duration-300">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-400 mb-8"></div>

                <h3 className="text-2xl font-semibold mb-4">
                  Social Media
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Premium content strategies that grow engagement and visibility.
                </p>

              </div>

              <div className="bg-[#081028] rounded-3xl p-8 mt-10 hover:-translate-y-2 transition duration-300">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-400 mb-8"></div>

                <h3 className="text-2xl font-semibold mb-4">
                  Meta Ads
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Smart advertising campaigns designed for measurable business growth.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* WEBSITE PACKAGES */}

      <section className="px-6 lg:px-20 pb-28">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-emerald-400 uppercase tracking-[4px] text-sm mb-4">
              Website Packages
            </p>

            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Professional Websites For Every Business
            </h2>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Whether you&apos;re starting small or building a premium brand, Local Boost Ke creates modern websites designed to help your business grow online professionally.
            </p>

          </div>

          <div className="grid lg:grid-cols-4 gap-10 items-stretch">

            {/* STARTER */}

            <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-xl hover:-translate-y-2 transition duration-300">

              <p className="text-emerald-400 font-semibold mb-4">
                STARTER PACKAGE
              </p>

              <h3 className="text-5xl font-bold mb-6">
                Ksh 3,500
              </h3>

              <p className="text-gray-400 mb-8 leading-relaxed">
                Perfect for startups and small businesses that need a clean professional online presence.
              </p>

              <div className="space-y-4 text-gray-300 mb-10">

                <p>✔ 1 Premium Landing Page</p>
                <p>✔ Mobile Friendly Design</p>
                <p>✔ WhatsApp Chat Button</p>
                <p>✔ Services Display</p>
                <p>✔ Social Media Links</p>
                <p>✔ Basic SEO Setup</p>
                <p>✔ Fast Delivery</p>

              </div>

              <a
                href="https://wa.me/254734006916"
                target="_blank"
                className="block text-center px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-400 font-semibold hover:scale-105 transition duration-300"
              >
                Get Started
              </a>

            </div>

            {/* BUSINESS */}

            <div className="relative bg-gradient-to-b from-blue-500/25 to-emerald-400/10 border border-emerald-400/40 rounded-[40px] p-8 backdrop-blur-xl hover:-translate-y-2 transition duration-300 scale-[1.03] shadow-2xl shadow-emerald-500/10">

              <div className="absolute top-5 right-5 bg-emerald-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>

              <p className="text-emerald-400 font-semibold mb-4">
                BUSINESS PACKAGE
              </p>

              <h3 className="text-5xl font-bold mb-6">
                Ksh 10,000
              </h3>

              <p className="text-gray-300 mb-8 leading-relaxed">
                Ideal for growing businesses that need a stronger premium online setup.
              </p>

              <div className="space-y-4 text-gray-200 mb-10">

                <p>✔ Up To 5 Custom Pages</p>
                <p>✔ Premium Modern Design</p>
                <p>✔ Contact Forms</p>
                <p>✔ Gallery / Portfolio</p>
                <p>✔ Booking System</p>
                <p>✔ Google Maps Integration</p>
                <p>✔ SEO Optimization</p>
                <p>✔ 14 Days Free Support</p>

              </div>

              <a
                href="https://wa.me/254734006916"
                target="_blank"
                className="block text-center px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-400 font-semibold hover:scale-105 transition duration-300"
              >
                Choose Package
              </a>

            </div>

            {/* PREMIUM */}

            <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-xl hover:-translate-y-2 transition duration-300">

              <p className="text-emerald-400 font-semibold mb-4">
                PREMIUM BRAND
              </p>

              <h3 className="text-5xl font-bold mb-6">
                Ksh 25,000
              </h3>

              <p className="text-gray-400 mb-8 leading-relaxed">
                Designed for brands that want a luxury high-end digital experience.
              </p>

              <div className="space-y-4 text-gray-300 mb-10">

                <p>✔ Advanced Custom Design</p>
                <p>✔ Smooth Animations</p>
                <p>✔ Premium Brand Styling</p>
                <p>✔ Interactive Sections</p>
                <p>✔ Blog / News Setup</p>
                <p>✔ Advanced SEO</p>
                <p>✔ Priority Support</p>

              </div>

              <a
                href="https://wa.me/254734006916"
                target="_blank"
                className="block text-center px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-400 font-semibold hover:scale-105 transition duration-300"
              >
                Upgrade Brand
              </a>

            </div>

            {/* ECOMMERCE */}

            <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-xl hover:-translate-y-2 transition duration-300">

              <p className="text-emerald-400 font-semibold mb-4">
                ECOMMERCE / CUSTOM
              </p>

              <h3 className="text-5xl font-bold mb-6">
                From 50K
              </h3>

              <p className="text-gray-400 mb-8 leading-relaxed">
                Built for businesses that need advanced functionality and scalable online systems.
              </p>

              <div className="space-y-4 text-gray-300 mb-10">

                <p>✔ Full Online Store</p>
                <p>✔ M-PESA Integration</p>
                <p>✔ Shopping Cart & Checkout</p>
                <p>✔ Dashboard Features</p>
                <p>✔ Login Systems</p>
                <p>✔ Custom Functionality</p>
                <p>✔ Ongoing Technical Support</p>

              </div>

              <a
                href="https://wa.me/254734006916"
                target="_blank"
                className="block text-center px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-400 font-semibold hover:scale-105 transition duration-300"
              >
                Build Custom Site
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* CREATOR PARTNERSHIP PROGRAM */}

      <section className="px-6 lg:px-20 pb-28">

        <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-12 backdrop-blur-xl relative overflow-hidden">

          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

          <div className="relative z-10">

            <div className="text-center mb-14">

              <p className="text-emerald-400 uppercase tracking-[4px] text-sm mb-4">
                Creator Partnership Program
              </p>

              <h2 className="text-5xl font-bold mb-6">
                Earn By Promoting Local Boost Ke
              </h2>

              <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                Content creators and influencers can earn commissions by referring clients to Local Boost Ke while helping businesses grow online.
              </p>

            </div>

            <div className="grid md:grid-cols-2 gap-8">

              <div className="bg-[#081028] border border-white/5 rounded-3xl p-8">

                <h3 className="text-2xl font-semibold mb-6">
                  Partnership Benefits
                </h3>

                <div className="space-y-5 text-gray-300">

                  <p>✔ Earn Ksh 500 for every successful 3,500 package referral</p>

                  <p>✔ Earn 20% commission on premium packages</p>

                  <p>✔ Fast payouts</p>

                  <p>✔ Receive your own referral code</p>

                  <p>✔ Work remotely from anywhere</p>

                </div>

              </div>

              <div className="bg-[#081028] border border-white/5 rounded-3xl p-8">

                <h3 className="text-2xl font-semibold mb-6">
                  Creator Application
                </h3>

                <form
                  action="mailto:localboostke@gmail.com"
                  method="POST"
                  encType="text/plain"
                  className="space-y-5"
                >

                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="w-full bg-[#020617] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-emerald-400"
                  />

                  <input
                    type="text"
                    placeholder="TikTok or Instagram Username"
                    required
                    className="w-full bg-[#020617] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-emerald-400"
                  />

                  <input
                    type="text"
                    placeholder="Number of Followers"
                    required
                    className="w-full bg-[#020617] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-emerald-400"
                  />

                  <input
                    type="text"
                    placeholder="Content Niche"
                    required
                    className="w-full bg-[#020617] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-emerald-400"
                  />

                  <button
                    type="submit"
                    className="w-full px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-400 text-white font-semibold shadow-2xl shadow-blue-500/20 hover:scale-[1.02] transition duration-300"
                  >
                    Apply As Creator
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section className="px-6 lg:px-20 pb-28">

        <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-12 backdrop-blur-xl relative overflow-hidden">

          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-400/10 blur-[120px] rounded-full"></div>

          <div className="relative z-10">

            <h2 className="text-5xl font-bold text-center mb-14">
              Contact Local Boost Ke
            </h2>

            <div className="grid md:grid-cols-2 gap-10 text-lg text-gray-300">

              <div className="bg-[#081028] border border-white/5 rounded-3xl p-8">
                <p className="text-emerald-400 text-sm mb-2">WHATSAPP</p>
                <p className="text-2xl font-semibold">
                  +254734006916
                </p>
              </div>

              <div className="bg-[#081028] border border-white/5 rounded-3xl p-8">
                <p className="text-emerald-400 text-sm mb-2">EMAIL</p>
                <p className="text-2xl font-semibold break-all">
                  localboostke@gmail.com
                </p>
              </div>

              <div className="bg-[#081028] border border-white/5 rounded-3xl p-8">
                <p className="text-emerald-400 text-sm mb-2">INSTAGRAM</p>
                <p className="text-2xl font-semibold">
                  @localboostke
                </p>
              </div>

              <div className="bg-[#081028] border border-white/5 rounded-3xl p-8">
                <p className="text-emerald-400 text-sm mb-2">LOCATION</p>
                <p className="text-2xl font-semibold">
                  Nairobi, Kenya
                </p>
              </div>

            </div>

            <div className="flex justify-center mt-14">

              <a
                href="https://wa.me/254734006916"
                target="_blank"
                className="px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-400 text-white font-bold text-lg hover:scale-105 transition duration-300 shadow-2xl shadow-blue-500/20"
              >
                Chat on WhatsApp
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* FLOATING WHATSAPP BUTTON */}

      <a
        href="https://wa.me/254734006916"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-500 to-emerald-400 text-white px-6 py-4 rounded-full shadow-2xl shadow-blue-500/30 transition duration-300 hover:scale-110"
      >
        WhatsApp Us
      </a>

    </div>
  )
}