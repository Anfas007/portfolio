import { motion } from "framer-motion";
import { Code2, Server, ShieldCheck, Sparkles } from "lucide-react";

const highlights = [["AI & Intelligent Systems", Sparkles], ["Backend & API Development", Server], ["Software Architecture", ShieldCheck], ["Web & Mobile Development", Code2]] as const;

export default function About() {
  return <section id="about" className="section about">
    <div className="container">
      <div className="about-grid">
        <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="section-kicker">01 / About me</p>
          <p className="about-label">A little context</p>
          <p className="about-copy about-intro">I’m <strong>Someone</strong> who enjoys understanding how things work behind the screen and finding ways to make them work better.</p>
          <p className="about-copy bio-italian"><strong>I’m Mohammed Anfas C P, an MCA graduate from Pondicherry University, with an interest in software development, intelligent systems, cloud technologies, DevOps and cybersecurity. I enjoy exploring technology beyond the code and discovering how different pieces fit together.</strong></p>
          <p className="about-note">My approach is simple: understand the problem, write clear code, and keep improving.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="about-profile">
            <p className="about-label">At a glance</p>
            <div className="about-facts">
             
             
             <p className="about-copy about-intro">I’m <strong> Mohammed Anfas C P,</strong> an MCA graduate,My interests span S/W engineering, AI, cloud computing, DevOps and cybersecurity, driven by a curiosity to understand, build and explore.</p>
            </div>
            <p className="about-label focus-label">Areas I enjoy</p>
            <ul className="focus-list">{highlights.map(([text, Icon]) => <li key={text}><Icon size={16} /><span>{text}</span></li>)}</ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
}
