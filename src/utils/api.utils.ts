import { isDevelopment } from "./helper.utils";
import { IP, PORT, PRODUCTION_URL } from "react-native-dotenv";

export const API_URL = isDevelopment
  ? `http://${IP || "localhost"}:${PORT || 4000}/graphql`
  : `${PRODUCTION_URL}/graphql`;
