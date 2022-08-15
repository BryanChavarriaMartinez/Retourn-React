import { Text, TextInput, View } from "react-native";
import styles from "./header-mobile.styles";
import { Ionicons } from "@expo/vector-icons";

const HeaderMobile = () => {
  return (
    <View style={styles.headerWrap}>
      <View style={styles.searchWrap}>
        <View style={styles.searchByTextWrap}>
          <Ionicons name="ios-search-sharp" size={20} color="black" />
          <TextInput
            placeholder="Search destinations"
            style={styles.searchPlaceholder}
            multiline={false}
          />
          <Ionicons name="ios-options-sharp" size={20} color="black" />
        </View>
      </View>
      <View style={styles.locationWrap}>
        <Ionicons name="ios-location-sharp" size={20} color="black" />
        <Text style={styles.locationText}>Location</Text>
        <Text style={styles.locationDynText}>Juarez, Chih.</Text>
      </View>
    </View>
  );
};

export default HeaderMobile;
