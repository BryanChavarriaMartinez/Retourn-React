import React, { useState } from "react";
import { Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./product-card.styles";

const ProductCard = (props) => {
  const navigation = useNavigation();
  const product = props.post;
  const [images, setImages] = useState(JSON.parse(product.images));

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("ProductDetails", {
          postInfo: product,
        });
      }}
      style={styles.container}
    >
      <Image
        source={{
          uri:
            "https://d3oo5832iavce3.cloudfront.net/fit-in/1000x1000/filters:format(jpg)/public/" +
            images[0].imageUri,
        }}
        style={styles.postImage}
      ></Image>
      <View style={styles.postContentWrap}>
        <View>
          <Text style={styles.postTitle}>{product.title}</Text>
          <Text style={styles.postPlace}>{product.locationName}</Text>
        </View>
        <Text style={styles.postValue}>$ {product.rentValue} MXN Mes</Text>
      </View>
    </Pressable>
  );
};

export default ProductCard;
