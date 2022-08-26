import { StyleSheet } from "react-native";
import { colors } from "../../modal/color.modal";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.white,
    marginHorizontal: 10,
  },
  postImage: {
    height: 328,
    width: 340,
    borderRadius: 15,
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 15,
  },
  postContentWrap: {
    justifyContent: "space-around",
    marginLeft: 15,
  },
  postValue: {
    color: colors.primary,
    backgroundColor: colors.secondary,
    alignSelf: "flex-start",
    padding: 8,
    borderRadius: 10,
    overflow: "hidden",
  },
  postPlace: {
    color: colors.grey,
    marginBottom: 8,
  },
  postTitle: {
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default styles;