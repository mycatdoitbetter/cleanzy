import SvgUri from "expo-svg-uri";
import { Animated } from "react-native";
import styled from "styled-components/native";
export const Container = styled.View`
  flex: 1;
  background-color: #5c4db1;
`;

export const SecondaryContainer = styled(Animated.View)`
  background-color: #fff;
  border: 1px solid #d9d9d9;

  position: absolute;
  bottom: -20%;
  height: 105%;
  width: 100%;

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;
export const SelectCleaningContainer = styled.View``;
export const SelectFrequencyTabs = styled.View``;
export const SelectExtrasContainer = styled.View``;

export const GestureButton = styled.TouchableOpacity`
  background-color: #5c4db1;
  height: 60px;
  width: 100%;
  margin-top: 1px;

  /* position: absolute; */
  /* top: 0px; */
  margin-left: auto;
  margin-right: auto;

  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export const LogoContainer = styled(Animated.View)`
  align-items: center;
  flex-direction: row;
  padding: 10px;
  top: 10%;

  margin-right: auto;
  margin-left: auto;
`;

export const Logo = styled(SvgUri)`
  width: 35px;
  height: 25px;
`;

export const TextLogo = styled.Text`
  color: #fff;
  font-family: "Montserrat_600SemiBold";
  font-size: 20px;
  margin-left: 10px;
`;
