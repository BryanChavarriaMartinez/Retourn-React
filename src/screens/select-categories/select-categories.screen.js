import React, { useState  } from "react";
import { Text, Pressable, ScrollView } from "react-native";
import { useNavigation} from "@react-navigation/native";
import styles from "./select-categories.styles";
import {
  Ionicons,
  Entypo,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { colors } from "../../modal/color.modal";

const SelectCategory = () => {
  const navigation = useNavigation();
  const [catState, setCatState] = useState({
    names: [
      {
        id: 0,
        fullIcon: (
          <MaterialCommunityIcons
            style={styles.catIcon}
            name="home-circle-outline"
            size={24}
            color="black"
          />
        ),
        name: "Departamentos",
      },
      {
        id: 1,
        fullIcon: (
          <Ionicons
            style={styles.catIcon}
            name="car-sport"
            size={24}
            color="black"
          />
        ),
        name: "Vehiculos",
      },
      {
        id: 2,
        fullIcon: (
          <MaterialCommunityIcons
            style={styles.catIcon}
            name="home-edit-outline"
            size={24}
            color="black"
          />
        ),
        name: "Articulos para el hogar",
      },
      {
        id: 3,
        fullIcon: (
          <Entypo style={styles.catIcon} name="book" size={24} color="black" />
        ),
        name: "Libros",
      },
      {
        id: 4,
        fullIcon: (
          <MaterialCommunityIcons
            style={styles.catIcon}
            name="desktop-mac-dashboard"
            size={24}
            color="black"
          />
        ),
        name: "Equipos de oficina",
      },
    ],
  });

  return (
    <ScrollView>
      <Text
        style={styles.categoryText}
      >Seleccion una categoria:</Text>
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