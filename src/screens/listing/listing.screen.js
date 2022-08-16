import React, { useEffect, useState } from "react";
import { View, Text, Pressable, ScrollView, Image } from "react-native";
import { withAuthenticator } from "aws-amplify-react-native";
import { Auth } from "aws-amplify";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./listing.styles";
import { colors } from "../../modal/color.modal";
import { Ionicons } from "@expo/vector-icons";

const Listing = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    if (!route.params) {
      console.log("There is no data in route");
    } else {
      if (route.params.imageData !== undefined) {
        setImageData(route.params.imageData);
      }
    }
  })

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
          <Text style={styles.imageText}>Upload images:</Text>
          <Pressable
            style={styles.imageSelect}
            onPress={() => {
              navigation.navigate("SelectPhoto");
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
      <View style={styles.categoryContainer}>
        <View style={styles.categoryIcons}>
          <Ionicons name="ios-options-outline" size={20} color={colors.white} />
          <Text style={styles.categoryText}>Category</Text>
        </View>
        <Ionicons
          name="ios-arrow-forward-circle-outline"
          size={24}
          color={colors.white}
        />
      </View>
      <View style={styles.categoryContainer}>
        <View style={styles.categoryIcons}>
          <Ionicons name="ios-location-sharp" size={20} color={colors.white} />
          <Text style={styles.categoryText}>Location</Text>
        </View>
        <Ionicons
          name="ios-arrow-forward-circle-outline"
          size={24}
          color={colors.white}
        />
      </View>
      <View style={styles.textContainer}>
        <Ionicons name="ios-home-outline" size={24} color={colors.white} />
        <TextInput style={styles.inputText} placeholder="Location Title" />
      </View>
      <View style={styles.textContainer}>
        <Ionicons
          name="ios-document-text-outline"
          size={24}
          color={colors.white}
        />
        <TextInput style={styles.inputText} placeholder="Write a description" />
      </View>
      <View style={[styles.textContainer, { width: "60%" }]}>
        <Ionicons name="ios-card-outline" size={24} color={colors.white} />
        <TextInput
          style={styles.inputText}
          placeholder="Add value"
          keyboardType="number-pad"
          maxLength={5}
        />
        <Text style={styles.inputText}>MXN night</Text>
      </View>
      <View style={styles.postButton}>
        <Text style={styles.postButtonText}>POST THIS LOCATION</Text>
      </View>
    </View>
  );
};

export default withAuthenticator(Listing);
