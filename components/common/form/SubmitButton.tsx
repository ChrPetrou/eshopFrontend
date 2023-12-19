import { colors } from "@/configs/colors";
import React from "react";
import { styled } from "styled-components";

interface customProps {
  name: string;
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  width: 100%;
  user-select: none;
`;

const Button = styled.button`
  width: 100%;
  max-width: 200px;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  padding: 10px;
  border: 1px solid ${colors.dark};
  transition: 0.15s all linear;
  &:hover {
    background-color: ${colors.dark};
    color: ${colors.light};
  }
`;

const SubmitButton = ({ name }: customProps) => {
  return (
    <ButtonContainer>
      <Button type="submit"> {name}</Button>
    </ButtonContainer>
  );
};

export default SubmitButton;
