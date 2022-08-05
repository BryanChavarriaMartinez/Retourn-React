import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fec85c60",
  },
  postWrap: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  postImage: {
    height: 100,
    width: 100,
    borderRadius: 30,
    marginLeft: 10,
    marginRight: 20,
    marginVertical: 10,
  },
  postContentWrap: {
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  postValue: {
    color: "#fec85c",
    backgroundColor: "#293241",
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: 10,
  },
  postPlace: {
    color: "gray",
  },
  postTitle: {
    fontWeight: "bold",
  },
});

export default styles;