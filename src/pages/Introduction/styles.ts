import SvgUri from "expo-svg-uri";
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
  position: absolute;
  top: 5%;
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

  position: absolute;
  top: 15%;

  width: 50%;
`;

export const IntroDescription = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: "Montserrat_400Regular";
  text-align: center;

  position: absolute;
  top: 30%;

  width: 70%;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  position: absolute;
  bottom: 0;
  right: 0;

  justify-content: center;
  align-items: center;

  background-color: #fff;
  width: 45%;
  height: 60px;
  border-top-left-radius: 52px;
`;
export const TextStart = styled.Text`
  color: #5c4db1;
  font-size: 20px;
  font-family: "Montserrat_600SemiBold";
  text-align: center;

  width: 70%;
`;
