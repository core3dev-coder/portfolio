import { useRef, ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
    children: ReactNode;
    animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale';
    className?: string;
    delay?: number;
    threshold?: number;
}

const AnimatedSection = ({
    children,
    animation = 'fade-up',
    className,
    delay = 0,
    threshold = 0.1,
}: AnimatedSectionProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useScrollAnimation(ref, { threshold, triggerOnce: true });

    const animationClass = {
        'fade-up': 'animate-fade-in-up',
        'fade-down': 'animate-fade-in-down',
        'fade-left': 'animate-fade-in-left',
        'fade-right': 'animate-fade-in-right',
        'scale': 'animate-scale-in',
    }[animation];

    return (
        <div
            ref={ref}
            className={cn(
                'opacity-0',
                isVisible && animationClass,
                className
            )}
            style={{
                animationDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;
