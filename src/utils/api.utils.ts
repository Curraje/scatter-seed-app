import { IP, PORT, PRODUCTION_URL } from "react-native-dotenv";

export const isProd = !!PRODUCTION_URL;

export const API_URL = isProd
  ? `${PRODUCTION_URL}/graphql`
  : `http://${IP || "localhost"}:${PORT || 4000}/graphql`;
