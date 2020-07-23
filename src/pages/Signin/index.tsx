import SvgUri from "expo-svg-uri";
import React, { useState } from "react";
import { Keyboard, ImageBackground, Dimensions, ViewStyle } from "react-native";

import SVGLogo from "../../../assets/logo.svg";
import SVGBackground from "../../../assets/sig.png";
import {
  Container,
  LogoContainer,
  Logo,
  TextLogo,
  IntroTitle,
  Input,
  GoButton,
  GoButtonText,
} from "./styles";
const { width, height } = Dimensions.get("window");
const Signin: React.FC = () => {
  const background: ViewStyle = {
    flex: 1,
    width,
    height,
    marginTop: 120,
    alignItems: "center",
  };

  const [name, setName] = useState<string>("");
  return (
    <Container>
      <LogoContainer>
        <Logo source={SVGLogo} />
        <TextLogo>Cleanzy</TextLogo>
      </LogoContainer>

      <ImageBackground
        source={SVGBackground}
        resizeMode="center"
        style={background}
      >
        <IntroTitle>What's your name?</IntroTitle>
        <Input placeholder="Tell me you name!" value={name} />
        <GoButton>
          <GoButtonText>Lets Go!</GoButtonText>
        </GoButton>
      </ImageBackground>
    </Container>
  );
};

export default Signin;
