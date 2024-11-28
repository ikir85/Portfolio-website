import { useState, useRef } from "react";

interface Props {
  // title: string;
  // description: string;
  imageBackground: string;
  // imageProject: string;
  children: JSX.Element;
  side: "left" | "right";
}

const Parallax = ({ imageBackground, children }: Props) => {
  const [scrollPosition, setScrollPosition] = useState({
    scrollTop: 0,
  });
  const scrollDemoRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollDemoRef.current) {
      const { scrollTop } = scrollDemoRef.current;
      setScrollPosition({ scrollTop });
    }
  };

  return (
    <>
      <div
        ref={scrollDemoRef}
        className="parallax-container relative flex h-[650px] w-full flex-col overflow-auto"
        onScroll={handleScroll}
      >
        <img
          src={imageBackground}
          className={`parallax-bg absolute left-0 top-0 z-0 w-full`}
          style={{
            transform: `translateY(${scrollPosition.scrollTop * 0.5}px)`,
          }}
        />
        {children}
      </div>
    </>
  );
};
export default Parallax;
