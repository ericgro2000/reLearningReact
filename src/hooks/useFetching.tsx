import { useState } from "react";

export const useFetching = (callback: (...args:any) => Promise<void>) => {
    
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>(''); 

    const fetching = async(...args:any) => {
        try {
            setIsLoading(true);
            await callback(...args);
        } catch (e: unknown) { 
            if (typeof e === 'string') {
                setError(e);
            } else {
                setError('An error occurred.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return [fetching, isLoading, error] as const;
};