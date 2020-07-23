import { useNavigation } from "@react-navigation/native";
import SvgUri from "expo-svg-uri";
import React from "react";

import SVGBackground from "../../../assets/intro_background.svg";
import SVGLogo from "../../../assets/logo.svg";
import {
  Container,
  LogoContainer,
  Logo,
  TextLogo,
  IntroTitle,
  IntroDescription,
  Button,
  TextStart,
} from "./styles";

const Introduction: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <Container>
      <LogoContainer>
        <Logo source={SVGLogo} />
        <TextLogo>Cleanzy</TextLogo>
      </LogoContainer>

      <IntroTitle>Clean Home Clean Life.</IntroTitle>
      <IntroDescription>
        Book Cleaners at the Comfort of you home.
      </IntroDescription>

      <SvgUri source={SVGBackground} width="400px" />
      <Button onPress={() => navigate("Signin")}>
        <TextStart>Get Started</TextStart>
      </Button>
    </Container>
  );
};

export default Introduction;
