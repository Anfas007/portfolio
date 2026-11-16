import { motion } from "framer-motion";
import { SiDjango, SiFastapi, SiFlutter, SiGithub, SiGit, SiMongodb, SiOpencv, SiPostgresql, SiPython, SiReact, SiScikitlearn } from "react-icons/si";

const groups = [
  { title: "Languages", items: [["Python", SiPython]] },
  { title: "Web & APIs", items: [["Django", SiDjango], ["FastAPI", SiFastapi], ["React.js", SiReact], ["Flutter", SiFlutter]] },
  { title: "Data", items: [["MongoDB", SiMongodb], ["PostgreSQL", SiPostgresql]] },
  { title: "Tools & AI", items: [["Git", SiGit], ["GitHub", SiGithub], ["OpenCV", SiOpencv], ["Scikit-learn", SiScikitlearn]] },
] as const;

export default function TechStack() {
  return <section id="skills" className="section skills"><div className="container">
    <p className="section-kicker">03 / Skills</p><h2 className="section-title">Tools I work with.</h2><p className="section-lede">A practical set of technologies I use while learning and building projects.</p>
    <div className="tech-groups">{groups.map((group, groupIndex) => <div className="tech-group" key={group.title}><p className="tech-group-title">0{groupIndex + 1} / {group.title}</p><div className="tech-grid">{group.items.map(([name, Icon], index) => <motion.div className="tech" key={name} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .04 }}><Icon size={18} /><span>{name}</span></motion.div>)}</div></div>)}</div>
  </div></section>;
}
