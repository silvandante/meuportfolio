import React, {createRef,useRef} from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "component/BackgroundAsImage.js";
import Features from "component/DashedBorderSixFeatures";
import MainFeature from "component/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "component/TwoColWithTwoFeaturesAndButtons.js";
import Blog from "component/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "component/TwoColumnWithImageAndProfilePictureReview.js";
import ContactUsForm from "component/TwoColContactUsWithIllustration.js";
import Footer from "component/MiniCenteredFooter.js";


export default () => {
  

  return(
  <AnimationRevealPage>
    <Hero/>
    <MainFeature/>
    <Features />
    <MainFeature2 />
    <Testimonial />
    <Blog />
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
)};
