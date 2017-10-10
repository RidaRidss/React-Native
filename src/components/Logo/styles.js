import { StyleSheet, Dimensions } from "react-native";

let logoWidth = 100;
let logoHeight = 100;

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: width,
    marginTop: height / 3
  },
  stretch: {
    width: logoWidth,
    height: logoHeight
  }
});
export default styles;
