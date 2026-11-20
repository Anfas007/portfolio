import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import profile from "../../assets/images/profile.png";
import { SITE } from "../../data/site";

export default function Hero() {
  return <section id="home" className="hero">
    <div className="container hero-grid">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
        <p className="eyebrow">{SITE.roles.join(" / ")}</p>
        <h1>{SITE.headline1}<br /><span>{SITE.headline2}</span></h1>
        <p className="hero-copy">{SITE.tagline}</p>
        <div className="hero-buttons"><a className="button button-primary" href="#projects">Explore my work <ArrowDown size={15} /></a><a className="button button-secondary" href="#contact">Let's connect ↗</a></div>
        <div className="socials"><a href={SITE.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a><a href="https://github.com/Anfas007" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a><a href={SITE.instagram} target="_blank" rel="noreferrer"><FiInstagram /> Instagram</a><a href={`mailto:${SITE.email}`}><Mail size={15} /> Email</a></div>
      </motion.div>
      <motion.div className="hero-visual" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .1 }}>
        <div className="hero-banner"><div className="banner-grid" /><span className="banner-copy">SELECTED SYSTEM / 001</span><span className="banner-code">clean code<br />clear intent<br />real impact</span><img className="portrait" src={profile} alt="Mohammed Anfas CP" /></div>
        <span className="hero-badge badge-top">AVAILABLE ↗</span><span className="hero-badge badge-bottom">SHIP GOOD WORK</span>
      </motion.div>
    </div>
  </section>;
}
