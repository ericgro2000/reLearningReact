import { useMemo } from "react";

export const usePagination = (totalPages: number) => {

    const pages = useMemo(() => {
      let result: number[] = [];
      for (let i = 0; i < totalPages; i++) {
        result.push(i + 1);
      }
      return result;
    }, [totalPages]);
    
    return pages
  };

