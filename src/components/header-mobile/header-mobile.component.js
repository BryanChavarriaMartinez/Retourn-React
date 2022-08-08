import { Text, TextInput, View } from "react-native";
import styles from "./header-mobile.styles";
import { Feather, Entypo, Ionicons } from "@expo/vector-icons";

const HeaderMobile = () => {
  return (
    <View style={styles.headerWrap}>
      <View style={styles.searchByTextWrap}>
        <Feather name="search" size={24} color="black" />
        <TextInput
          placeholder="Search in our website"
          style={styles.searchPlaceholder}
          multiline={false}
        />
      </View>
      <View style={styles.locationCategoryWrap}>
        <View style={styles.locationWrap}>
          <Entypo name="location" size={24} color="black" />
          <Text style={styles.locationText}>Location</Text>
          <Text style={styles.locationDynText}>New York</Text>
        </View>
        <View style={styles.categoryWrap}>
          <Ionicons name="ios-settings" size={24} color="black" />
          <Text style={styles.categoryText}>Category</Text>
          <Text style={styles.categoryDynText}>Vehicle</Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderMobile;
