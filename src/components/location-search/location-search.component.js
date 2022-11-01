import React, { useState  } from "react";
import { Text, Pressable, ScrollView } from "react-native";
import { useNavigation} from "@react-navigation/native";
import styles from "./location-search.styles";
import { colors } from "../../modal/color.modal";

const LocationSearch = () => {
  const navigation = useNavigation();
  const [locState, setLocState] = useState({
    names: [
      {
        id: 0,
        name: "Juarez, Chihuahua",
      },
      {
        id: 1,
        name: "Casas Grandes, Chihuahua",
      },
      {
        id: 2,
        name: "Chihuahua, Chihuahua",
      },
      {
        id: 3,
        name: "Creel, Chihuahua",
      },
      {
        id: 4,
        name: "Torreon, Coahuila",
      },
    ],
  });

  return (
    <ScrollView>
      <Text style={styles.categoryText}>Seleccion una ubicación:</Text>
      {locState.names.map((item, index) => (
        <Pressable
          key={item.id}
          android_ripple={{ color: colors.grey }}
          style={styles.categoryMenu}
          onPress={() => {
            navigation.navigate("Home", {
              screen: "Explore",
              params: {
                locID: item.id,
                locName: item.name, 
              }
            });
          }}
        >
          <Text>{item.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default LocationSearch;