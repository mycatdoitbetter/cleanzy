import SvgUri from "expo-svg-uri";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
export const Container = styled.View`
  flex: 1;
  background-color: #5c4db1;

  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
  top: 10%;
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

export const IntroTitle = styled.Text`
  color: #fff;
  font-size: 30px;
  font-family: "Montserrat_600SemiBold";
  text-align: center;
`;

export const Input = styled.TextInput`
  height: 45px;

  background-color: #fff;
  border: 2px solid #d9d9d9;
  border-radius: 8px;

  margin-top: 20px;
  padding: 0 20px;
  width: 280px;

  color: #666;
  font-family: "Montserrat_600SemiBold";
  font-size: 18px;
`;
export const GoButton = styled(RectButton)`
  height: 45px;

  background-color: #ffbf67;
  border: 2px solid #d9d9d9;
  border-radius: 8px;

  margin: 15px;
  padding: 0 20px;
  width: 280px;

  color: #666;
  font-family: "Montserrat_600SemiBold";
  font-size: 18px;

  align-items: center;
  justify-content: center;
`;
export const GoButtonText = styled.Text`
  color: #fff;
  font-family: "Montserrat_600SemiBold";
  font-size: 25px;
`;
