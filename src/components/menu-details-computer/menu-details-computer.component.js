import { Text, View, Dimensions, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import styles from "./menu-details-computer.styles";
import { colors } from "../../modal/color.modal";

const MenuDetailsComputer = (props) => {
    const navigation = useNavigation();
    const windowWidth = Number(Dimensions.get("window").width);

    return (
      <View style={styles.menuWrap}>
        <View
          style={[
            styles.menu,
            { display: props.menuToggle
                ? windowWidth > 800
                  ? "flex"
                  : "none"
                : "none",
             }]}>
          <View>
            <Pressable
              onPress={() => {
                navigation.navigate("Home", { screen:"Inbox" })
              }} 
              style={[styles.menuOptions, { marginBottom: 20 }]}>
              <Ionicons
                name="ios-chatbox-outline"
                size={24}
                color={colors.white}
              />
              <Text style={styles.menuOpText}>Inbox</Text>
            </Pressable>
            <Pressable style={[styles.menuOptions, { marginBottom: 20 }]}>
              <Ionicons
                name="ios-person-circle-outline"
                size={24}
                color={colors.white}
              />
              <Text style={styles.menuOpText}>Perfil</Text>
            </Pressable>
            <Pressable style={styles.menuOptions}>
              <SimpleLineIcons name="logout" size={24} color={colors.white} />
              <Text style={styles.menuOpText}>Salir</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
};

export default MenuDetailsComputer;
