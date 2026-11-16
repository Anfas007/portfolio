import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

export default function FeaturedProjects() {
  return <section id="projects" className="section">
    <div className="container">
      <p className="section-kicker">02 / My projects</p><h2 className="section-title">Things I have built.</h2><p className="section-lede">A few projects that show how I learn and apply software development skills.</p>
      <div className="projects-grid">{projects.map((project, index) => <motion.article className="project-card card" key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }}>
        <Link to={`/projects/${project.id}`} className="project-thumb-link"><div className="project-thumb"><span className="project-number">0{index + 1}</span><div className="mock-window"><div className="window-dots"><i /><i /><i /></div><div className="window-label">{index === 0 ? "health.passport()" : "attendance.mark()"}</div></div></div></Link>
        <div className="project-info"><div className="project-heading"><span className="eyebrow">{index === 0 ? "Healthcare · AI" : "Education · Computer vision"}</span><Link to={`/projects/${project.id}`}><h3>{project.title}</h3></Link></div><p>{project.shortDescription}</p><div className="project-bottom"><div className="tags">{project.technologyStack.flatMap((stack) => stack.technologies).slice(0, 4).map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div><a className="project-link" href={project.github} target="_blank" rel="noreferrer"><FiGithub size={13} /> GitHub</a></div></div>
      </motion.article>)}</div>
    </div>
  </section>;
}
