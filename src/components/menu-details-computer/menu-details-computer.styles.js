import { StyleSheet } from "react-native";
import { colors } from "../../modal/color.modal";

const styles = StyleSheet.create({
  menuWrap: {
    position: "absolute",
    top: 60,
    right: "10%",
  },
  menu: {
    width: 240,
    padding: 20,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: colors.secondary,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 5,
  },
  menuOptions: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  menuOpText: {
    marginLeft: 10,
    color: colors.primary,
  },
});

export default styles;
