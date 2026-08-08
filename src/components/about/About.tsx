import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Code2,
  ShieldCheck,
  Sparkles,
  Server,
} from "lucide-react";

import profile from "../../assets/images/profile.png";
import Container from "../ui/Container";

// Updated highlights with dark-mode friendly translucent backgrounds and neon text
const highlights = [
  { text: "AI & Intelligent Systems", icon: Sparkles, color: "text-purple-400", bg: "bg-purple-500/10" },
  { text: "Backend & API Development", icon: Server, color: "text-blue-400", bg: "bg-blue-500/10" },
  { text: "Software Architecture", icon: ShieldCheck, color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { text: "Web & Mobile Development", icon: Code2, color: "text-sky-400", bg: "bg-sky-500/10" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-950 py-24">
      
      {/* Dark Mode Ambient Glassmorphism Backgrounds */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-indigo-600/20 blur-[100px]" />

      <Container>
        {/* ================= Heading ================= */}
        <div className="relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
            About Me
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Turning Ideas into{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Scalable Software
            </span>
          </h2>
        </div>

        <div className="relative z-10 mt-16 grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          
          {/* ================= LEFT CARD (Dark Glassmorphism Widget) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/50 backdrop-blur-xl">
              
              {/* Profile Image Container */}
              <div className="relative flex justify-center rounded-3xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-4">
                <div className="absolute inset-0 rounded-3xl border border-white/10"></div>
                <img
                  src={profile}
                  alt="Mohammed Anfas CP"
                  className="relative z-10 w-56 object-contain drop-shadow-2xl"
                />
              </div>

              {/* Detail Rows */}
              <div className="mt-8 space-y-4 px-2">
                
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Location</p>
                    <p className="font-semibold text-slate-200">Kerala, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 shadow-sm">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Education</p>
                    <p className="font-semibold text-slate-200">MCA Graduate</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 shadow-sm">
                    <Code2 size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Core Focus</p>
                    <p className="font-semibold text-slate-200">Software Engineering & Intelligent Systems</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT (Biography & Highlights) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              Passionate Software Engineer
            </h3>

            <div className="mt-6 space-y-6 text-lg leading-relaxed text-slate-400">
              <p>
                I'm <strong className="text-slate-200">Mohammed Anfas CP</strong>, an MCA graduate and software engineer focused on building scalable, secure, and intelligent software solutions.
              </p>
              
              <p>
                I enjoy turning complex problems into clean, practical, and meaningful digital experiences, while continuously exploring modern technologies and better ways to build software.
              </p>
              
              <p>
                Always learning. Always building. Always looking for the next problem worth solving
              </p>
            </div>

            {/* Premium Highlights Grid */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-900/20"
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.bg} ${item.color} transition-transform duration-300 group-hover:scale-110`}>
                    <item.icon size={18} strokeWidth={2.5} />
                  </div>
                  <span className="font-semibold text-slate-200 group-hover:text-white transition-colors">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}