import { Text, TextInput, View, Image, Pressable, Button, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../modal/color.modal";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./header-computer.styles";

const HeaderComputer = (props) => {
  const windowWidth = Number(Dimensions.get("window").width);
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.headerWrap,
        { display: windowWidth > 800 ? "flex" : "none" },
      ]}
    >
      <View style={styles.subHeaderWrap}>
        <View style={styles.searchWrap}>
          <Pressable
            style={styles.imageWrap}
            onPress={() => {
              navigation.navigate("Home", { screen: "Explore" });
            }}>
            <Image
              style={styles.image}
              source={require("../../../assets/retournLogo.jpg")}
            />
          </Pressable>
          <View style={styles.searchByTextWrap}>
            <TextInput
              style={styles.searchByTextInput}
              multiline={false}
              placeholder="Buscar una ubicación"
            />
            <Pressable>
              <Text style={styles.searchByText}>Buscar</Text>
            </Pressable>
          </View>
          <View style={styles.searchByLocationWrap}>
            <MaterialIcons
              name="location-on"
              size={24}
              color={colors.secondary}
            />
            <Text style={styles.searchByLocationTitle}>
              Ubicacion <Text style={styles.searchByLocation}>Juarez</Text>
            </Text>
          </View>
        </View>
        <View style={styles.menuAddWrap}>
          <View>
            <Button title="Añadir propiedad" color={colors.green} onPress={() => {
              navigation.navigate( "Home", { screen: "Listing" })
            }} />
          </View>
          <View style={styles.menuButton}>
            <Button title="Menu" color={colors.secondary} onPress={() => {
              props.setMenuToggle(!props.menuToggle);
            }} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeaderComputer;
