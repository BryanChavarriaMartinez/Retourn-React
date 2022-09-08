import { StyleSheet } from "react-native";
import { colors } from "../../modal/color.modal";

const styles = StyleSheet.create({
  categoryWrap: {
    backgroundColor: colors.primary,
  },
  catIcon: {
    marginRight: 10,
  },
  categoryText: {
    fontSize: 20,
    margin: 30,
  },
  categoryMenu: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: 15,
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    backgroundColor: colors.primary,
  },
});

export default styles;