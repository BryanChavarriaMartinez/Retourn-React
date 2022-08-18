import { StyleSheet } from "react-native";
import { colors } from "../../modal/color.modal";

const styles = StyleSheet.create({
  listing: {
    margin: 10,
  },
  listingTitle: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    fontWeight: "bold",
  },
  categoryContainer: {
    display: "flex",
    backgroundColor: colors.grey,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
    paddingVertical: 10,
    paddingLeft: 20,
    paddingRight: 10,
    borderRadius: 30,
  },
  categoryIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryText: {
    fontSize: 16,
    marginLeft: 10,
    color: colors.white,
  },
  textContainer: {
    fontSize: 16,
    backgroundColor: colors.grey,
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 13,
    paddingLeft: 20,
    paddingRight: 10,
    borderRadius: 30,
    marginBottom: 10,
  },
  inputText: {
    width: "90%",
    fontSize: 16,
    marginLeft: 10,
    color: colors.white,
  },
  imageContainer: {},
  imageUpload: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageText: {
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: "bold",
  },
  imageSelect: {
    display: "flex",
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    height: 120,
    width: 120,
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 30,
  },
  imageData: {
    height: 100,
    width: 100,
    marginRight: 5,
    marginBottom: 15,
    marginTop: -10,
  },
  postButton: {
    borderRadius: 30,
    backgroundColor: colors.secondary,
    alignItems: "center",
    marginTop: 5,
    paddingLeft: 20,
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