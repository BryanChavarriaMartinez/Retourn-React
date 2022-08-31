import { StyleSheet } from "react-native";
import { colors } from "../../modal/color.modal";

const styles = StyleSheet.create({
  headerWrap: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 80,
    backgroundColor: colors.primary,
  },
  subHeaderWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  searchWrap: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  imageWrap: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: 200,
    height: 60,
  },
  image: {
    //resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  searchByTextWrap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  searchByTextInput: {
    width: 250,
    height: 40,
    padding: 5,
    borderWidth: 2,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    borderColor: colors.secondary,
    backgroundColor: colors.white,
  },
  searchByText: {
    height: 40,
    paddingVertical: 8.5,
    paddingHorizontal: 14,
    marginLeft: -1.8,
    borderWidth: 4,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    color: colors.primary,
    backgroundColor: colors.secondary,
  },
  searchByLocationWrap: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  searchByLocationTitle: {
    marginTop: 4,
    color: colors.secondary,
  },
  searchByLocation: {
    fontWeight: "bold",
    color: colors.secondary,
  },
  menuAddWrap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  menuButton: {
    marginLeft: 10,
  },
});

export default styles;
