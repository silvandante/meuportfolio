import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink,BlueLink, LogoLink, NavToggle, DesktopNavLinks } from "./helpers/light.js";
import { Link, animateScroll as scroll } from "react-scroll";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-blue-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url('/bg.jpg');
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-blue-800 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-blue-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-blue-500 font-bold rounded shadow transition duration-300 hocus:bg-blue-500 hocus:text-gray-100 focus:shadow-outline`;


export default () => {
  const navLinks = [
    <NavLinks key={1} style={{justifyContent:"space-around"}}>
      <NavLink style={{cursor:"pointer"}}>
      <Link
        duration={500}
        smooth={true}
        to="aboutme">
        Sobre Mim
      </Link>
      </NavLink>
      <NavLink style={{cursor:"pointer"}}>
      <Link
        duration={800}
        style={{cursor:"pointer"}}
        smooth={true}
        to="skills">
        Habilidades
      </Link>
      </NavLink>
      <NavLink style={{cursor:"pointer"}}>
      <Link
        duration={500}
        style={{cursor:"pointer"}}
        smooth={true}
        to="experience">
        Experiência
      </Link>
      </NavLink>
      <NavLink style={{cursor:"pointer"}}>
      <Link
        duration={500}
        style={{cursor:"pointer"}}
        smooth={true}
        to="portfolio">
        Portfólio
      </Link>
      </NavLink>
      <NavLink style={{cursor:"pointer"}}>
      <Link
        duration={500}
        style={{cursor:"pointer"}}
        smooth={true}
        to="videora">
        Vídeo RA
      </Link>
      </NavLink>
      <NavLink style={{cursor:"pointer"}}>
      <Link
        duration={500}
        style={{cursor:"pointer"}}
        smooth={true}
        to="contact">
        Contato
      </Link>
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <BlueLink style={{cursor:"pointer"}} onClick={() => window.open("https://github.com/silvandante")}>
        GitHub
      </BlueLink>
    </NavLinks>
  ];

  return (
    <Container id="main">
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            <Notification>Ás vezes também dou uma de designer</Notification>
            <Heading>
              <span>Mobile & Web Dev</span>
              <br />
              <SlantedBackground>Anny Walker</SlantedBackground>
            </Heading>
            <Link duration={500} smooth={true} to="experience"><PrimaryAction>Minha Experiência</PrimaryAction></Link>
          </LeftColumn>
          <RightColumn>
            <img style={{borderRadius:360,paddingTop:-400,width:400,height:400,objectFit:"cover",textAlign:"top",backgroundPosition:"top center"}} src={'../images/myself.jpg'} />
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
