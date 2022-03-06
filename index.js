import React from "react";
import App from "./src/App";
import { registerRootComponent } from "expo";
import { Provider as PaperProvider } from "react-native-paper";

function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

// Main Entry Point for App
registerRootComponent(Main);
