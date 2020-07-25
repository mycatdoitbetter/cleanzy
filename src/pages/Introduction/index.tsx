import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageBackground, ViewStyle, Dimensions } from "react-native";

import Background from "../../../assets/_intro.png";
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
  const { width, height } = Dimensions.get("window");
  const background: ViewStyle = {
    flex: 1,
    width,
    height,
    marginTop: 120,
    alignItems: "center",
  };
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

      <ImageBackground
        source={Background}
        resizeMode="center"
        style={background}
      />
      <Button onPress={() => navigate("Signin")}>
        <TextStart>Get Started</TextStart>
      </Button>
    </Container>
  );
};

export default Introduction;
