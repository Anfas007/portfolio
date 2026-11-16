import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import ProjectGallery from "../../components/projects/ProjectGallery";
import SystemArchitecture from "../../components/projects/SystemArchitecture";
import { projects } from "../../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "instant" }); }, [id]);
  const project = projects.find((item) => item.id === id);
  const currentIndex = projects.findIndex((item) => item.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  if (!project) return <main className="project-page"><div className="detail-shell not-found"><h1>Project not found.</h1><Link className="button button-primary" to="/#projects">Back to portfolio</Link></div></main>;

  return <main className="project-page">
    <div className="detail-shell">
      <Link className="back-link" to="/#projects"><ArrowLeft size={15} /> Back to projects</Link>
      <motion.header className="detail-hero" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <p className="section-kicker">Case study / {project.id}</p><h1>{project.title}</h1><p>{project.shortDescription}</p>
        <a className="button button-primary" href={project.github} target="_blank" rel="noreferrer"><FiGithub size={15} /> View source</a>
      </motion.header>

      <section className="detail-section"><p className="detail-label">Overview</p><p className="detail-lede">{project.overview}</p></section>
      <section className="detail-split"><article className="detail-panel"><p className="detail-label">The problem</p><h2>Why it mattered</h2><p>{project.problem}</p></article><article className="detail-panel detail-panel-accent"><p className="detail-label">The solution</p><h2>What I built</h2><p>{project.solution}</p></article></section>

      {project.architectureImage && <SystemArchitecture image={project.architectureImage} title={project.title} />}
      <ProjectGallery images={project.images ?? []} />

      <section className="detail-section"><p className="detail-label">Highlights</p><h2 className="detail-heading">What it can do</h2><div className="detail-list">{project.features.map((feature) => <div className="detail-list-item" key={feature}><Check size={16} /> <span>{feature}</span></div>)}</div></section>
      <section className="detail-section"><p className="detail-label">Technology</p><h2 className="detail-heading">Built with</h2><div className="stack-table">{project.technologyStack?.map((stack) => <div className="stack-row" key={stack.category}><strong>{stack.category}</strong><div>{stack.technologies.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div></div>)}</div></section>
      <section className="detail-split"><article className="detail-panel"><p className="detail-label">Challenges</p><h2>What was hard</h2><ul>{project.challenges.map((item) => <li key={item}>{item}</li>)}</ul></article><article className="detail-panel detail-panel-accent"><p className="detail-label">Learnings</p><h2>What I took away</h2><ul>{project.keyLearnings.map((item) => <li key={item}>{item}</li>)}</ul></article></section>
      <section className="detail-cta"><p className="detail-label">Source code</p><h2>Explore the repository.</h2><p>The complete project, architecture, and implementation are available on GitHub.</p><a className="button button-primary" href={project.github} target="_blank" rel="noreferrer"><FiGithub size={15} /> Open GitHub</a></section>
      <nav className="project-nav"><Link to="/#projects"><ArrowLeft size={15} /> All projects</Link><Link to={`/projects/${nextProject.id}`}>Next project <ArrowRight size={15} /></Link></nav>
    </div>
  </main>;
}
