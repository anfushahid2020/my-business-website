
export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-12">
      <div className="flex-1 z-10 min-w-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary leading-tight mb-6">
          The Ultimate Digital Solution for Educational Institutes
        </h1>
        <p className="text-base md:text-lg text-deep-gray mb-8 max-w-xl">
          We help educational institutes grow their business and deliver exceptional online education. Get the best UI/UX, interactive quiz tests, smart chatbots, and everything you need to engage students and succeed in the digital era.
        </p>
      </div>
    </section>
  );
}
