"use client";

import { motion } from "framer-motion";
import { MessageCircle, LayoutTemplate, Megaphone, Cloud } from "lucide-react";

interface OrbitingNodeProps {
    radius: number;
    duration: number;
    delay?: number;
    direction?: 1 | -1;
    size?: number;
    children: React.ReactNode;
}

function OrbitingNode({
    radius,
    duration,
    delay = 0,
    direction = 1,
    size = 48,
    children,
}: OrbitingNodeProps) {
    return (
        <motion.div
            className="absolute left-1/2 top-1/2"
            style={{
                width: radius * 2,
                height: radius * 2,
                marginLeft: -radius,
                marginTop: -radius,
            }}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 * direction }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "linear",
                delay,
            }}
        >
            <motion.div
                className="absolute left-1/2 top-0"
                style={{
                    width: size,
                    height: size,
                    marginLeft: -size / 2,
                    marginTop: -size / 2,
                }}
                initial={{ rotate: 0 }}
                animate={{ rotate: -360 * direction }}
                transition={{
                    duration,
                    repeat: Infinity,
                    ease: "linear",
                    delay,
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}

export default function OrbitingNodes() {
    return (
        <div className="relative w-[300px] md:w-[450px] lg:w-[600px] aspect-square flex items-center justify-center mx-auto">
            {/* Center Content */}
            <div className="absolute z-10 flex flex-col items-center justify-center text-center">
                <span className="text-3xl md:text-5xl font-bold text-white tracking-tight drop-shadow-lg">
                    50+
                </span>
                <span className="text-[10px] md:text-sm text-white/50 mt-1 font-medium tracking-wide">
                    Klien Terpercaya
                </span>
            </div>

            {/* Orbit Rings Backgrounds */}
            <div className="absolute w-[50%] h-[50%] rounded-full border border-white/[0.05]" />
            <div className="absolute w-[75%] h-[75%] rounded-full border border-white/[0.03]" />
            <div className="absolute w-[100%] h-[100%] rounded-full border border-white/[0.01]" />

            {/* Inner Ring Nodes (Radius 150) */}
            <OrbitingNode radius={150} duration={25} direction={1} size={40}>
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#01040D] bg-white ring-2 ring-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <img src="https://i.pravatar.cc/100?img=3" alt="Avatar" className="w-full h-full object-cover" />
                </div>
            </OrbitingNode>

            <OrbitingNode radius={150} duration={25} delay={12.5} direction={1} size={48}>
                <div className="w-full h-full rounded-2xl bg-black border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] transform -rotate-12">
                    <Cloud size={20} className="text-blue-400" />
                </div>
            </OrbitingNode>

            {/* Middle Ring Nodes (Radius 225) */}
            <OrbitingNode radius={225} duration={35} delay={5} direction={-1} size={50}>
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#01040D] shadow-[0_0_20px_rgba(255,100,100,0.2)]">
                    <img src="https://i.pravatar.cc/100?img=5" alt="Avatar" className="w-full h-full object-cover" />
                </div>
            </OrbitingNode>

            <OrbitingNode radius={225} duration={35} delay={16} direction={-1} size={44}>
                <div className="w-full h-full rounded-2xl bg-black border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(255,150,50,0.15)] transform rotate-6">
                    <MessageCircle size={18} className="text-orange-400" />
                </div>
            </OrbitingNode>

            <OrbitingNode radius={225} duration={35} delay={27} direction={-1} size={40}>
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#01040D]">
                    <img src="https://i.pravatar.cc/100?img=1" alt="Avatar" className="w-full h-full object-cover" />
                </div>
            </OrbitingNode>

            {/* Outer Ring Nodes (Radius 300) */}
            <OrbitingNode radius={300} duration={45} delay={0} direction={1} size={56}>
                <div className="w-full h-full rounded-2xl bg-black border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,50,150,0.2)] transform -rotate-6">
                    <Megaphone size={24} className="text-pink-500" />
                </div>
            </OrbitingNode>

            <OrbitingNode radius={300} duration={45} delay={15} direction={1} size={48}>
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#01040D]">
                    <img src="https://i.pravatar.cc/100?img=8" alt="Avatar" className="w-full h-full object-cover" />
                </div>
            </OrbitingNode>

            <OrbitingNode radius={300} duration={45} delay={30} direction={1} size={50}>
                <div className="w-full h-full rounded-2xl bg-[#01040D] border border-white/10 flex items-center justify-center shadow-[0_0_25px_rgba(100,200,255,0.15)] transform rotate-12">
                    <LayoutTemplate size={20} className="text-cyan-400" />
                </div>
            </OrbitingNode>
        </div>
    );
}
