import { useState } from "react";

export const useModalHook = () => {
  const [isOpen, setIsOpen] = useState(false);

  const OpenModal = () => {
    setIsOpen(true);
  };

  const ToggleModal = () => {
    console.log("toggling");

    setIsOpen(!isOpen);
  };

  const CloseModal = () => {
    setIsOpen(false);
  };

  return { OpenModal, ToggleModal, CloseModal, isOpen };
};
