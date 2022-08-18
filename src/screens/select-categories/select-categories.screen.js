import React, { useState  } from "react";
import { Text, Pressable, ScrollView } from "react-native";
import { useNavigation} from "@react-navigation/native";
import styles from "./select-categories.styles";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../modal/color.modal";

const SelectCategory = () => {
  const navigation = useNavigation();
  const [catState, setCatState] = useState({
    names: [
      {
        id: 0,
        fullIcon: (
          <FontAwesome5
            style={styles.catIcon}
            name="hotel"
            size={24}
            color="black"
          />
        ),
        name: "Hotel",
      },
      {
        id: 1,
        fullIcon: (
          <MaterialCommunityIcons
            style={styles.catIcon}
            name="office-building-marker-outline"
            size={24}
            color="black"
          />
        ),
        name: "Departamento",
      },
      {
        id: 2,
        fullIcon: (
          <FontAwesome5
            style={styles.catIcon}
            name="house-user"
            size={24}
            color="black"
          />
        ),
        name: "Casa",
      },
      {
        id: 3,
        fullIcon: (
          <MaterialCommunityIcons
            style={styles.catIcon}
            name="home-switch-outline"
            size={24}
            color="black"
          />
        ),
        name: "Habitacion (Casa compartida)",
      },
      {
        id: 4,
        fullIcon: (
          <MaterialCommunityIcons
            style={styles.catIcon}
            name="home-group"
            size={24}
            color="black"
          />
        ),
        name: "Vecindad",
      },
    ],
  });

  return (
    <ScrollView>
      <Text style={styles.categoryText}>Seleccion una categoría:</Text>
      {catState.names.map((item, index) => (
        <Pressable
          key={item.id}
          android_ripple={{ color: colors.grey }}
          style={styles.categoryMenu}
          onPress={() => {
            navigation.navigate("Listing", {
              catID: item.id,
              catName: item.name,
            });
          }}
        >
          {item.fullIcon}
          <Text>{item.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default SelectCategory;