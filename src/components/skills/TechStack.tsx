import { motion } from "framer-motion";
import {
  SiDjango,
  SiFastapi,
  SiFlutter,
  SiGithub,
  SiGit,
  SiMongodb,
  SiMysql,
  SiOpencv,
  SiPostgresql,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiJavascript,
  SiDocker,
  SiJenkins,
  SiGithubactions,
  SiLinux,
  SiTerraform,
  SiAnsible,
  SiKalilinux,
  SiWireshark,
  SiMetasploit,
  SiBurpsuite,
  SiKubernetes,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { FiCloud, FiActivity, FiCode, FiTerminal, FiSearch } from "react-icons/fi";

const groups = [
  {
    title: "Programming Languages",
    items: [
      ["Python", SiPython],
      ["SQL", FiCode],
      ["JavaScript", SiJavascript],
      ["Bash Scripting", FiTerminal],
    ],
  },
  {
    title: "Backend & Application Development",
    items: [
      ["Django", SiDjango],
      ["FastAPI", SiFastapi],
      ["React.js", SiReact],
      ["Flutter", SiFlutter],
    ],
  },
  {
    title: "Databases",
    items: [
      ["PostgreSQL", SiPostgresql],
      ["MongoDB", SiMongodb],
      ["MySQL", SiMysql],
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      ["Linux", SiLinux],
      ["GitHub Actions", SiGithubactions],
      ["Terraform", SiTerraform],
      ["Jenkins", SiJenkins],
      ["Ansible", SiAnsible],
      ["Docker", SiDocker],
      ["Kubernetes", SiKubernetes],
      ["AWS", FiCloud],
    ],
  },
  {
    title: "Development & Version Control",
    items: [
      ["Git", SiGit],
      ["GitHub", SiGithub],
      ["VS Code", VscVscode],
    ],
  },
  {
    title: "AI & Cybersecurity",
    items: [
      ["OpenCV", SiOpencv],
      ["Scikit-learn", SiScikitlearn],
      ["Kali Linux", SiKalilinux],
      ["Nmap", FiSearch],
      ["Wireshark", SiWireshark],
      ["Metasploit", SiMetasploit],
      ["Burp Suite", SiBurpsuite],
      ["SHAP", FiActivity],
    ],
  },
] as const;

export default function TechStack() {
  return <section id="skills" className="section skills"><div className="container">
    <p className="section-kicker">03 / Skills</p><h2 className="section-title">Tools I work with.</h2><p className="section-lede">A practical collection of technologies I use while building applications, working with data, and exploring modern infrastructure.</p>
    <div className="tech-groups">{groups.map((group, groupIndex) => <div className="tech-group" key={group.title}><p className="tech-group-title">0{groupIndex + 1} / {group.title}</p><div className="tech-grid">{group.items.map(([name, Icon], index) => <motion.div className="tech" key={name} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .04 }}><Icon size={18} /><span>{name}</span></motion.div>)}</div></div>)}</div>
  </div></section>;
}
