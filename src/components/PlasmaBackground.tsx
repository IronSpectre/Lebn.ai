"use client"

import React, { useRef, useEffect } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";

interface PlasmaBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: [number, number, number];
  speed?: number;
  scale?: number;
  opacity?: number;
  interactive?: boolean;
}

export const PlasmaBackground: React.FC<PlasmaBackgroundProps> = ({
  color = [63/255, 5/255, 255/255], // R-63, G-5, B-255 converted to 0-1 range
  speed = 0.5,
  scale = 3,
  opacity = 1.0,
  interactive = false,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const renderer = new Renderer({ antialias: true, alpha: true });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);

    const vertexShader = `
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform float uTime;
      uniform vec3 uResolution;
      uniform vec3 uColor;
      uniform float uScale;
      uniform float uOpacity;
      uniform vec2 uMouse;
      varying vec2 vUv;

      vec4 renderPlasma(vec2 uvCoord) {
          vec2 fragCoord = uvCoord * uResolution.xy;
          vec2 uv = (2.0 * fragCoord - uResolution.xy) / min(uResolution.x, uResolution.y);
          
          // Scale the coordinates
          uv *= uScale;

          // Create plasma effect with multiple sine waves
          float plasma = 0.0;
          plasma += sin(uv.x * 10.0 + uTime);
          plasma += sin(uv.y * 8.0 + uTime * 1.2);
          plasma += sin((uv.x + uv.y) * 6.0 + uTime * 0.8);
          plasma += sin(sqrt(uv.x * uv.x + uv.y * uv.y) * 12.0 + uTime * 1.5);
          
          // Normalize and create smooth color variations
          plasma = (plasma + 4.0) / 8.0;
          
          // Create flowing color effect
          vec3 color1 = uColor;
          vec3 color2 = uColor * 0.7;
          vec3 color3 = uColor * 1.3;
          
          vec3 finalColor = mix(color1, color2, sin(plasma * 3.14159 + uTime * 0.5) * 0.5 + 0.5);
          finalColor = mix(finalColor, color3, sin(plasma * 6.28318 + uTime * 0.3) * 0.3 + 0.3);
          
          return vec4(finalColor, uOpacity);
      }

      void main() {
          gl_FragColor = renderPlasma(vUv);
      }
    `;

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: {
          value: new Float32Array([
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height,
          ]),
        },
        uColor: { value: new Float32Array(color) },
        uScale: { value: scale },
        uOpacity: { value: opacity },
        uMouse: { value: new Float32Array([0, 0]) },
      },
    });
    const mesh = new Mesh(gl, { geometry, program });

    function resize() {
      const scale = 1;
      renderer.setSize(
        container.offsetWidth * scale,
        container.offsetHeight * scale
      );
      const resUniform = program.uniforms.uResolution.value as Float32Array;
      resUniform[0] = gl.canvas.width;
      resUniform[1] = gl.canvas.height;
      resUniform[2] = gl.canvas.width / gl.canvas.height;
    }
    window.addEventListener("resize", resize);
    resize();

    function handleMouseMove(event: MouseEvent) {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = 1 - (event.clientY - rect.top) / rect.height;
      const mouseUniform = program.uniforms.uMouse.value as Float32Array;
      mouseUniform[0] = x;
      mouseUniform[1] = y;
    }

    function handleTouchMove(event: TouchEvent) {
      if (!interactive || event.touches.length === 0) return;
      const touch = event.touches[0];
      const rect = container.getBoundingClientRect();
      const x = (touch.clientX - rect.left) / rect.width;
      const y = 1 - (touch.clientY - rect.top) / rect.height;
      const mouseUniform = program.uniforms.uMouse.value as Float32Array;
      mouseUniform[0] = x;
      mouseUniform[1] = y;
    }

    if (interactive) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("touchmove", handleTouchMove);
    }

    let animationId: number;
    function update(t: number) {
      animationId = requestAnimationFrame(update);
      program.uniforms.uTime.value = t * 0.001 * speed; // Forward direction
      renderer.render({ scene: mesh });
    }
    animationId = requestAnimationFrame(update);

    container.appendChild(gl.canvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      if (interactive) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("touchmove", handleTouchMove);
      }
      if (gl.canvas.parentElement) {
        gl.canvas.parentElement.removeChild(gl.canvas);
      }
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [color, speed, scale, opacity, interactive]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full -z-10"
      {...props}
    />
  );
};

export default PlasmaBackground;