import { Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./product-card.styles";

const ProductCard = () => {
    const navigation = useNavigation();

    return (
      <Pressable onPress={() => {
        navigation.navigate("ProductDetails");
      }} style={styles.container}>
          <Image
            source={{ uri: "https://picsum.photos/200/300" }}
            style={styles.postImage}
          ></Image>
          <View style={styles.postContentWrap}>
            <View>
              <Text style={styles.postTitle}>Williams, Arizona, US</Text>
              <Text style={styles.postPlace}>960 kilometers away</Text>
            </View>
            <Text style={styles.postValue}>$4,044 MXN night</Text>
          </View>
      </Pressable>
    );
}

export default ProductCard;