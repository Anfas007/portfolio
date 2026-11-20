import { useState } from "react";
import emailjs from "@emailjs/browser";
import { AlertCircle, CheckCircle, Mail, MapPin, Send } from "lucide-react";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { SITE } from "../../data/site";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); const form = event.currentTarget; setIsSending(true); setStatus("idle"); setErrorMessage("");
    try { await emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form, { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }); form.reset(); setStatus("success"); }
    catch (error: unknown) { console.error("EmailJS error:", error); setStatus("error"); setErrorMessage(error instanceof Error ? error.message : "Unable to send message. Please try again."); }
    finally { setIsSending(false); }
  };
  return <section id="contact" className="section contact">  <div className="container contact-grid">
  <div className="contact-intro"><p className="section-kicker">05 / Contact</p><h2 className="section-title">Let's connect.</h2><p className="contact-copy">Open to interesting opportunities, collaborative projects and new challenges across technology.</p><div className="contact-links"><a href={`mailto:${SITE.email}`}><Mail size={17} /><span><small>Email</small><strong>{SITE.email}</strong></span></a><a href={SITE.linkedin} target="_blank" rel="noreferrer"><FiLinkedin size={17} /><span><small>LinkedIn</small><strong>Connect with me</strong></span></a><a href={SITE.github} target="_blank" rel="noreferrer"><FiGithub size={17} /><span><small>GitHub</small><strong>Explore my work</strong></span></a><span><MapPin size={17} /><span><small>Location</small><strong>Kerala, India</strong></span></span></div></div>
    <form className="form-card contact-form-card card" onSubmit={sendEmail}><div className="form-heading"><span>Start a conversation</span><h3>Send me a message.</h3></div><div className="form-field"><label htmlFor="from_name">Your name</label><input id="from_name" name="from_name" placeholder="Your name" required /></div><div className="form-field"><label htmlFor="reply_to">Email address</label><input id="reply_to" type="email" name="reply_to" placeholder="you@example.com" required /></div><div className="form-field"><label htmlFor="message">Message</label><textarea id="message" name="message" rows={4} placeholder="Tell me a little about your idea..." required /></div>{status === "success" && <div className="status status-success" aria-live="polite"><CheckCircle size={15} /> Message sent successfully.</div>}{status === "error" && <div className="status status-error" aria-live="polite"><AlertCircle size={15} /> {errorMessage}</div>}<button className="button button-primary" type="submit" disabled={isSending}>{isSending ? "Sending..." : "Send message"} <Send size={15} /></button></form>
  </div></section>;
}
