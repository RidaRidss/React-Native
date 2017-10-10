import { StylesSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StylesSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width
  },
  button: {
    width: 80,
    height: 40
  }
});
