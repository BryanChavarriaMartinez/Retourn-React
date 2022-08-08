import { StyleSheet } from "react-native";
import { colors } from "../../modal/color.modal";

const styles = StyleSheet.create({
  headerWrap: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: colors.primary,
    alignItems: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  searchByTextWrap: {
    backgroundColor: colors.white,
    flexDirection: "row",
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  searchPlaceholder: {
    width: "100%",
    marginLeft: 5,
  },
  locationCategoryWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
  },
  locationWrap: { flexDirection: "row" },
  locationText: { marginLeft: 5 },
  locationDynText: { fontWeight: "bold", marginLeft: 5 },
  categoryWrap: { flexDirection: "row" },
  categoryText: { marginLeft: 5 },
  categoryDynText: { fontWeight: "bold", marginLeft: 5 },
});

export default styles;
