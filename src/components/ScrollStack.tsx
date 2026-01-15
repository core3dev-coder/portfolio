'use client';
import React, { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

export const ScrollStackItem = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
);

interface ScrollStackProps {
    children: React.ReactNode;
    className?: string;
    offset?: number;
    scaleFactor?: number;
}

interface CardProps {
    i: number;
    children: React.ReactNode;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
    total: number;
}

const Card = ({ i, children, progress, range, targetScale, total }: CardProps) => {
    // We use the parent's scroll progress to drive the scale.
    // The card scales from 1 down to targetScale as the scroll progresses through its range.
    const scale = useTransform(progress, range, [1, targetScale]);

    // Calculate a dynamic top offset so cards stack nicely but distinctively
    // We can also just use top-0 if we want them to fully overlap
    // But usually a small offset looks better (e.g. 20px)
    const topOffset = 100 + i * 15;

    return (
        <div
            // The wrapper provides the scroll space (height). 
            // It must be tall enough to scroll through.
            className="h-[100vh] flex items-start justify-center sticky"
            style={{
                // Sticky ensures it stays in viewport
                position: 'sticky',
                top: topOffset,
                zIndex: i
            }}
        >
            <motion.div
                className="w-full relative origin-top"
                style={{
                    scale,
                    // Optional: Add a subtle filter or opacity for depth
                    filter: useTransform(progress, range, ['blur(0px)', 'blur(2px)'])
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

const ScrollStack: React.FC<ScrollStackProps> = ({
    children,
    className = "",
    scaleFactor = 0.05 // How much subsequent cards shrink the previous ones
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        // The offset determines when the animation starts and ends
        offset: ['start start', 'end end']
    });

    const cards = React.Children.toArray(children);
    const len = cards.length;

    return (
        <div
            ref={containerRef}
            className={`relative w-full ${className}`}
            // The container needs substantial height to allow for the scrolling effect
            // We assume each card deserves roughly 1 screen height of scrolling attention?
            // Or just enough to create the parallax.
            // 250vh to 300vh usually works well for 3-4 cards. 
            // Let's use dynamic height based on count.
            style={{ height: `${len * 40 + 70}vh` }}
        >
            {cards.map((card, i) => {
                // Calculate the active range for this card's scaling
                // As we scroll down, 'progress' goes 0 -> 1.
                // We want the FIRST card (i=0) to start scaling immediately as we scroll.
                // We want the LAST card to barely scale.
                // Let's map the progress [0, 1] to the scaling logic.

                // Actually, cleaner logic:
                // Card i should start scaling when Card i+1 arrives?
                // With 'scrollYProgress' 0->1 over the whole container:
                // We can just use uniform ranges.
                const targetScale = 1 - ((len - 1 - i) * scaleFactor);

                return (
                    <Card
                        key={i}
                        i={i}
                        progress={scrollYProgress}
                        range={[0, 1]} // Simple continuous scaling for smoother parallax
                        targetScale={targetScale}
                        total={len}
                    >
                        {card}
                    </Card>
                );
            })}
        </div>
    );
};

export default ScrollStack;
