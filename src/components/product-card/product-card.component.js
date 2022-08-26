import { Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./product-card.styles";

const ProductCard = (props) => {
    const navigation = useNavigation();
    const product = props.post;

    return (
      <Pressable
        onPress={() => {
          navigation.navigate("ProductDetails");
        }}
        style={styles.container}
      >
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={styles.postImage}
        ></Image>
        <View style={styles.postContentWrap}>
          <View>
            <Text style={styles.postTitle}>{product.title}</Text>
            <Text style={styles.postPlace}>{product.locationName}</Text>
          </View>
          <Text style={styles.postValue}>$ {product.rentValue} MXN Month</Text>
        </View>
      </Pressable>
    );
}

export default ProductCard;