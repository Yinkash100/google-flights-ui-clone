import {useCallback, useRef} from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDebounce = (func: (...args: any[]) => void, delay: number) => {
    const timeoutRef = useRef<ReturnType<typeof setTimeout>|null>(null);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return  useCallback((...args: any[]) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            func(...args);
        }, delay);
    }, [func, delay]);
};