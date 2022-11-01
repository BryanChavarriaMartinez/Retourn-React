import { Text, TextInput, View, Dimensions, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./header-mobile.styles";
import { Ionicons } from "@expo/vector-icons";

const HeaderMobile = (props) => {
  const windowWidth = Number(Dimensions.get("window").width);
  const navigation = useNavigation();

  function onSearch(e) {
    props.setSearchText(e);
  }

  return (
    <View
      style={[
        styles.headerWrap,
        { display: windowWidth > 800 ? "none" : "flex" },
      ]}
    >
      <View style={styles.searchWrap}>
        <Pressable
          onPress={() => {
            navigation.navigate("CategorySearch");
          }}
          style={styles.searchByTextWrap}
        >
          <Ionicons name="ios-search-sharp" size={20} color="black" />
          <TextInput
            placeholder="Buscar nuevos destinos"
            style={styles.searchPlaceholder}
            multiline={false}
            onSubmitEditing={(event) => onSearch(event.nativeEvent.text)}
          />
          <Ionicons name="ios-options-sharp" size={20} color="black" />
        </Pressable>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate("LocationSearch");
        }}
        style={styles.locationWrap}
      >
        <Ionicons name="ios-location-sharp" size={20} color="black" />
        <Text style={styles.locationText}>Ubicación</Text>
        <Text style={styles.locationDynText}>
          {props.searchByLocation.locationName}
        </Text>
      </Pressable>
    </View>
  );
};

export default HeaderMobile;
