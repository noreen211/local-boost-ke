import logo from './assets/logo.png'

export default function LocalBoostKeWebsite() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white font-sans">
      <nav className="flex items-center justify-between px-6 lg:px-12 py-6 border-b border-white/10 bg-black/30 backdrop-blur-xl sticky top-0 z-50">
  <div className="flex items-center gap-3">
    <img
      src={logo}
      alt="Local Boost Ke"
      className="h-24 w-auto"
    />
  </div>

  <div className="hidden md:flex items-center gap-8 text-gray-300">
    <a href="#" className="hover:text-yellow-400 transition">
      Home
    </a>

    <a href="#" className="hover:text-yellow-400 transition">
      Services
    </a>

    <a href="#" className="hover:text-yellow-400 transition">
      About
    </a>

    <a href="#" className="hover:text-yellow-400 transition">
      Contact
    </a>
  </div>

  <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-300 text-black font-semibold hover:scale-105 transition">
    Get Started
  </button>
</nav>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#101828] via-[#0b0f1a] to-[#111827] opacity-95"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
                <span className="text-sm tracking-wide text-gray-300">
                  Digital Marketing • Branding • Growth
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                Elevate Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-200">
                  Local Brand.
                </span>
              </h1>

              <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-xl">
                Local Boost Ke helps Kenyan businesses grow online through
                premium branding, social media management, content creation,
                and high-converting digital marketing strategies.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-300 text-black font-semibold shadow-2xl hover:scale-105 transition-transform duration-300">
                  Book a Free Consultation
                </button>

                <button className="px-8 py-4 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-300">
                  View Services
                </button>
              </div>

              <div className="mt-12 flex items-center gap-8 text-sm text-gray-400">
                <div>
                  <h3 className="text-2xl font-bold text-white">50+</h3>
                  <p>Brands Boosted</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">98%</h3>
                  <p>Client Satisfaction</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">24/7</h3>
                  <p>Support</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"></div>

              <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-5">
                  <div className="bg-[#111827] rounded-3xl p-6 border border-white/5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-300 mb-5"></div>
                    <h3 className="text-xl font-semibold mb-2">Social Media</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Premium content & audience growth strategies.
                    </p>
                  </div>

                  <div className="bg-[#111827] rounded-3xl p-6 border border-white/5 mt-10">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-300 mb-5"></div>
                    <h3 className="text-xl font-semibold mb-2">Brand Identity</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Elegant visuals that position your brand professionally.
                    </p>
                  </div>

                  <div className="bg-[#111827] rounded-3xl p-6 border border-white/5 -mt-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-300 mb-5"></div>
                    <h3 className="text-xl font-semibold mb-2">Web Design</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Clean modern websites built to convert visitors.
                    </p>
                  </div>

                  <div className="bg-[#111827] rounded-3xl p-6 border border-white/5 mt-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-300 mb-5"></div>
                    <h3 className="text-xl font-semibold mb-2">Advertising</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Smart campaigns that generate measurable results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
            Our Services
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Everything Your Business Needs
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Website Development",
            "SEO Optimization",
            "Social Media Management",
            "Business Branding",
            "Meta Ads",
          
            
            
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:-translate-y-2 hover:border-yellow-400/30 transition duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-300 mb-6"></div>
              <h3 className="text-xl font-semibold leading-snug">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white/[0.03] border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
              Why Local Boost Ke
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              We Build Brands That Stand Out.
            </h2>

            <p className="mt-8 text-gray-300 text-lg leading-relaxed">
              We combine modern design, powerful storytelling, and strategic
              digital marketing to help local businesses attract attention,
              build trust, and increase sales.
            </p>
          </div>

          <div className="space-y-6">
            {[
              "Premium modern branding",
              "Results-driven marketing strategies",
              "Fast communication & support",
              "Tailored solutions for Kenyan businesses",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-5"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-300 flex items-center justify-center text-black font-bold">
                  ✓
                </div>
                <p className="text-lg text-gray-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="relative overflow-hidden bg-gradient-to-r from-yellow-400 to-amber-300 rounded-[40px] p-12 lg:p-16 text-black text-center shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>

          <div className="relative">
            <p className="uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Ready To Grow?
            </p>

            <h2 className="text-4xl lg:text-6xl font-bold leading-tight max-w-3xl mx-auto">
              Let’s Take Your Brand To The Next Level.
            </h2>

            <p className="mt-6 text-lg max-w-2xl mx-auto text-black/80">
              Whether you're a startup or an established business, Local Boost
              Ke is ready to help you dominate your online presence.
            </p>

            <button className="mt-10 px-10 py-4 bg-black text-white rounded-2xl font-semibold hover:scale-105 transition-transform duration-300 shadow-xl">
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-20 py-20">
  <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">
    
    <h2 className="text-4xl font-bold mb-8 text-center">
      Contact Local Boost Ke
    </h2>

    <div className="space-y-6 text-center text-gray-300 text-lg">

      <p>
        📞 WhatsApp: +254734006916
      </p>

      <p>
        📧 localboostke@gmail.com
      </p>

      <p>
        📸 Instagram: @localboostke
      </p>

      <p>
        🌍 Nairobi, Kenya
      </p>

    </div>

    <div className="flex justify-center mt-10">
      <a
        href="https://wa.me/254734006916"
        target="_blank"
        className="px-8 py-4 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold hover:scale-105 transition"
      >
        Chat on WhatsApp
      </a>
    </div>

  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 text-center text-gray-500 text-sm px-6">
        © 2026 Local Boost Ke. All rights reserved.
      </footer>
    </div>
  );
}

