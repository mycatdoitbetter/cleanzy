import React from "react";
import { Animated, TransformsStyle, StyleProp } from "react-native";
import {
  PanGestureHandler,
  State,
  PanGestureHandlerStateChangeEvent,
} from "react-native-gesture-handler";

import SVGLogo from "../../../assets/logo.svg";
import {
  Container,
  SecondaryContainer,
  SelectCleaningContainer,
  SelectFrequencyTabs,
  SelectExtrasContainer,
  LogoContainer,
  Logo,
  TextLogo,
} from "./styles";
const Home: React.FC = () => {
  let offset = 0;
  const translateY = new Animated.Value(0);

  function onHandlerStateChange(event: PanGestureHandlerStateChangeEvent) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = true;
      const { translationY } = event.nativeEvent;

      offset += translationY;
      console.log(translationY);
      console.log(opened);

      if (translationY >= 150) {
        opened = true;
      } else {
        opened = false;
      }
      if (translationY <= -200) {
        opened = false;
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 600 : 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 500 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  const animatedContainer: any = {
    transform: [
      {
        translateY: translateY.interpolate({
          inputRange: [-100, 0, 450],
          outputRange: [-20, 0, 500],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  const animatedLogo: any = {
    opacity: translateY.interpolate({
      inputRange: [-500, 0, 0],
      outputRange: [0.1, 1, 1],
    }),
  };

  return (
    <Container>
      <LogoContainer style={animatedLogo}>
        <Logo source={SVGLogo} />
        <TextLogo>André</TextLogo>
      </LogoContainer>

      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <SecondaryContainer style={animatedContainer}>
          <SelectCleaningContainer />

          <SelectFrequencyTabs />
          <SelectExtrasContainer />
        </SecondaryContainer>
      </PanGestureHandler>
    </Container>
  );
};

export default Home;
