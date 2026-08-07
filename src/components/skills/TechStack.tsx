import { motion } from "framer-motion";
import {
  SiPython,
  SiDjango,
  SiFastapi,
  SiReact,
  SiFlutter,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiOpencv,
  SiScikitlearn,
} from "react-icons/si";

const techs = [
  {
    icon: SiPython,
    name: "Python",
    category: "Backend",
    color: "group-hover:text-[#3776AB]",
  },
  {
    icon: SiDjango,
    name: "Django",
    category: "Backend",
    // Brightened for dark mode visibility
    color: "group-hover:text-[#44B78B]",
  },
  {
    icon: SiFastapi,
    name: "FastAPI",
    category: "REST API",
    color: "group-hover:text-[#009688]",
  },
  {
    icon: SiReact,
    name: "React.js",
    category: "Frontend",
    color: "group-hover:text-[#61DAFB]",
  },
  {
    icon: SiFlutter,
    name: "Flutter",
    category: "Mobile",
    color: "group-hover:text-[#54C5F8]",
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
    category: "Database",
    color: "group-hover:text-[#47A248]",
  },
  {
    icon: SiPostgresql,
    name: "PostgreSQL",
    category: "Database",
    color: "group-hover:text-[#4182B6]",
  },
  {
    icon: SiMysql,
    name: "MySQL",
    category: "Database",
    color: "group-hover:text-[#4479A1]",
  },
  {
    icon: SiGit,
    name: "Git",
    category: "Version Control",
    color: "group-hover:text-[#F05032]",
  },
  {
    icon: SiGithub,
    name: "GitHub",
    category: "Collaboration",
    // Changed to white for dark mode
    color: "group-hover:text-white",
  },
  {
    icon: SiOpencv,
    name: "OpenCV",
    category: "Computer Vision",
    color: "group-hover:text-[#7356F1]",
  },
  {
    icon: SiScikitlearn,
    name: "Scikit-learn",
    category: "Machine Learning",
    color: "group-hover:text-[#F7931E]",
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="relative overflow-hidden bg-slate-950 py-24">
      
      {/* Enhanced Dark Mode Ambient Glows */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-600/20 blur-[100px]" />

      {/* Constrained container width for a tighter, premium grid */}
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        
        {/* Section Heading */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
            Technologies I Work With
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Tech Stack
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
            I build scalable backend systems, AI-powered applications, and modern
            web experiences using specialized tools across the entire stack.
          </p>
        </div>

        {/* 6-Column Grid for Desktop */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              // Dark mode card styling
              className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-900/20"
            >
              {/* Dark mode icon container */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-black/40 transition-colors duration-300 group-hover:bg-blue-900/30">
                <tech.icon
                  size={32}
                  className={`text-slate-400 transition-all duration-300 group-hover:scale-110 ${tech.color}`}
                />
              </div>

              {/* Dark mode text colors */}
              <h3 className="mt-4 text-center text-sm font-bold text-slate-200 transition-colors duration-300 group-hover:text-blue-400">
                {tech.name}
              </h3>

              <p className="mt-1 text-center text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                {tech.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}