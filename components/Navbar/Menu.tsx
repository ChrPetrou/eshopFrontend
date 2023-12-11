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

const MenuItem = styled.div`
  display: flex;
  flex: 1;
  min-width: 100px;
  /* position: relative; */

  justify-content: center;
  cursor: pointer;
  text-align: center;

  p {
    font-size: 18px;
  }
`;

const MenuChildContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: ${colors.dark};
  position: absolute;
  left: 0;
  padding: 10px;
  top: calc(100% + 5px);
  max-width: 1150px;
  width: 100%;
  border-radius: 5px;

  border: 2px solid ${colors.light};
`;

const ChildContainerInner = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  /* flex: 1; */
  gap: 10px;
  flex-wrap: wrap;

  &::before {
    content: "";
    position: absolute;
    width: 10px;
    left: auto;
    right: auto;
    height: 10px;
    bottom: calc(100% + 5px);

    border-top: 2px solid ${colors.light};
    border-left: 2px solid ${colors.light};

    background-color: ${colors.dark};
    rotate: 45deg;
  }
`;

interface cusDiv {
  hassections: boolean | undefined;
}

const MenuChild = styled.div<cusDiv>`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  width: 100%;
  gap: 10px;
  min-width: 200px;
  flex: 1;
  font-weight: 900;
  border-right: ${({ hassections }) =>
    hassections ? `2px solid ${colors.light}` : "none"};
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
  console.log(ref.current?.offsetLeft);

  return (
    <MenuContainer>
      {menu.map((element, index) => (
        <MenuItem key={index} onMouseEnter={() => setActiveTap(index)}>
          <p>{element.title}</p>

          {element?.nestedMenu != undefined &&
            element.hasOwnProperty("nestedMenu") &&
            activeTap == index &&
            element?.nestedMenu.length > 0 && (
              <MenuChildContainer>
                <ChildContainerInner>
                  {element.nestedMenu.map((child, ind) => (
                    <MenuChild
                      ref={ref}
                      key={ind}
                      hassections={
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
        </MenuItem>
      ))}
    </MenuContainer>
  );
};

export default Menu;