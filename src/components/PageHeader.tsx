import { ReactNode, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type PageHeaderVariant = "default" | "surface" | "contrast";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  variant?: PageHeaderVariant;
  className?: string;
  children?: ReactNode;
  backgroundImage?: string;
  backgroundImages?: string[];
  overlayClassName?: string;
  autoSlide?: boolean;
  slideInterval?: number;
}

const variantStyles: Record<PageHeaderVariant, string> = {
  default: "bg-gradient-subtle",
  surface: "bg-card",
  contrast: "bg-primary text-primary-foreground",
};

const PageHeader = ({
  eyebrow,
  title,
  description,
  variant = "default",
  className,
  children,
  backgroundImage,
  backgroundImages,
  overlayClassName,
  autoSlide = true,
  slideInterval = 5000,
}: PageHeaderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = backgroundImages || (backgroundImage ? [backgroundImage] : []);

  useEffect(() => {
    if (images.length > 1 && autoSlide) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, slideInterval);
      return () => clearInterval(interval);
    }
  }, [images.length, autoSlide, slideInterval]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const descriptionClasses = cn(
    "text-lg sm:text-xl mb-8 max-w-2xl",
    variant === "contrast" ? "text-primary-foreground/80" : "text-muted-foreground/90",
  );

  return (
    <section className={cn("relative overflow-hidden min-h-[500px]", variantStyles[variant], className)}>
      {images.length > 0 ? (
        <>
          <div className="absolute inset-0 h-full">
            {images.length > 1 ? (
              <div className="relative h-full w-full">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
                {/* Navigation Buttons */}
                {images.length > 1 && (
                  <>
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
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={cn(
                            "h-2 rounded-full transition-all duration-300",
                            index === currentSlide
                              ? "w-8 bg-white"
                              : "w-2 bg-white/50 hover:bg-white/75"
                          )}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <img src={images[0]} alt="" className="w-full h-full object-cover" />
            )}
          </div>
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/50",
              overlayClassName,
            )}
          />
        </>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(142_55%_48%/0.12)_0%,transparent_60%)]" />
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wide">
              {eyebrow}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight tracking-tight">{title}</h1>
          <p className={descriptionClasses}>{description}</p>
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;

