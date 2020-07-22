import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";

import Introduction from "./src/pages/Introduction";

export default function App() {
  return (
    <>
      <Introduction />
      <StatusBar style="auto" />
    </>
  );
}
