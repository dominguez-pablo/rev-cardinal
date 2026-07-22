import { useEffect, useRef } from 'react';

const RED = { r: 237, g: 28, b: 36 };

const ServiciosHeroBackdrop = ({ containerRef }) => {
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

    const bars = Array.from({ length: 10 }, (_, i) => ({
      x: 0.58 + i * 0.038,
      phase: i * 0.9,
      speed: 0.00095 + (i % 3) * 0.00022,
    }));

    const pulses = Array.from({ length: 8 }, (_, i) => ({
      y: (i + 1) / 9,
      speed: 0.00012 + i * 0.00002,
      phase: i * 1.7,
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

    const drawStatic = () => {
      ctx.fillStyle = '#08080c';
      ctx.fillRect(0, 0, width, height);
      ctx.strokeStyle = 'rgba(237, 28, 36, 0.12)';
      const step = 56;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    const tick = (time) => {
      if (!running) return;

      ctx.fillStyle = 'rgba(8, 8, 12, 0.38)';
      ctx.fillRect(0, 0, width, height);

      const grid = 52;
      const offX = (time * 0.025) % grid;
      const offY = (time * 0.018) % grid;

      ctx.strokeStyle = 'rgba(237, 28, 36, 0.1)';
      ctx.lineWidth = 1;
      for (let x = -grid; x < width + grid; x += grid) {
        ctx.beginPath();
        ctx.moveTo(x + offX, 0);
        ctx.lineTo(x + offX, height);
        ctx.stroke();
      }
      for (let y = -grid; y < height + grid; y += grid) {
        ctx.beginPath();
        ctx.moveTo(0, y + offY);
        ctx.lineTo(width, y + offY);
        ctx.stroke();
      }

      bars.forEach((bar) => {
        const bx = bar.x * width;
        const wave = 0.5 + 0.5 * Math.sin(time * bar.speed + bar.phase);
        const bh = height * (0.1 + 0.14 * wave);
        const grad = ctx.createLinearGradient(0, height, 0, height - bh);
        grad.addColorStop(0, 'rgba(237, 28, 36, 0)');
        grad.addColorStop(0.55, `rgba(${RED.r}, ${RED.g}, ${RED.b}, 0.1)`);
        grad.addColorStop(1, `rgba(${RED.r}, ${RED.g}, ${RED.b}, 0.2)`);
        ctx.fillStyle = grad;
        ctx.fillRect(bx - 10, height - bh, 20, bh);
      });

      pulses.forEach((pulse) => {
        const py = ((pulse.y + Math.sin(time * pulse.speed + pulse.phase) * 0.04) * height);
        const grad = ctx.createLinearGradient(0, py - 2, width, py + 2);
        grad.addColorStop(0, 'rgba(237, 28, 36, 0)');
        grad.addColorStop(0.5, 'rgba(237, 28, 36, 0.35)');
        grad.addColorStop(1, 'rgba(237, 28, 36, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, py - 1, width, 3);
      });

      const sweepY = ((time * 0.055) % (height + 120)) - 60;
      const sweep = ctx.createLinearGradient(0, sweepY - 60, 0, sweepY + 60);
      sweep.addColorStop(0, 'rgba(237, 28, 36, 0)');
      sweep.addColorStop(0.5, 'rgba(255, 255, 255, 0.06)');
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

  return <canvas ref={canvasRef} className="sv-hero-canvas" aria-hidden="true" />;
};

export default ServiciosHeroBackdrop;
