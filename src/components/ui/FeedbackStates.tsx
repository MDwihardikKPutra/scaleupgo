"use client";

import { motion } from "framer-motion";

interface SkeletonProps {
    className?: string;
    variant?: "rect" | "circle" | "text";
}

export function Skeleton({ className = "", variant = "rect" }: SkeletonProps) {
    return (
        <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className={`bg-navy-900/5 ${variant === "circle" ? "rounded-full" :
                    variant === "text" ? "rounded-md h-4" : "rounded-2xl"
                } ${className}`}
        />
    );
}

export function ServiceCardSkeleton() {
    return (
        <div className="p-8 rounded-[2.5rem] border border-light-border bg-white h-[320px] flex flex-col justify-between">
            <div>
                <Skeleton variant="rect" className="w-12 h-12 rounded-2xl mb-6" />
                <Skeleton variant="text" className="w-3/4 h-8 mb-4" />
                <Skeleton variant="text" className="w-1/4 h-3 mb-6" />
                <div className="space-y-2">
                    <Skeleton variant="text" className="w-full" />
                    <Skeleton variant="text" className="w-5/6" />
                </div>
            </div>
            <Skeleton variant="text" className="w-1/3 h-4" />
        </div>
    );
}

export function ErrorState({ message, onRetry }: { message: string; onRetry?: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <motion.div
                animate={{ x: [0, -2, 2, -2, 2, 0] }}
                transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
                className="w-20 h-20 rounded-[2rem] bg-red-50 flex items-center justify-center mb-6 border border-red-100"
            >
                <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            </motion.div>
            <h3 className="text-xl font-serif text-navy-900 mb-2">Something went wrong</h3>
            <p className="text-navy-500 text-sm font-medium mb-8 max-w-xs">{message}</p>
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="px-6 py-2 bg-navy-900 text-white rounded-full text-[10px] font-mono font-bold uppercase tracking-widest hover:bg-navy-800 transition-colors"
                >
                    Try Again
                </button>
            )}
        </div>
    );
}
