import { IP, PORT, PRODUCTION_URL } from "react-native-dotenv";

export const isDevelopment = process.env.NODE_ENV === "development";

export const API_URL = isDevelopment
  ? `http://${IP || "localhost"}:${PORT || 4000}/graphql`
  : `${PRODUCTION_URL}/graphql`;
