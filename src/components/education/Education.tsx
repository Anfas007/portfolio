import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden bg-slate-950 py-24">
      
      {/* Dark Mode Ambient Glows */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-600/20 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
            Education
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Academic Background
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
            My academic journey in computer science and software development.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative mx-auto max-w-4xl">

          {/* Center Line (Hidden on mobile, visible on md+) */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-white/5 via-blue-500/30 to-white/5 md:left-1/2 md:-translate-x-1/2" />

          {/* ================= MCA ================= */}
          <div className="relative mb-12 grid gap-8 md:mb-16 md:grid-cols-2 md:gap-12">
            
            {/* Left Content (Desktop) / Right Content (Mobile) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="ml-14 md:ml-0 md:text-right"
            >
              {/* Premium Dark Card */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-900/20">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <p className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-400">
                  2024 – 2026
                </p>

                <h3 className="mt-4 text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
                  Master of Computer Applications
                </h3>

                <p className="mt-1.5 flex items-center gap-2 text-sm font-semibold text-slate-400 md:justify-end">
                  <Award size={16} className="text-blue-400" />
                  Pondicherry University
                </p>

                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  Specialized in computer applications, software development,
                  artificial intelligence, and modern computing technologies.
                </p>
              </div>
            </motion.div>

            {/* Timeline Dot */}
            <div className="absolute left-6 top-8 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-slate-950 bg-blue-600 shadow-md md:left-1/2 md:top-1/2 md:h-12 md:w-12">
              <GraduationCap size={20} className="text-white md:h-6 md:w-6" />
            </div>

            {/* Empty Space for Desktop Grid */}
            <div className="hidden md:block" />
          </div>

          {/* ================= BSc ================= */}
          <div className="relative grid gap-8 md:grid-cols-2 md:gap-12">
            
            {/* Empty Space for Desktop Grid */}
            <div className="hidden md:block" />

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="ml-14 md:ml-0"
            >
              {/* Premium Dark Card */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-900/20">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <p className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-400">
                  2021 – 2023
                </p>

                <h3 className="mt-4 text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
                  Bachelor of Science in Computer Science
                </h3>

                <p className="mt-1.5 flex items-center gap-2 text-sm font-semibold text-slate-400">
                  <Award size={16} className="text-blue-400" />
                  University of Calicut
                </p>

                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  Built a strong foundation in programming, databases, computer
                  networks, software engineering, and problem solving.
                </p>
              </div>
            </motion.div>

            {/* Timeline Dot */}
            <div className="absolute left-6 top-8 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-slate-950 bg-slate-800 shadow-md transition-colors duration-300 hover:bg-blue-600 md:left-1/2 md:top-1/2 md:h-12 md:w-12">
              <div className="h-2.5 w-2.5 rounded-full bg-slate-400 transition-colors duration-300 group-hover:bg-white md:h-3 md:w-3" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}