import { StyleSheet, Platform } from "react-native";
import { colors } from "./src/modal/color.modal";

const styles = StyleSheet.create({
  SafeAreaViewForDroid: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: colors.background,
  },
});

export default styles;
