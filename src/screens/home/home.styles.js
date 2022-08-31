import { StyleSheet } from "react-native";
import { colors } from "../../modal/color.modal";

const styles = StyleSheet.create({
  listWrap: {
    flex: 1,
    alignItems: "center",
  },
  computerListView: {
    flex: 1,
    flexDirection: "row",
  },
  computerListCategory: {
    flexBasis: "20%",
  },
  flatList: {
    flexBasis: "80%",
  },
});

export default styles;
