import React from "react";
import Router from "./navigation";
import { Provider as PaperProvider } from "react-native-paper";
import scatterSeedTheme from "./theme";

export default function App() {
  return (
    <PaperProvider theme={scatterSeedTheme}>
      <Router />
    </PaperProvider>
  );
}
