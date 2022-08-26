import { StyleSheet } from "react-native";
import { colors } from "../../modal/color.modal";

const styles = StyleSheet.create({
  container: {},
  postImage: {
    height: 320,
    width: 360,
    marginRight: 10,
  },
  postTitle: {
    marginLeft: 10,
    fontSize: 30,
    fontWeight: "bold",
    marginRight: 10,
    marginTop: 20,
    color: colors.secondary,
  },
  ownerDetails: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  ownedByIcon: {
    backgroundColor: colors.secondary,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginRight: 10,
    marginTop: 10,
  },
  ownedByIconText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
  },
  ownedByTitle: {
    color: colors.grey,
    marginTop: 10,
  },
  ownedByMail: {
    fontSize: 15,
    fontWeight: "bold",
  },
  rentValueDetails: {
    margin: 10,
    padding: 20,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: colors.grey,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  rentValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
  },
  rentValueText: {
    color: colors.grey,
    marginTop: 5,
    marginLeft: 15,
  },
  locationDetails: {
    margin: 10,
    marginLeft: 20,
  },
  locationText: {
    color: colors.grey,
  },
  descriptionDetails: {
    margin: 10,
    marginLeft: 20,
  },
  descriptionText: {
    color: colors.grey,
  },
});

export default styles;
