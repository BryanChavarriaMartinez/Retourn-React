import { StyleSheet } from "react-native";
import { colors } from "../../modal/color.modal";

const styles = StyleSheet.create({
  category: {
    display: "flex",
    backgroundColor: colors.grey,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20,
    paddingVertical: 10,
    paddingLeft: 20,
    paddingRight: 10,
    borderRadius: 30,
  },
  inputText: {
    fontSize: 16,
    backgroundColor: colors.grey,
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 13,
    paddingLeft: 20,
    paddingRight: 10,
    borderRadius: 30,
    marginBottom: 20,
  },
  image: {
    display: "flex",
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    height: 180,
    width: 150,
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 30,
  },
  postButton: {
    margin: 10,
    borderRadius: 30,
    backgroundColor: colors.secondary,
    alignItems: "center",
    paddingLeft: 20,
    marginTop: 40,
    elevation: 5,
  },
  postButtonText: {
    color: colors.white,
    paddingVertical: 15,
    fontSize: 14.5,
    fontWeight: "bold",
  },
});

export default styles;