"use client";
import { useRef, useEffect } from "react";

export default function BrandSlider({
  children,
  autoplay = true,
  speed = 2000,
}) {
  const trackRef = useRef(null);

  useEffect(() => {
    if (!autoplay) return;

    const track = trackRef.current;
    if (!track) return;

    let position = 0;
    let anim;

    function animate() {
      position -= 0.5;

      track.style.transform = `translateX(${position}px)`;

      const singleSetWidth = track.scrollWidth / 4;

      if (Math.abs(position) >= singleSetWidth) {
        position = 0;
      }

      anim = requestAnimationFrame(animate);
    }

    anim = requestAnimationFrame(animate);

    return () => {
      if (anim) cancelAnimationFrame(anim);
    };
  }, [autoplay, speed]);

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-linear-to-r from-white to-transparent z-20" />

      <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-linear-to-l from-white to-transparent z-20" />

      <div className="whitespace-nowrap overflow-x-hidden no-scrollbar scroll-smooth">
        <div ref={trackRef} className="inline-flex items-center gap-12 px-10">
          {children}
          {children}
          {children}
          {children}
        </div>
      </div>
    </div>
  );
}
