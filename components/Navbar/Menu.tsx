import { colors } from "@/configs/colors";
import useWindowSize from "@/utils/hooks/useWindowSize";
import React, { useState, useRef } from "react";
import { createRef } from "react";
import { styled } from "styled-components";

const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  width: 100%;
  gap: 10px;
  color: ${colors.light};
`;

interface Active {
  isActive: boolean;
}

const MenuItemContainer = styled.div<Active>`
  display: flex;
  flex: 1;
  min-width: 100px;
  justify-content: center;

  border-radius: 5px 5px 0 0;
  &::before {
    content: ${({ isActive }) => (isActive ? `""` : "unset")};
    position: absolute;
    width: 10px;
    left: auto;
    right: auto;
    height: 10px;
    top: calc(100% + 5px);

    border-top: 2.5px solid ${colors.light};
    border-left: 2.5px solid ${colors.light};
    z-index: 10;
    background-color: ${colors.dark};
    rotate: 45deg;
  }
  cursor: pointer;
  text-align: center;

  p {
    font-size: 18px;
  }
`;

interface cusDiv {
  hasSections: boolean | undefined;
  length?: boolean;
}

const MenuChildContainer = styled.div<cusDiv>`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: ${colors.dark};
  position: absolute;
  left: ${({ hasSections, length }) => (hasSections && length ? "0" : "unset")};
  /* margin: auto; */
  padding: 10px;
  top: calc(100% + 10px);
  /* max-width: 1150px; */

  min-width: 250px;
  max-width: 100%;
  width: max-content;
  border-radius: 5px;

  border: 2.5px solid ${colors.light};
`;

const ChildContainerInner = styled.div<cusDiv>`
  position: relative;
  display: flex;
  margin: auto;

  width: 100%;
  /* flex: 1; */
  flex-direction: ${({ hasSections }) => (hasSections ? "row" : "column")};
  gap: 10px;
  flex-wrap: wrap;
`;

const MenuChild = styled.div<cusDiv>`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  width: 100%;
  gap: 10px;
  min-width: 110px;
  flex: 1;
  font-weight: 900;
  border-right: ${({ hasSections }) =>
    hasSections ? `2.5px solid ${colors.light}` : "none"};
  &:last-child {
    border-right: none;
  }
`;

const MenuChildInner = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 400;
`;

interface MenuItem {
  title: string;
  link: string;
  nestedMenu?: MenuItem[];
}

interface Props {
  menu: MenuItem[];
}

const Menu: React.FC<Props> = ({ menu }) => {
  const [activeTap, setActiveTap] = useState<number | null>();
  const { width } = useWindowSize();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <MenuContainer>
      {menu.map((element, index) => (
        <MenuItemContainer
          isActive={
            activeTap === index &&
            element?.nestedMenu != undefined &&
            element?.nestedMenu.length > 0
          }
          key={index}
          onMouseEnter={() => setActiveTap(index)}
        >
          <p>{element.title}</p>

          {element?.nestedMenu != undefined &&
            element.hasOwnProperty("nestedMenu") &&
            activeTap == index &&
            element?.nestedMenu.length > 0 && (
              <MenuChildContainer
                length={
                  element?.nestedMenu != undefined &&
                  element?.nestedMenu.length > 4
                }
                hasSections={
                  element.nestedMenu[0].nestedMenu &&
                  element.nestedMenu[0].nestedMenu.length > 0
                }
              >
                <ChildContainerInner
                  hasSections={
                    element.nestedMenu[0].nestedMenu &&
                    element.nestedMenu[0].nestedMenu.length > 0
                  }
                >
                  {element.nestedMenu.map((child, ind) => (
                    <MenuChild
                      ref={ref}
                      key={ind}
                      hasSections={
                        child?.nestedMenu != undefined &&
                        child.nestedMenu.length > 0
                          ? true
                          : undefined
                      }
                    >
                      <p>{child?.title}</p>
                      {child?.nestedMenu != undefined &&
                        child.nestedMenu.length > 0 &&
                        child.nestedMenu.map((elChild, id) => (
                          <MenuChildInner key={id}>
                            {elChild.title}
                          </MenuChildInner>
                        ))}
                    </MenuChild>
                  ))}
                </ChildContainerInner>
              </MenuChildContainer>
            )}
        </MenuItemContainer>
      ))}
    </MenuContainer>
  );
};

export default Menu;
