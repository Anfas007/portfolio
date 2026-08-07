import { motion } from "framer-motion";
import { ArrowRight, FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";

import { projects } from "../../data/projects";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-slate-950 py-28">
      
      {/* Dark Mode Ambient Glows */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-indigo-600/20 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        
        {/* ================= Section Heading ================= */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
            Portfolio
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Featured <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
            A selection of projects that showcase my experience in backend
            development, AI-powered applications, and scalable software systems.
          </p>
        </div>

        {/* ================= Projects Grid ================= */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="block h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                // Premium Dark Card Styling
                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-900/20"
              >
                {/* Accent Gradient Line */}
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Header (Icons) */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 shadow-sm transition-all duration-500 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-blue-500/20">
                    <FolderOpen size={24} strokeWidth={1.5} />
                  </div>
                  
                  {/* Subtle Top Arrow */}
                  <div className="opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100">
                    <ArrowRight size={20} className="text-slate-500" rotate={-45} style={{ transform: 'rotate(-45deg)' }} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-8 text-2xl font-bold text-slate-200 transition-colors duration-300 group-hover:text-blue-400">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.shortDescription}
                </p>

                {/* Minimal Footer Link */}
                <div className="mt-8 flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-300 transition-colors duration-300 group-hover:text-blue-400">
                    Explore Project
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-400"
                  />
                </div>
                
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}