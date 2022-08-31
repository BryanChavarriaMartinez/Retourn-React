import { Text, TextInput, View, Image, Pressable, Button, Dimensions } from "react-native";
import { colors } from "../../modal/color.modal";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./header-computer.styles";

const HeaderComputer = () => {
  const windowWidth = Number(Dimensions.get("window").width);

  return (
    <View
      style={[
        styles.headerWrap,
        { display: windowWidth > 800 ? "flex" : "none" },
      ]}
    >
      <View style={styles.subHeaderWrap}>
        <View style={styles.searchWrap}>
          <View style={styles.imageWrap}>
            <Image
              style={styles.image}
              source={require("../../../assets/retournJpg.JPG")}
            />
          </View>
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
            <Button title="Añadir propiedad" color={colors.green} />
          </View>
          <View style={styles.menuButton}>
            <Button title="Menu" color={colors.secondary} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeaderComputer;
