"use client"

import { useRef, useEffect, useState, ReactNode } from "react";

interface FadeContentProps {
  children: ReactNode;
  blur?: boolean;
  duration?: number;
  easing?: string;
  delay?: number;
  threshold?: number;
  initialOpacity?: number;
  className?: string;
}

const FadeContent: React.FC<FadeContentProps> = ({
  children,
  blur = false,
  duration = 1000,
  easing = "ease-out",
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = "",
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setInView(true);
          }, delay);
        } else {
          setInView(false);
        }
      },
      { 
        threshold: 0.15,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : initialOpacity,
        transition: `opacity ${duration}ms ${easing}, filter ${blur ? 400 : duration}ms ${easing}`,
        filter: blur ? (inView ? 'blur(0px)' : 'blur(8px)') : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default FadeContent;