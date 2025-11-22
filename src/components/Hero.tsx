import heroImage from "@/assets/hero-fence.jpg";
import metalFence from "@/assets/metal-fence.jpg";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Hero slides configuration: 2 fence slides + 2 metals slides
const heroSlides = [
  // Fence Slide 1
  {
    image: heroImage,
    eyebrow: "Premium Fencing Solutions",
    title: "Professional Chain Link & Security Fencing",
    description: "Explore our comprehensive range of high-quality fencing products including chain link fences, PVC fences, wire mesh, and fencing panels designed for durability, security, and performance.",
    primaryButton: { text: "View Fence Products", link: "/products" },
    secondaryButton: { text: "Get a Quote", link: "/contact" },
  },
  // Fence Slide 2
  {
    image: metalFence,
    eyebrow: "Secure Your Property",
    title: "Durable Fencing for Every Application",
    description: "From residential boundaries to industrial security, our fencing solutions offer superior protection, low maintenance, and long-lasting performance. Trusted by businesses across UAE and GCC.",
    primaryButton: { text: "View Fence Products", link: "/products" },
    secondaryButton: { text: "Contact Us", link: "/contact" },
  },
  // Metals Slide 1
  {
    image: "https://media.istockphoto.com/id/1461248986/photo/stack-of-rolled-metal-on-a-metal-background-3d-illustration.jpg?s=612x612&w=0&k=20&c=pjlRePHe8xJAYzaMxKIUInNSHoYKY5IHQFdoNwIPyjM=",
    eyebrow: "Premium Metal Products",
    title: "High-Quality Steel Coils & Sheets",
    description: "Discover our extensive range of metal products including GI coils, PPGI color coated coils, corrugated sheets, sandwich panels, purlins, and decking sheets. Meeting international standards for construction excellence.",
    primaryButton: { text: "View Metal Products", link: "/metals" },
    secondaryButton: { text: "Request Quote", link: "/contact" },
  },
  // Metals Slide 2
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=2000&q=90",
    eyebrow: "Steel Trading Excellence",
    title: "Your Trusted Partner for Building Materials",
    description: "Kredence Steel Trading delivers premium quality steel products and building materials across UAE and GCC. With over 15 years of experience, we provide comprehensive solutions for construction and industrial projects.",
    primaryButton: { text: "View Metal Products", link: "/metals" },
    secondaryButton: { text: "Speak to Expert", link: "/contact" },
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoSlide(false);
    setTimeout(() => setAutoSlide(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setAutoSlide(false);
    setTimeout(() => setAutoSlide(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setAutoSlide(false);
    setTimeout(() => setAutoSlide(true), 10000);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative min-h-[620px] w-full overflow-hidden pt-12">
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
            </div>
          ))}
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#132E40]/95 via-[#1E4A63]/85 to-[#4A5459]/60" />
      </div>

      <div className="relative z-10 flex h-full w-full items-stretch">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center py-16">
              <div className="mb-6 flex items-center gap-2">
                <span className="h-1 w-12 bg-[#2E6A92]" />
                <span className="h-1 w-4 bg-[#2E6A92]" />
                <span className="h-1 w-2 bg-[#2E6A92]" />
              </div>
              <span className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                {currentSlideData.eyebrow}
              </span>
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                {currentSlideData.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
                {currentSlideData.description}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to={currentSlideData.primaryButton.link}
                  className="inline-flex items-center justify-center rounded-md bg-[#2E6A92] px-8 py-4 text-base font-semibold uppercase tracking-wide text-white shadow-md transition hover:bg-[#245676]"
                >
                  {currentSlideData.primaryButton.text}
                </Link>
                <Link
                  to={currentSlideData.secondaryButton.link}
                  className="inline-flex items-center justify-center rounded-md bg-[#4A5459] px-8 py-4 text-base font-semibold uppercase tracking-wide text-white shadow-md transition hover:bg-[#374047]"
                >
                  {currentSlideData.secondaryButton.text}
                </Link>
              </div>
            </div>

            <div className="relative hidden h-[550px] max-h-[550px] items-end justify-end pt-8 lg:flex">
              <div className="absolute inset-y-16 right-16 w-4 rounded bg-white/70" />
              <div className="absolute bottom-16 right-16 h-12 w-4 rounded bg-white/70" />
              <div className="absolute top-12 right-16 h-12 w-24 bg-white/40" />
              <div className="absolute left-[-80px] top-0 h-full w-[calc(100%+80px)] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <div className="relative h-full w-full overflow-hidden rounded-lg">
                <img
                  src={currentSlideData.image}
                  alt={currentSlideData.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
