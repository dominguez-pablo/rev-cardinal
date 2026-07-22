import { useEffect, useRef } from 'react';

const RED = { r: 237, g: 28, b: 36 };

const NosStoryBackdrop = ({ containerRef }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let frameId = 0;
    let running = true;

    const orbs = Array.from({ length: 5 }, (_, i) => ({
      phaseX: i * 1.35,
      phaseY: i * 2.05,
      speed: 0.00022 + i * 0.00004,
      radius: 140 + i * 45,
      ampX: 0.32 + i * 0.04,
      ampY: 0.28 + i * 0.03,
    }));

    const particles = Array.from({ length: 72 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00035,
      vy: (Math.random() - 0.5) * 0.00035,
      size: 1 + Math.random() * 2.2,
    }));

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawOrb = (x, y, radius, alpha) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, radius);
      g.addColorStop(0, `rgba(${RED.r}, ${RED.g}, ${RED.b}, ${alpha * 0.55})`);
      g.addColorStop(0.45, `rgba(${RED.r}, ${RED.g}, ${RED.b}, ${alpha * 0.18})`);
      g.addColorStop(1, 'rgba(237, 28, 36, 0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawStatic = () => {
      ctx.fillStyle = '#0a0a0e';
      ctx.fillRect(0, 0, width, height);
      drawOrb(width * 0.2, height * 0.35, 220, 0.5);
      drawOrb(width * 0.8, height * 0.65, 260, 0.45);
      drawOrb(width * 0.5, height * 0.5, 180, 0.35);
    };

    const tick = (time) => {
      if (!running) return;

      ctx.fillStyle = 'rgba(8, 8, 12, 0.32)';
      ctx.fillRect(0, 0, width, height);

      orbs.forEach((orb) => {
        const x = width * (0.5 + orb.ampX * Math.sin(time * orb.speed + orb.phaseX));
        const y = height * (0.5 + orb.ampY * Math.cos(time * orb.speed * 1.15 + orb.phaseY));
        const pulse = 0.75 + Math.sin(time * 0.002 + orb.phaseX) * 0.25;
        drawOrb(x, y, orb.radius * pulse, 0.85);
      });

      const linkDist = 130;
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;

        const px = p.x * width;
        const py = p.y * height;

        for (let j = i + 1; j < particles.length; j += 1) {
          const q = particles[j];
          const qx = q.x * width;
          const qy = q.y * height;
          const dx = px - qx;
          const dy = py - qy;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * 0.35;
            ctx.strokeStyle = `rgba(${RED.r}, ${RED.g}, ${RED.b}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(qx, qy);
            ctx.stroke();
          }
        }

        ctx.fillStyle = `rgba(${RED.r}, ${RED.g}, ${RED.b}, 0.55)`;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      const sweepY = ((time * 0.04) % (height + 200)) - 100;
      const sweep = ctx.createLinearGradient(0, sweepY - 80, 0, sweepY + 80);
      sweep.addColorStop(0, 'rgba(237, 28, 36, 0)');
      sweep.addColorStop(0.5, 'rgba(237, 28, 36, 0.08)');
      sweep.addColorStop(1, 'rgba(237, 28, 36, 0)');
      ctx.fillStyle = sweep;
      ctx.fillRect(0, 0, width, height);

      frameId = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener('resize', resize);

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    if (reduced) {
      drawStatic();
    } else {
      frameId = requestAnimationFrame(tick);
    }

    return () => {
      running = false;
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      ro.disconnect();
    };
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      className="nos-story-canvas"
      aria-hidden="true"
    />
  );
};

export default NosStoryBackdrop;
