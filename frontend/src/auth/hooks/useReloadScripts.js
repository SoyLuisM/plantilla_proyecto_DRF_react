import { useEffect } from 'react';


export const useReloadScript = (src) => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
      
      return () => {
        document.body.removeChild(script);
      };
    }, [src]);
  };