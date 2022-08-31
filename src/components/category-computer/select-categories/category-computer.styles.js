import { StyleSheet } from "react-native";
import { colors } from "../../modal/color.modal";

const styles = StyleSheet.create({
    catIcon: {
        marginRight: 10,
    },
    categoryText: {
        fontSize: 20,
        margin: 30,
    },
    categoryMenu: {
        padding: 15,
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        paddingLeft: 30,
        borderBottomWidth: 1,
        borderBottomColor: colors.grey,
    },
});

export default styles;