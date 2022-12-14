import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Platform,
  Pressable,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { withAuthenticator } from "aws-amplify-react-native";
import { Auth, Storage, API } from "aws-amplify";
import { createListing } from "../../graphql/mutations";
import { v4 as uuidv4 } from "uuid";
import * as ImagePicker from 'expo-image-picker';
import HeaderComputer from "../../components/header-computer/header-computer.component";
import MenuDetailsComputer from "../../components/menu-details-computer/menu-details-computer.component";
import styles from "./listing.styles";
import { colors } from "../../modal/color.modal";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Listing = (props) => {
  const windowWidth = Number(Dimensions.get("window").width);
  const navigation = useNavigation();
  const route = useRoute();
  const [userID, setUserID] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [imageData, setImageData] = useState([]);
  const [category, setCategory] = useState({ catID: 0, catName: "Categoría" });
  const [location, setLocation] = useState({ locID: 0, locName: "Ubicación" });
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [postSuccess, setPostSuccess] = useState("");
  const [postProcessing, setPostProcessing] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
    });
    
    if(!result.cancelled) {
      setImageData(result.selected)
    }
  };

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

  useEffect(() => {
    if (postSuccess !== "") {
      setPostProcessing(false);
      Alert.alert("Publicación exitosa", postSuccess, [
        {
          text: "Ok",
          onPress: () => navigation.navigate("Home", { screen: "Explore" }),
        },
      ]);
    }
  }, [postSuccess]);

  Auth.currentAuthenticatedUser()
    .then((user) => {
      setUserID(user.attributes.sub);
      setUserEmail(user.attributes.email);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  const imageAllUrl = [];
  const storeToDB = async () => {
    setPostProcessing(true);
    imageData &&
      imageData.map(async (component, index) => {
        const imageUrl = component.uri;
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        if(Platform.OS === "web"){
          const contentType = blob.type;
          const extension = contentType.split("/")[1]
          var key = `${uuidv4()}.${extension}`;
        } else {
          const urlParts = imageUrl.split(".");
          const extension = urlParts[urlParts.length - 1];
          var key = `${uuidv4()}.${extension}`;
        }
        imageAllUrl.push({ imageUri: key });
        await Storage.put(key, blob);
        if(imageData.length == index + 1) {
          const postData = {
            title: title,
            categoryName: category.catName,
            categoryID: category.catID,
            description: description,
            images: JSON.stringify(imageAllUrl),
            locationID: location.locID,
            locationName: location.locName,
            owner: userEmail,
            rentValue: price,
            userID: userID,
            commonID: "1"
          };
          await API.graphql({
            query: createListing,
            variables: {input: postData},
            authMode: "AMAZON_COGNITO_USER_POOLS"
          });
          setPostProcessing(false);
          setPostSuccess("Tu anuncio ha sido publicado.");
        }
      });
  };

  // Auth.signOut();
  return (
    <View style={styles.listingWrap}>
      <HeaderComputer menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
      <ScrollView
        style={{
          width: windowWidth > 800 ? "80%" : "100%",
          padding: windowWidth > 800 ? 50 : 10,
        }}
      >
        <Text style={styles.listingTitle}>Crea una nueva publicación</Text>
        <Pressable
          style={[styles.categoryContainer, { marginTop: 10 }]}
          onPress={() => {
            navigation.navigate("SelectCategory");
          }}
        >
          <View style={styles.categoryIcons}>
            <Ionicons
              name="ios-options-outline"
              size={20}
              color={colors.white}
            />
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
            <Ionicons
              name="ios-location-sharp"
              size={20}
              color={colors.white}
            />
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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.textContainer}>
            <MaterialCommunityIcons
              name="text-box-search-outline"
              size={24}
              color={colors.white}
            />
            <TextInput
              onChangeText={(text) => setDescription(text)}
              multiline={true}
              maxHeight={75}
              style={styles.inputText}
              placeholder="Descripción"
            />
          </View>
        </TouchableWithoutFeedback>
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
        <View style={styles.imageContainer}>
          <View style={styles.imageUpload}>
            <Text style={styles.imageText}>Sube tus imagenes:</Text>
            <Pressable
              style={styles.imageSelect}
              onPress={() => {
                if(Platform.OS === "web") {
                  pickImage();
                } else {
                  navigation.navigate("SelectPhotos");
                }
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
          onPress={() => storeToDB()}
          android_ripple={{ color: colors.grey }}
          style={styles.postButton}
        >
          <Text style={styles.postButtonText}>
            {postProcessing ? "Procesando..." : "PUBLICAR AHORA"}
          </Text>
        </Pressable>
      </ScrollView>
      <MenuDetailsComputer menuToggle={menuToggle} />
    </View>
  );
};

export default withAuthenticator(Listing);
