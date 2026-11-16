import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { SITE } from "../../data/site";

const links = ["About", "Projects", "Skills", "Education", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("portfolio-theme") === "dark");

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  }, [dark]);

  const closeMenu = () => setOpen(false);

  return <header className="site-header">
    <div className="container">
      <div className="nav">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">AC</span> MOHAMMED ANFAS</a>
        <nav className="nav-links" aria-label="Primary navigation">{links.map((link) => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}</nav>
        <div className="nav-actions">
          <a className="nav-resume" href={SITE.resume} target="_blank" rel="noreferrer">Resume ↗</a>
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun size={16} /> : <Moon size={16} />}</button>
          <button className="icon-button menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </div>
      {open && <nav className="mobile-nav">{links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={closeMenu}>{link}</a>)}<a href={SITE.resume} target="_blank" rel="noreferrer">Download resume ↗</a></nav>}
    </div>
  </header>;
}
