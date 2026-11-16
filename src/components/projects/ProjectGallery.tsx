import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type GalleryImage = { src: string; title: string; description: string };
type Props = { images: GalleryImage[] };

export default function ProjectGallery({ images }: Props) {
  const [current, setCurrent] = useState(0);
  if (!images.length) return null;
  const next = () => setCurrent((value) => (value + 1) % images.length);
  const prev = () => setCurrent((value) => value === 0 ? images.length - 1 : value - 1);
  return <section className="detail-gallery"><div className="detail-section-heading"><p className="detail-label">Interface tour</p><h2 className="detail-heading">A closer look.</h2></div><div className="gallery-stage"><AnimatePresence mode="wait"><motion.img key={current} src={images[current].src} alt={images[current].title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .25 }} /></AnimatePresence><button className="gallery-arrow gallery-prev" onClick={prev} aria-label="Previous image"><ChevronLeft size={18} /></button><button className="gallery-arrow gallery-next" onClick={next} aria-label="Next image"><ChevronRight size={18} /></button><span className="gallery-count">{current + 1} / {images.length}</span></div><div className="gallery-caption"><h3>{images[current].title}</h3><p>{images[current].description}</p></div><div className="gallery-thumbs">{images.map((image, index) => <button className={index === current ? "active" : ""} key={image.title} onClick={() => setCurrent(index)}><img src={image.src} alt={image.title} /></button>)}</div></section>;
}
