import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "component/misc/Headings.js";

import defaultCardImage from "../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../images/support-icon.svg";
import ShieldIconImage from "../images/shield-icon.svg";
import CustomizeIconImage from "../images/customize-icon.svg";
import FastIconImage from "../images/fast-icon.svg";
import ReliableIconImage from "../images/reliable-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-blue-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-blue-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-blue-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: 'https://silvandante.github.io/meuportfolio/reactnative.png',
      title: "React Native",
      description: "Experiência com Arquitetura Offline First, comunicação com REST API, Redux (Saga, Persist), Geolocalização, Push Notification, Real Time, Google ARCore e bibliotecas Google"
    },
    {
      imageSrc: 'https://silvandante.github.io/meuportfolio/android.png',
      title: "Java - Android Studio",
      description: "Experiência com Broadcast (Receiver - Listener), comunicação com REST API, LocalStorage, PushNotification FCM, Arquitetura Offline First, Geolocalização, Google ARCore e bibliotecas Google"
    },
    { imageSrc:'https://silvandante.github.io/meuportfolio/reactnative.png', title: "React JS" ,
    description: "Experiência com Redux, Geolocalização, Google ARCore e bibliotecas Google"},
    { imageSrc:  'https://silvandante.github.io/meuportfolio/nodejs.png', title: "Node JS",
    description: "Experiência com REST API, JWT, PayPal, Microsserviços com comunicação AMQP." },
    { imageSrc: 'https://silvandante.github.io/meuportfolio/dj.png', title: "Django",
    description: "Experiência com Django Rest Framework, JWT, Microsserviços com comunicação AMQP, Pagseuro." },
    { imageSrc: 'https://silvandante.github.io/meuportfolio/aws.png', title: "AWS",
    description: "Experiência com S3 Bucket, EC2, Lambda." },
    { imageSrc: 'https://silvandante.github.io/meuportfolio/heroku.png', title: "Heroku",
    description: "Experiência com deploy com uso de docker." },
  ];

  return (
    <Container id="skills">
      <ThreeColumnContainer>
        <Heading>Minhas <span tw="text-blue-500">Habilidades</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img style={{objectFit:"contain"}} src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
