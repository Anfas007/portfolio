import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Container from "../ui/Container";
import { SITE } from "../../data/site";

const navItems = [
  "About",
  "Projects",
  "Skills",
  "Education",
  "Contact",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-5 z-50 w-full">
      <Container>
        {/* ================= Dark Glass Container ================= */}
        <div className="relative flex items-center justify-between rounded-full border border-white/10 bg-slate-950/70 px-6 py-3.5 shadow-lg shadow-black/20 backdrop-blur-md">
          
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-extrabold tracking-tight text-white transition-transform duration-300 hover:scale-105"
          >
            {SITE.name}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-full px-5 py-2 text-sm font-bold text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Resume Button (Desktop) */}
          <div className="hidden lg:block">
            {/* If your Button component isn't dark-mode ready, you can inline a custom dark button here: */}
            <a 
              href={SITE.resume} 
              target="_blank" 
              className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-blue-500"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 lg:hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
          </button>
        </div>

        {/* ================= Mobile Menu Dropdown (Dark Mode) ================= */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 top-full mt-4 w-full px-6 lg:hidden"
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/95 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl">
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="rounded-2xl px-5 py-3.5 text-base font-bold text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {item}
                    </a>
                  ))}
                  
                  {/* Mobile Resume Button */}
                  <div className="mt-4 px-2 pb-2">
                    <a
  href={SITE.resume}
  target="_blank"
  rel="noopener noreferrer"
>
  View Resume
</a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </Container>
    </header>
  );
};

export default Navbar;