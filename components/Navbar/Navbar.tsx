import { colors } from "@/configs/colors";
import React, { useState } from "react";
import { styled } from "styled-components";
import Container from "../common/Container";
import ContainerInner from "../common/ContainerInner";
import Lottie from "../common/Lottie";
import SearchField from "../common/SearchField";
import animeGirlData from "../../public/animation/animeGirl.json";
import Profile from "./Profile";
import Link from "next/link";
import { device, fontSize, size } from "@/configs/device";
import useWindowSize from "@/utils/hooks/useWindowSize";
import Menu from "./Menu";
import BurgerMenu from "./BurgerMenu";

const ContainerExtent = styled(Container)`
  flex-direction: row;
  background-color: ${colors.dark};
  /* padding: 20px; */
`;

const ContainerInnerExtend = styled(ContainerInner)`
  padding: 10px 15px;
  /* display: flex; */
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
`;

const SearchContainer = styled.div`
  display: flex;
`;

const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 50%;
  flex: 2;
  gap: 1px;
  a {
    margin-top: 10px;
    text-decoration: none;
    text-align: center;
  }
  font-weight: 900;
  font-size: ${fontSize.md};
  color: ${colors.light};
`;

const Navbar = () => {
  const { width } = useWindowSize();

  interface MenuItem {
    title: string;
    link: string;
    nestedMenu?: MenuItem[] | undefined;
  }

  const menu: MenuItem[] = [
    { title: "Home", link: "/", nestedMenu: [] },
    {
      title: "Source Type",
      link: "/source",
      nestedMenu: [
        {
          title: "Anime",
          link: "/source/anime",
          nestedMenu: [
            { title: "One Piece", link: "/source/one-piece" },
            { title: "Naruto", link: "/source/naruto" },
            { title: "Dragon Ball", link: "/source/dragon-ball" },
          ],
        },
        {
          title: "Video Game",
          link: "/source/games",
          nestedMenu: [
            { title: "Dark Souls III", link: "/source/one-piece" },

            { title: "Elden Ring", link: "/" },
            { title: "Resident Evil", link: "/" },
            { title: "Zelda", link: "/" },
            { title: "Final Fantasy", link: "/" },
            { title: "Nier:Automata", link: "/" },
            { title: "Warcraft", link: "/" },
            { title: "Street Fighter", link: "/" },
            { title: "King Of Fighters", link: "/" },
            { title: "Super Mario", link: "/" },
            { title: "League Of Legends", link: "/" },
            { title: "Overwatch", link: "/" },
          ],
        },
        {
          title: "Mobile Game",
          link: "/source/games",
          nestedMenu: [
            { title: "Genshin", link: "/" },
            { title: " Honkai Impact", link: "/" },
            { title: " Honkai: Star Rail", link: "/" },
            { title: "  Blue Archive", link: "/" },
            { title: " Azur Lane", link: "/" },
            { title: " Arknights", link: "/" },
            { title: " Honor Of Kings", link: "/" },
          ],
        },
        {
          title: "SuperHero",
          link: "/source/games",
          nestedMenu: [
            { title: "Dark Souls III", link: "/source/one-piece" },
            { title: "Naruto", link: "/source/naruto" },
            { title: "DC Comics", link: "/" },
            { title: "Marvel", link: "/" },
            { title: "Kamen Rider", link: "/" },
            { title: "Ultraman", link: "/" },
            { title: "Power Rangers", link: "/" },
          ],
        },
        {
          title: "Tv Shows",
          link: "/source/games",
          nestedMenu: [
            { title: "Star Wars", link: "/" },
            { title: " Lord Of The Rings", link: "/" },
            { title: " Transformers", link: "/" },
            { title: " Jurassic Park", link: "/" },
          ],
        },
        {
          title: "CELEBRITY",
          link: "/source/games",
          nestedMenu: [
            { title: " Aeolian", link: "/" },
            { title: "Basketball Player", link: "/" },
            { title: " Football Player", link: "/" },
            { title: " Superstar", link: "/" },
            { title: "  AV Actress", link: "/" },
          ],
        },
        {
          title: "",
          link: "/source/games",
          nestedMenu: [
            { title: " Other", link: "/" },
            { title: "Cartoon", link: "/" },
            { title: "Chinese Culture", link: "/" },
            { title: " Original", link: "/" },
          ],
        },
      ],
    },
    {
      title: "General Type",
      link: "/source",
      nestedMenu: [
        { title: "ACTION Ones", link: "/source/db", nestedMenu: [] },
      ],
    },
    {
      title: "General Type",
      link: "/source",
      nestedMenu: [
        { title: "ACTION Ones", link: "/source/db", nestedMenu: [] },
      ],
    },
    {
      title: "General Type",
      link: "/source",
      nestedMenu: [
        { title: "ACTION Ones", link: "/source/db", nestedMenu: [] },
      ],
    },

    {
      title: "Shop",
      link: "/source",
      nestedMenu: [
        { title: " All", link: "/", nestedMenu: [] },
        { title: "Early Bird", link: "/", nestedMenu: [] },
        { title: " Pre-Order", link: "/" },
        { title: " Released & In Stock", link: "/", nestedMenu: [] },
        { title: "  Post Order Stock", link: "/", nestedMenu: [] },
        { title: "  Super Discount", link: "/", nestedMenu: [] },
      ],
    },
    {
      title: "Height",
      link: "/source",
      nestedMenu: [
        { title: "Big Ones", link: "/source/db", nestedMenu: [] },
        { title: "Small Ones", link: "/source/db", nestedMenu: [] },
        { title: "Small Ones", link: "/source/db", nestedMenu: [] },
        { title: "Small Ones", link: "/source/db", nestedMenu: [] },
        { title: "Small Ones", link: "/source/db", nestedMenu: [] },
        { title: "Small Ones", link: "/source/db", nestedMenu: [] },
        { title: "Small Ones", link: "/source/db", nestedMenu: [] },
        { title: "Small Ones", link: "/source/db", nestedMenu: [] },
        { title: "Small Ones", link: "/source/db", nestedMenu: [] },
        { title: "Small Ones", link: "/source/db", nestedMenu: [] },
        { title: "Small Ones", link: "/source/db", nestedMenu: [] },
        { title: "Small Ones", link: "/source/db", nestedMenu: [] },
      ],
    },
  ];
  return (
    <ContainerExtent>
      <ContainerInnerExtend>
        <SearchContainer>
          {width <= size.tablet && <BurgerMenu />}
          <SearchField />
        </SearchContainer>
        <AnimationContainer>
          <Link href={"/"}>
            <Lottie path={animeGirlData} />
          </Link>
          <p>Nihon Figure Haven</p>
        </AnimationContainer>
        <Profile />
        {width > size.tablet && <Menu menu={menu} />}
      </ContainerInnerExtend>
    </ContainerExtent>
  );
};

export default Navbar;
