import { useEffect, useRef } from "react";
import "../styles/CustomCursor.css";
function CustomCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrame;
    let mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const blobs = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const moveMouse = (e) => {
      const dx = e.clientX - mouse.x;
      const dy = e.clientY - mouse.y;

      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const speed = Math.sqrt(dx * dx + dy * dy);

      if (speed > 2) {
        blobs.push({
          x: mouse.x,
          y: mouse.y,
          size: Math.min(35 + speed * 0.35, 75),
          opacity: 0.12,
          life: 1,
          vx: dx * 0.08,
          vy: dy * 0.08,
        });
      }
    };

    const clickBurst = (e) => {
      for (let i = 0; i < 12; i++) {
        const angle = (Math.PI * 2 * i) / 12;

        blobs.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 25 + 15,
          opacity: 0.18,
          life: 1,
          vx: Math.cos(angle) * (Math.random() * 3 + 1),
          vy: Math.sin(angle) * (Math.random() * 3 + 1),
        });
      }
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("click", clickBurst);

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Mouse glow
      const mouseGradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        80
      );

      mouseGradient.addColorStop(0, "rgba(0,0,0,0.12)");
      mouseGradient.addColorStop(0.45, "rgba(0,0,0,0.05)");
      mouseGradient.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = mouseGradient;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 80, 0, Math.PI * 2);
      ctx.fill();

      // Liquid blobs
      for (let i = blobs.length - 1; i >= 0; i--) {
        const blob = blobs[i];

        blob.x += blob.vx;
        blob.y += blob.vy;

        blob.vx *= 0.96;
        blob.vy *= 0.96;

        blob.size *= 0.97;
        blob.life *= 0.965;
        blob.opacity *= 0.975;

        // IMPORTANT:
        // Never allow radius to become zero/negative.
        const radius = Math.max(blob.size, 0.5);

        if (
          blob.life < 0.03 ||
          blob.opacity < 0.003 ||
          radius <= 0.5
        ) {
          blobs.splice(i, 1);
          continue;
        }

        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          radius
        );

        gradient.addColorStop(
          0,
          `rgba(0,0,0,${Math.max(blob.opacity, 0)})`
        );

        gradient.addColorStop(
          0.45,
          `rgba(0,0,0,${Math.max(blob.opacity * 0.45, 0)})`
        );

        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = gradient;

        ctx.beginPath();
        ctx.arc(blob.x, blob.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("click", clickBurst);
    };
  }, []);

  return <canvas ref={canvasRef} className="liquid-cursor" />;
}

export default CustomCursor;