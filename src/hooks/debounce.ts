import { useEffect, useState } from "react";

export function useDebounce(value: string, delay: number = 1000): string {
   const [debounced, setDebounced] = useState(value);

   useEffect(() => {
      const handler = setTimeout(() => setDebounced(value), delay);

      return () => clearInterval(handler);
   }, [value, delay]);

   return debounced;
}
