import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import lottie, { AnimationItem } from "lottie-web";

const Animation = styled.div`
  display: flex;
  /* max-width: 50%; */
  max-height: 70px;
  max-width: 70px;
`;

interface LottieProps {
  path?: any;
}

const Lottie: React.FC<LottieProps> = ({ path }) => {
  const ref = useRef<HTMLDivElement>(null);
  const animationInstanceRef = useRef<AnimationItem | null>(null);

  const animate = () => {
    animationInstanceRef.current?.goToAndPlay(0);
  };
  useEffect(() => {
    if (ref.current && !animationInstanceRef.current) {
      animationInstanceRef.current = lottie.loadAnimation({
        container: ref.current, // the dom element that will contain the animation
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: path,
      });
      return () => {
        animationInstanceRef.current?.pause();
      };
    }
  }, [path]);

  return <Animation onMouseEnter={animate} ref={ref} />;
};

export default Lottie;
