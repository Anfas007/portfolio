import { Mail } from "lucide-react";
import { FiInstagram, FiLinkedin } from "react-icons/fi";

import { SITE } from "../../data/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950">

      {/* Subtle Ambient Bottom Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 translate-y-1/2 rounded-full bg-blue-600/10 blur-[100px]" />

      {/* Main Footer Container */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-4 lg:gap-12">

          {/* About Section */}
          <div className="md:col-span-2">
            <h2 className="text-lg font-bold tracking-tight text-white">
              {SITE.fullName}
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Software engineer focused on building reliable backend systems,
              AI-powered applications and modern software solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Quick Links
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              <a
                href="/"
                className="w-fit text-sm text-slate-400 transition-colors hover:text-blue-400"
              >
                Home
              </a>

              <a
                href="/#about"
                className="w-fit text-sm text-slate-400 transition-colors hover:text-blue-400"
              >
                About
              </a>

              <a
                href="/#projects"
                className="w-fit text-sm text-slate-400 transition-colors hover:text-blue-400"
              >
                Works
              </a>

              <a
                href="/#education"
                className="w-fit text-sm text-slate-400 transition-colors hover:text-blue-400"
              >
                Education
              </a>

              <a
                href="/#contact"
                className="w-fit text-sm text-slate-400 transition-colors hover:text-blue-400"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Connect
            </h3>

            <div className="mt-5 flex gap-5">

              {/* LinkedIn */}
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-500 transition-colors hover:text-blue-400"
              >
                <FiLinkedin size={20} />
              </a>

              {/* Instagram */}
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-slate-500 transition-colors hover:text-pink-400"
              >
                <FiInstagram size={20} />
              </a>

              {/* Email */}
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Email"
                className="text-slate-500 transition-colors hover:text-blue-400"
              >
                <Mail size={20} strokeWidth={2.5} />
              </a>

            </div>

            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              Open to collaborations and new opportunities.
            </p>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-6 sm:flex-row">

          <p className="text-xs text-slate-500">
            © 2026 {SITE.fullName}. All rights reserved.
          </p>

          <p className="mt-2 text-xs text-slate-500 sm:mt-0">
            Built with React • TypeScript • Tailwind
          </p>

        </div>
      </div>
    </footer>
  );
}