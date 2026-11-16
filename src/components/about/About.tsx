import { motion } from "framer-motion";
import { Code2, GraduationCap, MapPin, Server, ShieldCheck, Sparkles } from "lucide-react";

const highlights = [["AI & Intelligent Systems", Sparkles], ["Backend & API Development", Server], ["Software Architecture", ShieldCheck], ["Web & Mobile Development", Code2]] as const;

export default function About() {
  return <section id="about" className="section about">
    <div className="container">
      <div className="about-grid">
        <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="section-kicker">01 / About me</p>
          <p className="about-label">A little context</p>
          <p className="about-copy about-intro">I’m <strong>Mohammed Anfas CP</strong> — a curious developer who turns ideas into simple, working software.</p>
          <p className="about-copy">I recently completed my MCA. I’m looking for a team where I can learn, contribute with care, and grow through real projects.</p>
          <p className="about-note">My approach is simple: understand the problem, write clear code, and keep improving.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="about-profile">
            <p className="about-label">At a glance</p>
            <div className="about-facts">
              <div className="fact"><span className="fact-icon"><MapPin size={17} /></span><div><span>Location</span><strong>Kerala, India</strong></div></div>
              <div className="fact"><span className="fact-icon"><GraduationCap size={17} /></span><div><span>Education</span><strong>MCA Graduate</strong></div></div>
              <div className="fact"><span className="fact-icon"><Code2 size={17} /></span><div><span>Core focus</span><strong>Software Engineering & Intelligent Systems</strong></div></div>
            </div>
            <p className="about-label focus-label">Areas I enjoy</p>
            <ul className="focus-list">{highlights.map(([text, Icon]) => <li key={text}><Icon size={16} /><span>{text}</span></li>)}</ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
}
