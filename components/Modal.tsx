import { useModalHook } from "@/utils/hooks/useModalHook";
import React, { cloneElement } from "react";

interface ModalProps {
  children?: (props: { ToggleModal: () => void }) => React.ReactNode;
  ModalView?: React.ReactNode;
}

const Modal = ({ children, ModalView }: ModalProps) => {
  const { isOpen, ToggleModal } = useModalHook();

  return isOpen ? (
    <div onClick={ToggleModal}>{ModalView}</div>
  ) : (
    <div>{children && children({ ToggleModal })}</div>
  );
};

export default Modal;
