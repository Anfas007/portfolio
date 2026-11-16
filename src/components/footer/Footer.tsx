import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { SITE } from "../../data/site";

export default function Footer() {
  return <footer className="site-footer"><div className="container footer-row"><span>© 2026 {SITE.fullName}</span><div className="footer-socials"><a href={SITE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a><a href="https://github.com/Anfas007" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a><a href={SITE.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FiInstagram /></a></div><span>Learning and building with React</span></div></footer>;
}
