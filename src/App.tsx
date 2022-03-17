import React from "react";
import Router from "./navigation";
import { Provider as PaperProvider } from "react-native-paper";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import scatterSeedTheme from "./theme";
import { isDevelopment } from "./utils/helper.utils";
import { IP, PORT, PRODUCTION_URL } from "react-native-dotenv";

const uri = isDevelopment
  ? `http://${IP || "localhost"}:${PORT || 4000}/graphql`
  : `${PRODUCTION_URL}/graphql`;

console.log("IP", IP);
console.log("PORT", PORT);
console.log("URI", uri);

const client = new ApolloClient({
  uri: uri,
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <PaperProvider theme={scatterSeedTheme}>
        <Router />
      </PaperProvider>
    </ApolloProvider>
  );
}
