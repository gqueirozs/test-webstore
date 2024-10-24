import { Outlet } from "react-router-dom";
import { Header, LateralBar, BlurContainer } from "Shared/Components";
import isMobile from "Shared/Utils/Functions/Mobile";
import { useEffect, useRef, useState } from "react";

const MainLayout = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setScrollPosition(scrollRef.current.scrollTop);
      }
    };

    const scrollElement = scrollRef.current;  
    if (scrollElement) scrollElement.addEventListener('scroll', handleScroll);
  
    return () => {
      if (scrollElement) scrollElement.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <LateralBar />
      <section id='Content_Section' className={isMobile() ? 'Mobile' : ''}>
        <Header 
          floating={scrollPosition > 70}
        />
        <main ref={scrollRef}>
          <Outlet />
        </main>
      </section>
      <BlurContainer />
    </>
  );
};

export default MainLayout;
