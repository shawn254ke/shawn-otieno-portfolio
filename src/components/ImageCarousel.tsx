import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

const ImageCarousel = ({ images, alt }: ImageCarouselProps) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  if (images.length === 0) return null;

  return (
    <div className="relative group overflow-hidden rounded-sm">
      <img
        src={images[current]}
        alt={`${alt} - image ${current + 1}`}
        className="w-full aspect-video object-cover"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1 bg-background/70 border border-border rounded-sm opacity-0 group-hover:opacity-100 transition-opacity btn-press"
          >
            <ChevronLeft size={16} strokeWidth={1.5} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-background/70 border border-border rounded-sm opacity-0 group-hover:opacity-100 transition-opacity btn-press"
          >
            <ChevronRight size={16} strokeWidth={1.5} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-1 rounded-full transition-all ${idx === current ? "w-4 bg-primary" : "w-1.5 bg-foreground/30"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
