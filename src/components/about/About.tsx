import { motion } from "framer-motion";
import {
  Sparkles,
  Server,
  ShieldCheck,
  Code2,
  Lock,
  Cloud,
  Infinity,
  LayoutTemplate,
} from "lucide-react";

const highlights = [
  ["AI & Intelligent Systems", Sparkles],
  ["Backend & API Development", Server],
  ["Software Architecture", ShieldCheck],
  ["Web & Mobile Development", Code2],
  ["Cybersecurity", Lock],
  ["Cloud Computing", Cloud],
  ["DevOps & CI/CD", Infinity],
  ["Application Design", LayoutTemplate],
] as const;

export default function About() {
  return <section id="about" className="section about">
    <div className="container">
      <div className="about-grid">
        <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="section-kicker">01 / About me</p>
          <p className="about-label">A little context</p>
          <p className="about-copy about-intro">I’m <strong>Someone</strong> who enjoys understanding how things work behind the screen and finding ways to make them work better.</p>
          
          <p className="about-note">I'm Mohammed Anfas, an MCA graduate from Pondicherry University, with an interest in software development, intelligent systems, cloud technologies, DevOps and cybersecurity. I enjoy exploring technology beyond the code and discovering how different pieces fit together.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="about-profile">
            
            
            <p className="about-label focus-label">Areas I enjoy</p>
            <ul className="focus-list">{highlights.map(([text, Icon]) => <li key={text}><Icon size={16} /><span>{text}</span></li>)}</ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
}
