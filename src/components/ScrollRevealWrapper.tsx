"use client"

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  blur?: number;
  scale?: number;
  stagger?: number;
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  once?: boolean;
}

const ScrollRevealWrapper = ({
  children,
  className = "",
  delay = 0,
  duration = 1,
  y = 30,
  blur = 20,
  scale = 0.95,
  stagger = 0.1,
  trigger,
  start = "top bottom-=100",
  end = "bottom center",
  scrub = false,
  once = true,
}: ScrollRevealWrapperProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state
    gsap.set(element, {
      opacity: 0,
      y: y,
      scale: scale,
      filter: `blur(${blur}px)`,
    });

    // Create animation
    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      duration: duration,
      delay: delay,
      ease: scrub ? "none" : "power2.out",
      scrollTrigger: {
        trigger: trigger || element,
        start: start,
        end: end,
        scrub: scrub,
        once: once,
      },
    });

    // If element has children with specific classes, animate them with stagger
    const staggerElements = element.querySelectorAll('.stagger-item');
    if (staggerElements.length > 0) {
      gsap.set(staggerElements, {
        opacity: 0,
        y: 20,
        filter: `blur(${blur}px)`,
      });

      gsap.to(staggerElements, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: duration,
        delay: delay,
        stagger: stagger,
        ease: "power2.out",
        scrollTrigger: {
          trigger: trigger || element,
          start: start,
          end: end,
          once: once,
        },
      });
    }

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === element || st.trigger === trigger) {
          st.kill();
        }
      });
    };
  }, [delay, duration, y, blur, scale, stagger, trigger, start, end, scrub, once]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollRevealWrapper;