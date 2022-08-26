import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./product-details.styles";
import { colors } from "../../modal/color.modal";

const ProductDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [images, setImages] = useState(JSON.parse(route.params.postInfo.images));
  const [userEmail, setUserEmail] = useState(route.params.postInfo.owner);
  const substrEmail = userEmail.substr(0, userEmail.indexOf("@"));

  return (
    <View>
      <ScrollView horizontal={true}>
        {images &&
          images.map((data, index) => (
            <Image
              source={{
                uri:
                  "https://d3oo5832iavce3.cloudfront.net/fit-in/1000x1000/filters:format(jpg)/public/" +
                  images[index].imageUri,
              }}
              key={index}
              style={styles.postImage}
            />
          ))}
      </ScrollView>
      <Text style={styles.postTitle}>{route.params.postInfo.title}</Text>
      <View style={styles.ownerDetails}>
        <View style={styles.ownedByIcon}>
          <Text style={styles.ownedByIconText}>
            {substrEmail.charAt(0).toUpperCase()}
          </Text>
        </View>
        <View>
          <Text style={styles.ownedByTitle}>Publicado por</Text>
          <Text style={styles.ownedByMail}>{substrEmail}</Text>
        </View>
      </View>
      <View style={styles.rentValueDetails}>
        <Text style={styles.rentValue}>
          $ {route.params.postInfo.rentValue}
        </Text>
        <Text style={styles.rentValueText}>MXN por mes</Text>
      </View>
      <View style={styles.locationDetails}>
        <Text style={styles.locationText}>Ubicación</Text>
        <Text>{route.params.postInfo.locationName}</Text>
      </View>
      <View style={styles.descriptionDetails}>
        <Text style={styles.descriptionText}>Descipción</Text>
        <Text>{route.params.postInfo.description}</Text>
      </View>
    </View>
  );
};

export default ProductDetails;
