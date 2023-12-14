import React, { useState } from "react";
import { styled } from "styled-components";
import { FaUser } from "react-icons/fa";
import { colors } from "@/configs/colors";
import LoginPopUp from "../loginPopUp/LoginPopUp";
import Modal from "../Modal";

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 25%;
  min-width: 100px;

  margin: auto;
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  border: 1px solid ${({ theme }) => theme.light};
  padding: 10px;
  width: 100%;
  max-width: 150px;
  border-radius: 10px;
  color: ${colors.light};
  cursor: pointer;
  text-decoration: none;
  svg {
    color: ${colors.light};
  }
  &:hover {
    background: ${colors.light};
    color: ${colors.dark};
    svg {
      color: ${colors.dark};
    }
  }
`;

const Profile = () => {
  const OpenModal = () => {
    return <LoginPopUp />;
  };

  return (
    <ProfileContainer>
      <Modal ModalView={<LoginPopUp />}>
        {/* <LoginPopUp /> */}

        {({ ToggleModal }) => (
          <Btn onClick={ToggleModal}>
            <p>login</p>
            <FaUser size={20} />
          </Btn>
        )}
      </Modal>
    </ProfileContainer>
  );
};

export default Profile;
