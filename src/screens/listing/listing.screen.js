import React, { useEffect, useState } from "react";
import { View, Text, Pressable, ScrollView, Image } from "react-native";
import { withAuthenticator } from "aws-amplify-react-native";
import { Auth } from "aws-amplify";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./listing.styles";
import { colors } from "../../modal/color.modal";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Listing = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [imageData, setImageData] = useState([]);
  const [category, setCategory] = useState({ catID: 0, catName: "Categoría" });
  const [location, setLocation] = useState({ locID: 0, locName: "Ubicación" });
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (!route.params) {
      console.log("There is no data in route");
    } else {
      if (route.params.imageData !== undefined) {
        setImageData(route.params.imageData);
      } else if (route.params.catID !== undefined) {
        setCategory(route.params);
      } else if (route.params.locID !== undefined) {
        setLocation(route.params);
      }
    }
  });

  Auth.currentAuthenticatedUser()
  .then((user) => {
    console.log("Email es: ", user.attributes.email)
  })
  .catch((err) => {
    console.log(err)
    throw err;
  });
  // Auth.signOut();

  return (
    <View style={styles.listing}>
      <View style={styles.imageContainer}>
        <View style={styles.imageUpload}>
          <Text style={styles.imageText}>Sube tus imagenes:</Text>
          <Pressable
            style={styles.imageSelect}
            onPress={() => {
              navigation.navigate("SelectPhotos");
            }}
          >
            <Ionicons
              name="ios-add-circle-outline"
              size={24}
              color={colors.secondary}
            />
          </Pressable>
        </View>
        <View>
          <ScrollView horizontal={true}>
            {imageData &&
              imageData.map((component, index) => (
                <Image
                  key={component.id}
                  source={{ uri: component.uri }}
                  style={styles.imageData}
                />
              ))}
          </ScrollView>
        </View>
      </View>
      <Pressable
        style={styles.categoryContainer}
        onPress={() => {
          navigation.navigate("SelectCategory");
        }}
      >
        <View style={styles.categoryIcons}>
          <Ionicons name="ios-options-outline" size={20} color={colors.white} />
          <Text style={styles.categoryText}>{category.catName}</Text>
        </View>
        <Ionicons
          name="ios-arrow-forward-circle-outline"
          size={24}
          color={colors.white}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("SelectLocation");
        }}
        style={styles.categoryContainer}
      >
        <View style={styles.categoryIcons}>
          <Ionicons name="ios-location-sharp" size={20} color={colors.white} />
          <Text style={styles.categoryText}>{location.locName}</Text>
        </View>
        <Ionicons
          name="ios-arrow-forward-circle-outline"
          size={24}
          color={colors.white}
        />
      </Pressable>
      <View style={styles.textContainer}>
        <MaterialCommunityIcons
          name="text-recognition"
          size={24}
          color={colors.white}
        />
        <TextInput
          onChangeText={(text) => setTitle(text)}
          style={styles.inputText}
          placeholder="Título de la publicación"
          returnKeyType="done"
        />
      </View>
      <View style={styles.textContainer}>
        <MaterialCommunityIcons
          name="text-box-search-outline"
          size={24}
          color={colors.white}
        />
        <TextInput
          onChangeText={(text) => setDescription(text)}
          multiline={true}
          maxHeight={70}
          style={styles.inputText}
          placeholder="Descripción"
        />
      </View>
      <View style={[styles.textContainer, { width: "40%" }]}>
        <MaterialCommunityIcons
          name="currency-usd"
          size={24}
          color={colors.white}
        />
        <TextInput
          onChangeText={(text) => setPrice(text)}
          style={styles.inputText}
          placeholder="Precio"
          keyboardType="number-pad"
          maxLength={6}
          returnKeyType="done"
        />
        <Text>MXN</Text>
      </View>
      <View style={styles.postButton}>
        <Text style={styles.postButtonText}>PUBLICAR AHORA</Text>
      </View>
    </View>
  );
};

export default withAuthenticator(Listing);
