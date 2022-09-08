import { StyleSheet } from "react-native";
import { colors } from "../../modal/color.modal";

const styles = StyleSheet.create({
  listWrap: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  computerListView: {
    flex: 1,
    flexDirection: "row",
  },
  computerListCategory: {
    alignItems: "center",
    flexBasis: "20%",
    marginTop: 10,
  },
  flatList: {
    flexBasis: "80%",
    marginTop: 10,
  },
});

export default styles;
