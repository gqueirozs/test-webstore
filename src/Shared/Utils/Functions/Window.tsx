import { useState, useEffect, useRef, ReactNode } from 'react';

export const useWindowHeight = () => {
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return height;
}

export const useElementScroll = () => {
  const windowHeight = useWindowHeight();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setScrollPosition(scrollRef.current.scrollTop);
        setScrollHeight(scrollRef.current.scrollHeight);
      }
    };
  
    const scrollElement = scrollRef.current;
    if (scrollElement) scrollElement.addEventListener('scroll', handleScroll);
  
   return () => {
    if (scrollElement) scrollElement.addEventListener('scroll', handleScroll);
   }
  }, [windowHeight]);

  return {scrollRef, scrollPosition, scrollHeight};
}

