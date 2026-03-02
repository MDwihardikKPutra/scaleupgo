"use client";

import { useEffect, useRef } from "react";

export default function HeroCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        // Optimization: Use alpha: false if there's an opaque bg, but we use transparency here.
        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let animId: number;
        let t = 0;
        let isVisible = true;

        // 1. Pause animation when scrolled out of view to fix heavy scrolling
        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
            },
            { threshold: 0 }
        );
        observer.observe(canvas);

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // 2. Reduce node count slightly for 2x performance
        const cols = 28;
        const rows = 16;
        const totalNodes = cols * rows;

        // Arrays to avoid duplicate calculations across neighbors
        const px = new Float32Array(totalNodes);
        const py = new Float32Array(totalNodes);
        const pz = new Float32Array(totalNodes);

        const waveSpeed = 0.9;
        const wave2Speed = 1.1;
        const amplitude = 22;

        const draw = () => {
            animId = requestAnimationFrame(draw);

            // Skip rendering if not visible on screen
            if (!isVisible) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            t += 0.008;

            const W = canvas.width;
            const H = canvas.height;
            const spacingX = W / (cols - 1);
            const spacingY = H / (rows - 1);

            // Pre-calculate positions (3 Math.sin calls instead of ~9 per node)
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const i = r * cols + c;
                    const baseX = c * spacingX;
                    const baseY = r * spacingY;

                    const wave1 = Math.sin(c * 0.45 - t * waveSpeed + r * 0.2) * amplitude;
                    const wave2 = Math.sin(c * 0.3 + t * wave2Speed * 0.7 - r * 0.15) * (amplitude * 0.6);
                    const wave3 = Math.sin(r * 0.55 - t * 0.6 + c * 0.1) * (amplitude * 0.4);

                    px[i] = baseX + wave2 * 0.4;
                    py[i] = baseY + wave1 + wave2 * 0.3 + wave3;
                    pz[i] = (Math.sin(c * 0.45 - t * waveSpeed + r * 0.2) + 1) * 0.5;
                }
            }

            // 3. Batch Line Drawing (1 Draw Call instead of ~1000)
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99,102,241,0.035)`;
            ctx.lineWidth = 0.4;

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const i = r * cols + c;

                    // Right
                    if (c < cols - 1) {
                        ctx.moveTo(px[i], py[i]);
                        ctx.lineTo(px[i + 1], py[i + 1]);
                    }
                    // Below
                    if (r < rows - 1) {
                        ctx.moveTo(px[i], py[i]);
                        ctx.lineTo(px[i + cols], py[i + cols]);
                    }
                }
            }
            ctx.stroke();

            // 4. Draw node dots
            for (let i = 0; i < totalNodes; i++) {
                const z = pz[i];
                const alpha = 0.07 + z * 0.18;
                const size = 0.8 + z * 1.0;

                ctx.beginPath();
                ctx.arc(px[i], py[i], size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(148,163,255,${alpha})`;
                ctx.fill();
            }
        };

        animId = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", resize);
            observer.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.9 }}
        />
    );
}
