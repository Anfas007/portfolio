import { Mail, MapPin, Send } from "lucide-react";
import { FiLinkedin, FiInstagram } from "react-icons/fi";

import { SITE } from "../../data/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      {/* ================= Ambient Dark Mode Glows ================= */}
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-600/20 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        {/* ================= Heading ================= */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
            Contact Me
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Ready to collaborate?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400">
            Whether you're looking to collaborate on software projects, discuss
            backend systems, or just want to connect — I'd love to hear from you.
          </p>
        </div>

        {/* ================= Contact Cards ================= */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* Email */}
          <a
            href={`mailto:${SITE.email}`}
            className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-5 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-900/20"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
              <Mail size={22} strokeWidth={2} />
            </div>

            <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Email
            </p>

            <p className="mt-1 text-sm font-semibold text-slate-200">
              {SITE.email}
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-5 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-900/20"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
              <FiLinkedin size={22} />
            </div>

            <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              LinkedIn
            </p>

            <p className="mt-1 text-sm font-semibold text-slate-200">
              LinkedIn Profile
            </p>
          </a>

          {/* Instagram */}
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-5 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/50 hover:bg-white/10 hover:shadow-lg hover:shadow-pink-900/20"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400 transition-colors duration-300 group-hover:bg-pink-500 group-hover:text-white">
              <FiInstagram size={22} />
            </div>

            <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Instagram
            </p>

            <p className="mt-1 text-sm font-semibold text-slate-200">
              Instagram Profile
            </p>
          </a>

          {/* Location */}
          <div className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-5 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:bg-white/10 hover:shadow-lg hover:shadow-emerald-900/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white">
              <MapPin size={22} />
            </div>

            <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Location
            </p>

            <p className="mt-1 text-sm font-semibold text-slate-200">
              Kerala, India
            </p>
          </div>
        </div>

        {/* ================= Contact Form ================= */}
        <div className="mx-auto mt-16 max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-md sm:p-10">

          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">
              Send a Message
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              I typically respond within 24 hours
            </p>
          </div>

          <form className="mt-8 space-y-5">

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold text-slate-300"
              >
                Your Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:bg-white/5 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-slate-300"
              >
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:bg-white/5 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold text-slate-300"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell me about your project or how I can help..."
                className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:bg-white/5 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition-all hover:bg-blue-500 active:scale-[0.98]"
            >
              Send Message

              <Send
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}