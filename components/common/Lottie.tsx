import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import lottie, { AnimationItem } from "lottie-web";

const Animation = styled.div<{ $mHeigth?: string; $mWidth?: string }>`
  display: flex;
  /* max-width: 50%; */
  max-height: ${({ $mHeigth }) => $mHeigth};
  max-width: ${({ $mWidth }) => $mWidth};
`;

interface LottieProps {
  path?: any;
  isLoader?: boolean;
  mHeigth?: string;
  mWidth?: string;
}

const Lottie: React.FC<LottieProps> = ({
  path,
  isLoader,
  mHeigth = "70px",
  mWidth = "70px",
}) => {
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
        loop: !isLoader ? false : true,
        autoplay: true,
        animationData: path,
      });

      return () => {
        animationInstanceRef.current?.pause();
      };
    }
  }, [path, isLoader]);

  useEffect(() => {
    if (animationInstanceRef.current) animationInstanceRef.current?.play();
  }, []);

  return (
    <Animation
      $mHeigth={mHeigth}
      $mWidth={mWidth}
      onMouseEnter={() => animate()}
      ref={ref}
    />
  );
};

export default Lottie;
