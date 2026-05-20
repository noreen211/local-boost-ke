import logo from './assets/logo.png'

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden">

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-[#020617]/70 border-b border-white/5">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">

          <div className="flex items-center">
            <img
              src={logo}
              alt="Local Boost Ke"
              className="h-28 w-auto object-contain"
            />
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm tracking-wide text-gray-300 font-medium">

            <a href="#" className="hover:text-yellow-400 transition duration-300">
              Home
            </a>

            <a href="#" className="hover:text-yellow-400 transition duration-300">
              Services
            </a>

            <a href="#" className="hover:text-yellow-400 transition duration-300">
              About
            </a>

            <a href="#" className="hover:text-yellow-400 transition duration-300">
              Contact
            </a>

          </div>

          <a
            href="https://wa.me/254734006916"
            target="_blank"
            className="px-7 py-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-300 text-black font-semibold shadow-2xl shadow-yellow-500/20 hover:scale-105 transition duration-300"
          >
            Let's Talk
          </a>

        </div>

      </nav>

      {/* HERO SECTION */}

      <section className="relative pt-44 px-6 lg:px-20 pb-24">

        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <div className="inline-block px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 mb-8">
              Nairobi’s Premium Digital Growth Agency
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">

              Elevate Your

              <span className="block text-yellow-400">
                Local Brand.
              </span>

            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10">

              Local Boost Ke helps businesses grow online through premium web development, branding, social media management and high-converting Meta Ads strategies.

            </p>

            <div className="flex flex-wrap gap-5 mb-14">

              <a
                href="https://wa.me/254734006916"
                target="_blank"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-300 text-black font-semibold hover:scale-105 transition duration-300 shadow-xl shadow-yellow-500/20"
              >
                Book Free Consultation
              </a>

              <button className="px-8 py-4 rounded-2xl border border-white/20 hover:border-yellow-400 transition duration-300">
                View Services
              </button>

            </div>

            <div className="grid grid-cols-3 gap-8">

              <div>
                <h2 className="text-3xl font-bold text-yellow-400">
                  Web
                </h2>

                <p className="text-gray-400 mt-2">
                  Development
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-yellow-400">
                  Meta
                </h2>

                <p className="text-gray-400 mt-2">
                  Ads
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-yellow-400">
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

            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-blue-500/10 blur-3xl rounded-[40px]"></div>

            <div className="relative bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-xl grid grid-cols-2 gap-6">

              <div className="bg-[#081028] rounded-3xl p-8 hover:-translate-y-2 transition duration-300">

                <div className="w-14 h-14 rounded-2xl bg-yellow-400 mb-8"></div>

                <h3 className="text-2xl font-semibold mb-4">
                  Social Media
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Premium content strategies that grow engagement and visibility.
                </p>

              </div>

              <div className="bg-[#081028] rounded-3xl p-8 mt-10 hover:-translate-y-2 transition duration-300">

                <div className="w-14 h-14 rounded-2xl bg-yellow-400 mb-8"></div>

                <h3 className="text-2xl font-semibold mb-4">
                  Branding
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Elegant brand identity systems designed to stand out professionally.
                </p>

              </div>

              <div className="bg-[#081028] rounded-3xl p-8 hover:-translate-y-2 transition duration-300">

                <div className="w-14 h-14 rounded-2xl bg-yellow-400 mb-8"></div>

                <h3 className="text-2xl font-semibold mb-4">
                  Web Development
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Modern high-converting websites built for businesses ready to grow.
                </p>

              </div>

              <div className="bg-[#081028] rounded-3xl p-8 mt-10 hover:-translate-y-2 transition duration-300">

                <div className="w-14 h-14 rounded-2xl bg-yellow-400 mb-8"></div>

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

      {/* CONTACT */}

      <section className="px-6 lg:px-20 pb-28">

        <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-12 backdrop-blur-xl relative overflow-hidden">

          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-400/10 blur-[120px] rounded-full"></div>

          <div className="relative z-10">

            <h2 className="text-5xl font-bold text-center mb-14">
              Contact Local Boost Ke
            </h2>

            <div className="grid md:grid-cols-2 gap-10 text-lg text-gray-300">

              <div className="bg-[#081028] border border-white/5 rounded-3xl p-8">
                <p className="text-yellow-400 text-sm mb-2">WHATSAPP</p>
                <p className="text-2xl font-semibold">
                  +254734006916
                </p>
              </div>

              <div className="bg-[#081028] border border-white/5 rounded-3xl p-8">
                <p className="text-yellow-400 text-sm mb-2">EMAIL</p>
                <p className="text-2xl font-semibold break-all">
                  localboostke@gmail.com
                </p>
              </div>

              <div className="bg-[#081028] border border-white/5 rounded-3xl p-8">
                <p className="text-yellow-400 text-sm mb-2">INSTAGRAM</p>
                <p className="text-2xl font-semibold">
                  @localboostke
                </p>
              </div>

              <div className="bg-[#081028] border border-white/5 rounded-3xl p-8">
                <p className="text-yellow-400 text-sm mb-2">LOCATION</p>
                <p className="text-2xl font-semibold">
                  Nairobi, Kenya
                </p>
              </div>

            </div>

            <div className="flex justify-center mt-14">

              <a
                href="https://wa.me/254734006916"
                target="_blank"
                className="px-10 py-5 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold text-lg hover:scale-105 transition duration-300 shadow-2xl shadow-green-500/20"
              >
                Chat on WhatsApp
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* FLOATING WHATSAPP */}

      <a
        href="https://wa.me/254734006916"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white px-6 py-4 rounded-full shadow-2xl shadow-green-500/30 transition duration-300 hover:scale-110"
      >
        WhatsApp Us
      </a>

    </div>
  )
}

