import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import {  FiLinkedin } from "react-icons/fi";

import profile from "../../assets/images/profile.png";
import Container from "../ui/Container";
import { SITE } from "../../data/site";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 pt-32 pb-20 lg:pt-36 lg:pb-24"
    >
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
        <div className="h-[600px] w-[600px] rounded-full bg-blue-400/15 blur-[120px]" />
      </div>

      <Container>
        <div className="relative z-10 grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* ================= LEFT CONTENT ================= */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 rounded-full border border-blue-200/60 bg-blue-50/80 px-5 py-2 text-xs font-bold uppercase tracking-widest text-blue-700 shadow-sm backdrop-blur-md"
            >
              {/* Pulsing Dot */}
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
              </span>
              Hello, I'm
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl lg:text-[4.5rem]"
            >
              MOHAMMED
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
                ANFAS CP
              </span>
            </motion.h1>

            {/* Role */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-slate-500 md:text-base lg:text-lg"
            >
              {SITE.roles.join(" | ")}
            </motion.h2>

            {/* Custom Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600 lg:mx-0"
            >
              {SITE.tagline}
            </motion.p>

            {/* Social Icons (App-Style to match Tech Stack cards) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-10 flex justify-center gap-4 lg:justify-start"
            >
              {/* LinkedIn */}
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-xl hover:shadow-blue-600/20"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={22} className="transition-transform duration-300 group-hover:scale-110" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${SITE.email}`}
                className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-xl hover:shadow-blue-600/20"
                aria-label="Email Me"
              >
                <Mail size={22} strokeWidth={2} className="transition-transform duration-300 group-hover:scale-110" />
              </a>
            </motion.div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -12, 0],
              }}
              transition={{
                opacity: { duration: 0.8 },
                scale: { duration: 0.8 },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{ scale: 1.02 }}
              className="relative mt-8 lg:mt-0"
            >
              {/* Core Image Glow */}
              <div className="absolute inset-0 -z-10 scale-[1.25] rounded-full bg-gradient-to-tr from-blue-300/40 to-indigo-300/20 blur-3xl" />

              {/* Inner Solid Frosted Ring */}
              <div className="absolute -inset-6 -z-20 rounded-full border border-white/60 bg-white/40 shadow-xl shadow-blue-900/5 backdrop-blur-md" />

              {/* Outer Rotating Dashed Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-12 -z-30 rounded-full border border-dashed border-blue-300/60" 
              />

              {/* Decorative Floating Orbs */}
              <div className="absolute -top-4 right-10 h-5 w-5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/40" />
              <div className="absolute bottom-10 -left-6 h-3.5 w-3.5 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400/40" />

              <img
                src={profile}
                alt="MOHAMMED ANFAS CP"
                className="relative z-10 w-72 object-contain drop-shadow-[0_20px_40px_rgba(37,99,235,0.15)] md:w-[400px] lg:w-[460px]"
              />
            </motion.div>
          </div>
        </div>

        {/* ================= SCROLL INDICATOR ================= */}
        {/* This bridges the gap and points them down to the dark mode section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-10 w-6 justify-center rounded-full border-2 border-slate-300 pt-2"
          >
            <ArrowDown size={14} className="text-slate-400" />
          </motion.div>
        </motion.div>

      </Container>
    </section>
  );
};

export default Hero;