"use client";

import { useEffect, useRef } from "react";

// Fewer nodes = fewer draw calls → smoother scroll
const COLS = 20;
const ROWS = 12;
const TOTAL = COLS * ROWS;
const AMPLITUDE = 20;

export default function HeroCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let animId = 0;
        let t = 0;
        let isVisible = true;

        const px = new Float32Array(TOTAL);
        const py = new Float32Array(TOTAL);
        const pz = new Float32Array(TOTAL);

        // ── Resize ────────────────────────────────────────────────
        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // ── RAF control ───────────────────────────────────────────
        const start = () => { if (!animId) animId = requestAnimationFrame(draw); };
        const stop = () => { cancelAnimationFrame(animId); animId = 0; };

        // Truly pause RAF (not just early-return) when scrolled off screen
        const observer = new IntersectionObserver(
            ([entry]) => { isVisible = entry.isIntersecting; isVisible ? start() : stop(); },
            { threshold: 0 }
        );
        observer.observe(canvas);

        // ── Draw loop ─────────────────────────────────────────────
        const draw = () => {
            animId = requestAnimationFrame(draw);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            t += 0.008;

            const W = canvas.width;
            const H = canvas.height;
            const sx = W / (COLS - 1);
            const sy = H / (ROWS - 1);

            // Pre-calculate positions
            for (let r = 0; r < ROWS; r++) {
                for (let c = 0; c < COLS; c++) {
                    const i = r * COLS + c;
                    const w1 = Math.sin(c * 0.45 - t * 0.9 + r * 0.2) * AMPLITUDE;
                    const w2 = Math.sin(c * 0.3 + t * 0.77 - r * 0.15) * (AMPLITUDE * 0.6);
                    const w3 = Math.sin(r * 0.55 - t * 0.6 + c * 0.1) * (AMPLITUDE * 0.4);
                    px[i] = c * sx + w2 * 0.4;
                    py[i] = r * sy + w1 + w2 * 0.3 + w3;
                    pz[i] = (Math.sin(c * 0.45 - t * 0.9 + r * 0.2) + 1) * 0.5;
                }
            }

            // ── Lines — single batch path ─────────────────────────
            ctx.beginPath();
            ctx.strokeStyle = "rgba(99,102,241,0.035)";
            ctx.lineWidth = 0.4;
            for (let r = 0; r < ROWS; r++) {
                for (let c = 0; c < COLS; c++) {
                    const i = r * COLS + c;
                    if (c < COLS - 1) { ctx.moveTo(px[i], py[i]); ctx.lineTo(px[i + 1], py[i + 1]); }
                    if (r < ROWS - 1) { ctx.moveTo(px[i], py[i]); ctx.lineTo(px[i + COLS], py[i + COLS]); }
                }
            }
            ctx.stroke();

            // ── Dots — 4 batched paths by alpha tier ──────────────
            // Grouping into tiers avoids 240 individual fillStyle changes
            const tiers = [
                { min: 0.00, max: 0.25, alpha: 0.08, size: 0.8 },
                { min: 0.25, max: 0.50, alpha: 0.12, size: 1.0 },
                { min: 0.50, max: 0.75, alpha: 0.18, size: 1.3 },
                { min: 0.75, max: 1.01, alpha: 0.25, size: 1.6 },
            ];
            for (const tier of tiers) {
                ctx.beginPath();
                ctx.fillStyle = `rgba(148,163,255,${tier.alpha})`;
                for (let i = 0; i < TOTAL; i++) {
                    if (pz[i] >= tier.min && pz[i] < tier.max) {
                        ctx.moveTo(px[i] + tier.size, py[i]);
                        ctx.arc(px[i], py[i], tier.size, 0, Math.PI * 2);
                    }
                }
                ctx.fill();
            }
        };

        start();

        return () => {
            stop();
            window.removeEventListener("resize", resize);
            observer.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.9, willChange: "transform" }}
        />
    );
}
