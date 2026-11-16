import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

const education = [
  {
    period: "2024 — 2026",
    degree: "Master of Computer Applications",
    institution: "Pondicherry University",
    description: "Focused on software development, artificial intelligence, and modern computing.",
    icon: Award,
  },
  {
    period: "2021 — 2023",
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Calicut",
    description: "Built a foundation in programming, databases, networks, and software engineering.",
    icon: GraduationCap,
  },
];

export default function Education() {
  return <section id="education" className="section education"><div className="container">
    <p className="section-kicker">04 / Education</p><h2 className="section-title">My learning journey.</h2><p className="section-lede">The academic foundation behind my interest in software development.</p>
    <div className="education-list">{education.map((item, index) => <motion.article className="education-row" key={item.degree} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }}>
      <span className="education-period">{item.period}</span><div className="education-content"><div className="education-icon"><item.icon size={17} /></div><div><h3>{item.degree}</h3><p className="education-institution">{item.institution}</p><p>{item.description}</p></div></div>
    </motion.article>)}</div>
  </div></section>;
}
