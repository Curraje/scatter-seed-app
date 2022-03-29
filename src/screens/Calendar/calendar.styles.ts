import { StyleSheet } from "react-native";
import { black } from "react-native-paper/lib/typescript/styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  plantName: {
    fontSize: 24,
    textAlign: "left",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontWeight: "bold",
  },
  scientificText: {
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: 16,
  },
  closeButton: {

  },
  button: {

  },
  headerText: {
    fontWeight: "bold",
    fontSize: 30,
  },
  detailsText: {
    fontWeight: "600",
    fontSize: 16,
    
  },
  buttonSpace: {
    margin: 10,
  },
  calendarMainBody: {
    width: 300,
    height: 100,
    backgroundColor: "grey",
  },
  calendarBody: {
    width: 300,
    height: 90,
    backgroundColor: "green",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
  },
  month: {
    flex: 1,
    width: 24,
    height: 88,
    backgroundColor: "red",
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
    opacity: 0.6,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  monthText: {
    fontSize: 10,
    fontWeight: "bold",
  },
  weekView: {
    flex: 1,
    width: 23,
    height: 78,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  week: {
    flex: 1,
    width: "25%",
    height: 78,
    backgroundColor: "blue",
    borderColor: "black",
    borderWidth: 0.3,
  },
});


export default styles;
