import { StyleSheet } from "react-native";
import { colors } from "../../modal/color.modal";

const styles = StyleSheet.create({
  headerWrap: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  searchWrap: {
    marginTop: 4,
    marginLeft: 20,
    marginBottom: 10,
    backgroundColor: colors.primary,
    alignItems: "center",
    borderRadius: 50,
    width: "90%",
    shadowColor: colors.grey,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  searchByTextWrap: {
    backgroundColor: colors.white,
    flexDirection: "row",
    margin: 10,
    padding: 5,
    borderRadius: 5,
  },
  searchPlaceholder: {
    width: "80%",
    marginLeft: 10,
  },
  locationWrap: {
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: 20,
  },
  locationText: {
    padding: 3,
  },
  locationDynText: {
    padding: 3,
    fontWeight: "bold",
  },
});

export default styles;
