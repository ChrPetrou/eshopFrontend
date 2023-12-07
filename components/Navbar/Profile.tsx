import React from "react";
import { styled } from "styled-components";
import { FaUser } from "react-icons/fa";
import { colors } from "@/configs/colors";
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 25%;
  min-width: 100px;
  margin: auto;
  svg {
    color: ${colors.light};
  }
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <FaUser size={20} />
    </ProfileContainer>
  );
};

export default Profile;
