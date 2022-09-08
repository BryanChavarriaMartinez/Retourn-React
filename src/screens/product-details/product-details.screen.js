import React, { useState } from "react";
import { View, Text, Image, ScrollView, Pressable, Dimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import HeaderComputer from "../../components/header-computer/header-computer.component";
import MenuDetailsComputer from "../../components/menu-details-computer/menu-details-computer.component";
import styles from "./product-details.styles";
import { AntDesign } from "@expo/vector-icons";

const ProductDetails = (props) => {
  const windowWidth = Number(Dimensions.get("window").width);
  const route = useRoute();
  const navigation = useNavigation();
  const [images, setImages] = useState(JSON.parse(route.params.postInfo.images));
  const [userEmail, setUserEmail] = useState(route.params.postInfo.owner);
  const substrEmail = userEmail.substr(0, userEmail.indexOf("@"));
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <View style={styles.containerWrap}>
      <HeaderComputer menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
      <View style={styles.container}>
        <View style={{ width: windowWidth > 800 ? "80%" : "100%" }}>
          <View style={styles.imageWrap}>
            <ScrollView
              horizontal={true}
              pagingEnabled
              showsHorizontalScrollIndicator={true}
            >
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
            <Pressable
              onPress={() => navigation.navigate("Home", { screen: "Explore" })}
              style={styles.backButton}
            >
              <AntDesign name="left" size={20} color="black" />
            </Pressable>
            <View style={styles.imageTextWrap}>
              <Text style={styles.imageText}>Desliza para ver mas fotos</Text>
              <AntDesign name="right" style={styles.imageIcon} />
            </View>
          </View>
          <Text style={styles.postTitle}>{route.params.postInfo.title}</Text>
          <View style={styles.locationDetails}>
            <Text style={styles.locationTitle}>Ubicación</Text>
            <Text style={styles.locationText}>
              {route.params.postInfo.locationName}
            </Text>
          </View>
          <View style={[styles.ownerDetails, { marginRight: windowWidth > 800 ? "13%" : 20 }]}>
            <View>
              <Text style={styles.ownedByTitle}>Publicado por</Text>
              <Text style={styles.ownedByMail}>{substrEmail}</Text>
            </View>
            <View style={styles.ownedByIcon}>
              <Text style={styles.ownedByIconText}>
                {substrEmail.charAt(0).toUpperCase()}
              </Text>
            </View>
          </View>
          <View style={styles.descriptionDetails}>
            <Text style={styles.descriptionTitle}>Descipción</Text>
            <Text style={styles.descriptionText}>
              {route.params.postInfo.description}
            </Text>
          </View>
          <View style={styles.rentValueReserve}>
            <View style={styles.rentValueDetails}>
              <Text style={styles.rentValue}>
                $ {route.params.postInfo.rentValue}
              </Text>
              <Text style={styles.rentValueText}>MXN por mes</Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={[
          styles.postButton,
          {
            bottom: windowWidth > 800 ? "11%" : "0.5%",
            right: windowWidth > 800 ? "20%" : "7%",
          },
        ]}
      >
        <Text style={styles.postButtonText}>Reservar</Text>
      </Pressable>
      <MenuDetailsComputer menuToggle={menuToggle} />
    </View>
  );
};

export default ProductDetails;
