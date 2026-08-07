type Props = {
  image: string;
  title: string;
};

export default function SystemArchitecture({
  image,
  title,
}: Props) {
  if (!image) return null;

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        
        {/* Heading */}
        <div className="mb-10 text-center md:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">
            Architecture
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            System Architecture
          </h2>
        </div>

        {/* 
          Container with the "Image as its own background" effect
        */}
        <div className="relative mx-auto flex w-full max-w-5xl items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 p-6 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20">
          
          {/* 1. The Background Image (Blurred & Dimmed) */}
          <div 
            className="absolute inset-0 z-0 scale-110 bg-cover bg-center bg-no-repeat opacity-20 blur-3xl transition-transform duration-700 hover:scale-125"
            style={{ backgroundImage: `url(${image})` }}
          />

          {/* 2. Optional: A subtle dark overlay just in case the image is too bright */}
          <div className="absolute inset-0 z-0 bg-slate-950/40" />

          {/* 3. The Actual Sharp Image */}
          <img
            src={image}
            alt={`${title} system architecture`}
            className="relative z-10 mx-auto h-auto max-h-[550px] w-full max-w-4xl object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>

        {/* Caption */}
        <p className="mt-5 text-center text-sm font-medium text-slate-500">
          System architecture diagram for the {title} application
        </p>
        
      </div>
    </section>
  );
}