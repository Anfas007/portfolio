import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type GalleryImage = {
  src: string;
  title: string;
  description: string;
};

type Props = {
  images: GalleryImage[];
};

export default function ProjectGallery({ images }: Props) {
  const [current, setCurrent] = useState(0);

  if (!images.length) return null;

  const next = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-5xl">

        {/* ================= Heading ================= */}
        <div className="mb-10 text-center md:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
            Gallery
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Project Interfaces
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-400">
            A visual walkthrough of the application's core screens and functionalities.
          </p>
        </div>

        {/* ================= Main Image Container ================= */}
        <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20">
          
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              src={images[current].src}
              alt={images[current].title}
              className="mx-auto max-h-[600px] w-full object-contain p-2"
            />
          </AnimatePresence>

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:bg-blue-600 sm:left-6"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:bg-blue-600 sm:right-6"
            aria-label="Next image"
          >
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>

          {/* Counter Badge */}
          <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/60 px-4 py-1.5 text-xs font-bold tracking-widest text-white shadow-sm backdrop-blur-md">
            {current + 1} / {images.length}
          </div>
        </div>

        {/* ================= Caption ================= */}
        <motion.div 
          key={`caption-${current}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mx-auto mt-8 max-w-3xl text-center"
        >
          <h3 className="text-xl font-bold text-white">
            {images[current].title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            {images[current].description}
          </p>
        </motion.div>

        {/* ================= Thumbnails ================= */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                current === index
                  ? "scale-105 border-blue-500 shadow-md shadow-blue-500/20"
                  : "border-transparent opacity-60 hover:border-white/20 hover:opacity-100"
              }`}
            >
              <img
                src={image.src}
                alt={`Thumbnail of ${image.title}`}
                className="h-20 w-32 object-cover"
              />
              {/* Dark Glass overlay for unselected items */}
              {current !== index && (
                <div className="absolute inset-0 bg-black/40 transition-colors duration-300 hover:bg-transparent" />
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}