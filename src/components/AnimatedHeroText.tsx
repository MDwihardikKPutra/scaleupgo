"use client";

import React, { CSSProperties } from "react";

interface Props {
    text: string;
    /** Substring of `text` rendered in accent color + italic */
    highlightText?: string;
    as?: React.ElementType;
    className?: string;
}

const STAGGER_MS = 120;

const ACCENT_STYLE: CSSProperties = {
    color: "var(--color-accent-400, #60a5fa)",
    fontStyle: "italic",
    fontWeight: 300,
};

function getHighlightStart(words: string[], highlight: string): number {
    const hWords = highlight.trim().split(" ");
    for (let i = 0; i <= words.length - hWords.length; i++) {
        if (words.slice(i, i + hWords.length).join(" ") === highlight.trim()) return i;
    }
    return -1;
}

/**
 * Renders a heading where each word loops with a vertical ticker-flip animation.
 * Words matching `highlightText` are shown in accent color + italic.
 */
export default function AnimatedHeroText({ text, highlightText, as: Tag = "p", className }: Props) {
    const words = text.split(" ");
    const highlightStart = highlightText ? getHighlightStart(words, highlightText) : -1;

    return (
        <Tag className={className}>
            {words.map((word, i) => {
                const isHighlight = highlightStart >= 0 && i >= highlightStart;
                return (
                    <React.Fragment key={i}>
                        <span className="word-flip-clip">
                            <span
                                className="word-flip-inner"
                                style={{
                                    animationDelay: `${i * STAGGER_MS}ms`,
                                    ...(isHighlight ? ACCENT_STYLE : undefined),
                                }}
                            >
                                {word}
                            </span>
                        </span>
                        {i < words.length - 1 && " "}
                    </React.Fragment>
                );
            })}
        </Tag>
    );
}
