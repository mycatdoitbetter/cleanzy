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
  top: 120px;
`;

export const Logo = styled(SvgUri)`
  width: 38px;
  height: 28px;
`;

export const TextLogo = styled.Text`
  color: #fff;
  font-size: 25px;
  margin-left: 10px;
`;
