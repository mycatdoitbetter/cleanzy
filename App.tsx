import "react-native-gesture-handler";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";
import React from "react";

import Introduction from "./src/pages/Introduction";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Introduction />
      <StatusBar style="auto" />
    </>
  );
}
