import React from "react";
import { Text } from "react-native";

import SVGLogo from "../../../assets/logo.svg";
import { Container, LogoContainer, Logo, TextLogo } from "./styles";
const Introduction: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo source={SVGLogo} />
        <TextLogo>Cleanzy</TextLogo>
      </LogoContainer>

      <Text>Introduction</Text>
    </Container>
  );
};

export default Introduction;
