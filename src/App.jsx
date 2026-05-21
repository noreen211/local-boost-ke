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
              Creators
            </a>

            <a href="#" className="hover:text-emerald-400 transition duration-300">
              Contact
            </a>

          </div>

          <a
            href="https://wa.me/254734006916"
            className="px-7 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-400 text-white font-semibold shadow-2xl shadow-blue-500/20 hover:scale-105 transition duration-300"
          >
            Let's Talk
          </a>

        </div>

      </nav>

      {/* HERO */}

      <section className="relative pt-40 px-6 lg:px-20 pb-28">

        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[140px] rounded-full"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <div className="inline-block px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 mb-8">
              Nairobi's Premium Digital Growth Agency
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

      {/* CREATOR PROGRAM */}

      <section className="px-6 lg:px-20 pb-28">

        <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-12 backdrop-blur-xl">

          <div className="text-center mb-14">

            <p className="text-emerald-400 uppercase tracking-[4px] text-sm mb-4">
              Creator Partnership Program
            </p>

            <h2 className="text-5xl font-bold mb-6">
              Earn With Local Boost Ke
            </h2>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Join our creator network and earn commissions by referring businesses to Local Boost Ke.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">

            <div className="bg-[#081028] rounded-3xl p-8 border border-white/5">

              <h3 className="text-3xl font-semibold mb-8">
                Creator Benefits
              </h3>

              <div className="space-y-5 text-gray-300 text-lg">

                <p>✔ Earn Ksh 500 per Starter Package referral</p>
                <p>✔ Earn 20% commission on premium packages</p>
                <p>✔ Get your own creator referral code</p>
                <p>✔ Fast payouts after successful sales</p>
                <p>✔ Work remotely from anywhere</p>

              </div>

            </div>

            <div className="bg-[#081028] rounded-3xl p-8 border border-white/5">

              <h3 className="text-3xl font-semibold mb-8">
                Apply As Creator
              </h3>

              <form
                action="https://docs.google.com/forms/d/e/1FAIpQLScyoec6tpWh7i9sT4oLchrJjnqDuOufWwblnhqxoXtCst618w/formResponse"
                method="POST"
                className="space-y-5"
              >

                <input
                  type="text"
                  name="entry.545798751"
                  placeholder="Full Name"
                  required
                  className="w-full bg-[#020617] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-emerald-400"
                />

                <input
                  type="text"
                  name="entry.1137478223"
                  placeholder="Instagram Username"
                  required
                  className="w-full bg-[#020617] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-emerald-400"
                />

                <input
                  type="text"
                  name="entry.1836801454"
                  placeholder="TikTok Username"
                  required
                  className="w-full bg-[#020617] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-emerald-400"
                />

                <input
                  type="text"
                  name="entry.1462881790"
                  placeholder="Phone Number"
                  required
                  className="w-full bg-[#020617] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-emerald-400"
                />

                <select
                  name="entry.2050320178"
                  required
                  className="w-full bg-[#020617] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-emerald-400"
                >
                  <option value="">Select Content Niche</option>
                  <option value="Business">Business</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Tech">Tech</option>
                  <option value="Beauty">Beauty</option>
                  <option value="Other">Other</option>
                </select>

                <input
                  type="text"
                  name="entry.1189225899"
                  placeholder="Total Followers"
                  required
                  className="w-full bg-[#020617] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-emerald-400"
                />

                <textarea
                  name="entry.971559874"
                  placeholder="Why would you like to join Local Boost Ke?"
                  rows="5"
                  required
                  className="w-full bg-[#020617] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-emerald-400 resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-400 text-white font-semibold shadow-2xl shadow-blue-500/20 hover:scale-[1.02] transition duration-300"
                >
                  Submit Application
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section className="px-6 lg:px-20 pb-24">

        <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-12 backdrop-blur-xl">

          <div className="text-center mb-14">

            <p className="text-emerald-400 uppercase tracking-[4px] text-sm mb-4">
              Contact Us
            </p>

            <h2 className="text-5xl font-bold mb-6">
              Let's Build Your Brand
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#081028] rounded-3xl p-8 border border-white/5">

              <p className="text-emerald-400 text-sm mb-3">
                WHATSAPP
              </p>

              <h3 className="text-2xl font-semibold">
                +254734006916
              </h3>

            </div>

            <div className="bg-[#081028] rounded-3xl p-8 border border-white/5">

              <p className="text-emerald-400 text-sm mb-3">
                EMAIL
              </p>

              <h3 className="text-xl font-semibold break-all">
                localboostke@gmail.com
              </h3>

            </div>

            <div className="bg-[#081028] rounded-3xl p-8 border border-white/5">

              <p className="text-emerald-400 text-sm mb-3">
                INSTAGRAM
              </p>

              <h3 className="text-2xl font-semibold">
                @localboostke
              </h3>

            </div>

          </div>

        </div>

      </section>

      {/* FLOATING BUTTON */}

      <a
        href="https://wa.me/254734006916"
        className="fixed bottom-6 right-6 z-50 px-6 py-4 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 text-white font-semibold shadow-2xl shadow-blue-500/30 hover:scale-110 transition duration-300"
      >
        WhatsApp Us
      </a>

    </div>
  )
}