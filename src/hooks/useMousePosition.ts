import { useEffect, useState } from 'react';

interface MousePosition {
    x: number;
    y: number;
}

export const useMousePosition = (debounceMs: number = 10): MousePosition => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleMouseMove = (event: MouseEvent) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setMousePosition({
                    x: event.clientX,
                    y: event.clientY,
                });
            }, debounceMs);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(timeoutId);
        };
    }, [debounceMs]);

    return mousePosition;
};
