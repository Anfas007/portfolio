import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

import Container from "../../components/ui/Container";
import ProjectGallery from "../../components/projects/ProjectGallery";
import SystemArchitecture from "../../components/projects/SystemArchitecture";
import { projects } from "../../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();

  // Scroll to top when the project ID changes (e.g., clicking Next Project)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [id]);

  const project = projects.find((p) => p.id === id);
  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <h1 className="text-3xl font-bold text-white">Project Not Found</h1>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950">
      
      {/* ================= Ambient Background Glows ================= */}
      <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/4 -translate-y-1/4 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] translate-x-1/4 rounded-full bg-indigo-600/20 blur-[120px]" />

      <Container>
        {/* ================= Back Button ================= */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24 md:px-12 md:pt-32">
          <Link
            to="/#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-300 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-blue-500/50 hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>
        </div>

        {/* ================= Hero ================= */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto max-w-5xl px-6 py-10 md:px-12 md:py-12"
        >
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400 md:text-xl">
            {project.shortDescription}
          </p>
        </motion.section>

        {/* ================= Project Overview ================= */}
        <section className="relative z-10 py-8 md:py-12">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
              Project Overview
            </h2>
            <p className="mt-4 max-w-4xl text-lg leading-relaxed text-slate-400">
              {project.overview}
            </p>
          </div>
        </section>

        {/* ================= Problem & Solution ================= */}
        <section className="relative z-10 py-8 md:py-10">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              
              {/* Problem */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex h-full flex-col rounded-[2rem] border border-red-500/20 bg-red-500/5 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-red-500/10"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/20 text-xl shadow-sm">
                  <span className="drop-shadow-sm">⚠️</span>
                </div>
                <h3 className="text-xl font-bold text-white">The Problem</h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-slate-400">
                  {project.problem}
                </p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex h-full flex-col rounded-[2rem] border border-emerald-500/20 bg-emerald-500/5 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-emerald-500/10"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20 text-xl shadow-sm">
                  <span className="drop-shadow-sm">💡</span>
                </div>
                <h3 className="text-xl font-bold text-white">The Solution</h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-slate-400">
                  {project.solution}
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ================= System Architecture ================= */}
        {project.architectureImage && (
          <div className="relative z-10">
            <SystemArchitecture
              image={project.architectureImage}
              title={project.title}
            />
          </div>
        )}

        {/* ================= Gallery ================= */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-12">
          <ProjectGallery images={project.images ?? []} />
        </div>

        {/* ================= Features ================= */}
        <section className="relative z-10 py-12 md:py-16">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
                Highlights
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                Features & Capabilities
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-900/20"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300 group-hover:text-white">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= Technology Stack ================= */}
        <section className="relative z-10 py-12 md:py-16">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
                Technology
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                Tech Stack Used
              </h2>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-sm backdrop-blur-sm">
              {project.technologyStack?.map((stack, index) => (
                <div
                  key={stack.category}
                  className={`flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:gap-8 lg:px-8 ${
                    index !== project.technologyStack.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  <div className="flex w-40 shrink-0 items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      {stack.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-bold text-slate-300 transition-colors hover:border-blue-500/50 hover:bg-blue-500/20 hover:text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= Challenges & Learnings ================= */}
        <section className="relative z-10 py-12 md:py-16">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
                Development Journey
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                Challenges & Learnings
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              {/* Challenges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex h-full flex-col rounded-[2rem] border border-indigo-500/20 bg-indigo-500/5 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-indigo-500/10"
              >
                <h3 className="text-xl font-bold text-indigo-300">Key Challenges</h3>
                <ul className="mt-6 flex-1 space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500"></span>
                      <p className="text-sm leading-relaxed text-slate-400">{challenge}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Learnings */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex h-full flex-col rounded-[2rem] border border-teal-500/20 bg-teal-500/5 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-teal-500/10"
              >
                <h3 className="text-xl font-bold text-teal-300">Core Learnings</h3>
                <ul className="mt-6 flex-1 space-y-4">
                  {project.keyLearnings.map((learning, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500"></span>
                      <p className="text-sm leading-relaxed text-slate-400">{learning}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= Resources ================= */}
        <section className="relative z-10 py-12 md:py-16">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
                Resources
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                Source Code
              </h2>
            </div>

            <div className="max-w-md">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-900/20"
              >
                <div>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white">
                    <FiGithub size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white">GitHub Repository</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    Explore the complete source code, API documentation, and architecture setup.
                  </p>
                </div>
                
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-sm font-bold text-slate-300 group-hover:text-white">View on GitHub</span>
                  <ArrowRight size={18} className="text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ================= Sleek Call To Action ================= */}
        <section className="relative z-10 py-12 md:py-16">
          <div className="mx-6 max-w-4xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 px-8 py-12 text-center shadow-2xl backdrop-blur-md md:mx-auto lg:px-16 lg:py-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
              Interested in collaborating?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-slate-400">
              I am currently open for new opportunities, software engineering roles, and exciting freelance projects.
            </p>
            <Link
              to="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              Contact Me
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* ================= Project Navigation ================= */}
        <section className="relative z-10 mt-8 border-t border-white/10 py-10">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 md:px-12">
            
            <Link
              to="/#projects"
              className="group flex flex-col gap-1 text-left"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 transition-colors group-hover:text-blue-400">
                Go Back
              </p>
              <div className="flex items-center gap-2 text-slate-300 transition-colors group-hover:text-white">
                <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
                <span className="font-bold">Portfolio</span>
              </div>
            </Link>

            <Link
              to={`/projects/${nextProject.id}`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex flex-col gap-1 text-right"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 transition-colors group-hover:text-blue-400">
                Next Project
              </p>
              <div className="flex items-center justify-end gap-2 text-slate-300 transition-colors group-hover:text-white">
                <span className="font-bold">{nextProject.title}</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>

          </div>
        </section>

        {/* ================= Footer ================= */}
        <footer className="relative z-10 border-t border-white/10 py-8">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="text-sm font-medium text-slate-500">
              Built with React • TypeScript • Tailwind CSS • Framer Motion
            </p>
          </div>
        </footer>

      </Container>
    </main>
  );
}