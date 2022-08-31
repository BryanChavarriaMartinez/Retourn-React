import { Text, TextInput, View, Dimensions } from "react-native";
import styles from "./header-mobile.styles";
import { Ionicons } from "@expo/vector-icons";

const HeaderMobile = () => {
  const windowWidth = Number(Dimensions.get("window").width);

  return (
    <View style={[styles.headerWrap, { display: windowWidth > 800 ? "none" : "flex" }]}>
      <View style={styles.searchWrap}>
        <View style={styles.searchByTextWrap}>
          <Ionicons name="ios-search-sharp" size={20} color="black" />
          <TextInput
            placeholder="Buscar nuevos destinos"
            style={styles.searchPlaceholder}
            multiline={false}
          />
          <Ionicons name="ios-options-sharp" size={20} color="black" />
        </View>
      </View>
      <View style={styles.locationWrap}>
        <Ionicons name="ios-location-sharp" size={20} color="black" />
        <Text style={styles.locationText}>Ubicación</Text>
        <Text style={styles.locationDynText}>Juarez, Chihuahua</Text>
      </View>
    </View>
  );
};

export default HeaderMobile;
