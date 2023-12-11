import { colors } from "@/configs/colors";
import { fontSize } from "@/configs/device";

import React from "react";
import { FaSearch } from "react-icons/fa";
import { styled } from "styled-components";
const Container = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  min-width: 200px;
`;

const InputCotnainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  outline: none;
  padding: 5px;
  margin: auto;
  border: 1px solid ${colors.gray};
  border-radius: 15px;
  background-color: ${colors.darkGray};

  svg {
    color: ${colors.light};
    margin-right: auto;
    cursor: pointer;
    /* min-width: 30px; */
  }
`;

const Input = styled.input`
  outline: none;
  width: 100%;
  background: unset;
  border: none;
  color: ${colors.light};
  font-size: ${fontSize.sm};
`;

const SearchField = () => {
  return (
    <Container>
      <InputCotnainer>
        <FaSearch size={18} />
        <Input type={"text"} placeholder={"Search..."} />
      </InputCotnainer>
    </Container>
  );
};

export default SearchField;
