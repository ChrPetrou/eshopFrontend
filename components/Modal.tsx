import { useModalHook } from "@/utils/hooks/useModalHook";
import React, { cloneElement } from "react";
import { styled } from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  background: #00000059;
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  padding: 15px;
  width: 100%;
`;

interface ModalProps {
  children?: (props: { ToggleModal: () => void }) => React.ReactNode;
  ModalView?: React.ReactNode;
}

const Modal = ({ children, ModalView }: ModalProps) => {
  const { isOpen, ToggleModal } = useModalHook();

  return isOpen ? (
    <>
      {children && children({ ToggleModal })}
      <ModalContainer onClick={ToggleModal}>{ModalView}</ModalContainer>
    </>
  ) : (
    <div>{children && children({ ToggleModal })}</div>
  );
};

export default Modal;
