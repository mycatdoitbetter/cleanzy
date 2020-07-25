import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ImageBackground, Dimensions, ViewStyle } from "react-native";

import SVGLogo from "../../../assets/logo.svg";
import Background from "../../../assets/sig.png";
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
  const [name, setName] = useState<string>("");
  const [canGo, setCanGo] = useState<boolean>(false);
  const { navigate } = useNavigation();
  function nameIsFiled(text: string) {
    if (text.length > 2) {
      setName(text);
      setCanGo(true);
    } else {
      setCanGo(false);
    }
  }

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

      <ImageBackground
        source={Background}
        resizeMode="center"
        style={background}
      >
        <IntroTitle>What's your name?</IntroTitle>
        <Input
          placeholder="Tell me you name!"
          defaultValue={name}
          onChangeText={nameIsFiled}
        />
        <GoButton enabled={canGo} onPress={() => navigate("Home")}>
          <GoButtonText>Lets Go!</GoButtonText>
        </GoButton>
      </ImageBackground>
    </Container>
  );
};

export default Signin;
