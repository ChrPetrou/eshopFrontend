import { useModalHook } from "@/utils/hooks/useModalHook";
import React, { cloneElement, useEffect, useRef } from "react";
import { styled } from "styled-components";
import { MdClose } from "react-icons/md";
import { colors } from "@/configs/colors";

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #00000059;
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  left: 0;
  right: 0;
  padding: 10px;
  cursor: pointer;
  top: 0;
  z-index: 1;
`;

const ModalContainerInner = styled.div<{ $mWidth: string; $mHeight: string }>`
  display: flex;
  flex-direction: column;
  cursor: default;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
  /* height: 100%; */
  max-width: ${({ $mWidth }) => $mWidth};
  /* max-height: ${({ $mHeight }) => $mHeight}; */
  background-color: ${colors.light};
  border-radius: 8px;
  & > svg {
    cursor: pointer;
    min-width: 30px;
    min-height: 30px;
    margin-left: auto;
  }
  &:first-child {
  }
`;

interface ModalProps {
  children?: (props: { ToggleModal: () => void }) => React.ReactNode;
  ModalView?: React.ReactNode;

  mWidth?: string;
  mHeight?: string;
}

const Modal = ({
  children,
  ModalView,

  mWidth = "950px",
  mHeight = "550px",
}: ModalProps) => {
  const { isOpen, ToggleModal } = useModalHook();

  const ref = useRef<HTMLDivElement>(null);

  function handleClickOutside(event: React.MouseEvent<HTMLDivElement>) {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      ToggleModal();
    }
  }

  return isOpen ? (
    <>
      {children && children({ ToggleModal })}
      <ModalContainer onClick={(e) => handleClickOutside(e)}>
        <ModalContainerInner $mWidth={mWidth} $mHeight={mHeight} ref={ref}>
          <MdClose size={30} onClick={ToggleModal} />

          {ModalView}
        </ModalContainerInner>
      </ModalContainer>
    </>
  ) : (
    // <></>
    <>{children && children({ ToggleModal })}</>
  );
};

export default Modal;
