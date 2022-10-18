import React, { useState } from "react";
import { Text, View, Image, Pressable } from "react-native";
import styles from "./header-borrower.styles";

const HeaderBorrower = (props) => {
  const product = props.post;
  const [images, setImages] = useState(JSON.parse(product.listing.images));

  return (
    <View>
      <Text>{product.borrowerEmailID}</Text>
      <Pressable style={styles.container}>
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
            <Text style={styles.postTitle}>{product.listing.title}</Text>
            <Text style={styles.postPlace}>{product.listing.locationName}</Text>
          </View>
          <Text style={styles.postValue}>
            $ {product.listing.rentValue} MXN Mes
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default HeaderBorrower;
