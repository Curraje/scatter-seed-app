import React from "react";
import App from "./src/App";
import scatterSeedTheme from "./src/theme";
import { registerRootComponent } from "expo";
import { Provider as PaperProvider } from "react-native-paper";

function Main() {
  return (
    <PaperProvider theme={scatterSeedTheme}>
      <App />
    </PaperProvider>
  );
}

// Main Entry Point for App
registerRootComponent(Main);
