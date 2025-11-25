import { useEffect, useRef } from 'react';

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
}

interface ParticleFieldProps {
    count?: number;
    className?: string;
}

const ParticleField = ({ count = 20, className = '' }: ParticleFieldProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<Particle[]>([]);

    useEffect(() => {
        // Generate random particles
        particlesRef.current = Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 2,
            duration: Math.random() * 10 + 15,
            delay: Math.random() * 5,
        }));
    }, [count]);

    return (
        <div
            ref={containerRef}
            className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
            aria-hidden="true"
        >
            {particlesRef.current.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute rounded-full bg-primary/20 animate-float-slow"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        animationDuration: `${particle.duration}s`,
                        animationDelay: `${particle.delay}s`,
                    }}
                />
            ))}
        </div>
    );
};

export default ParticleField;
