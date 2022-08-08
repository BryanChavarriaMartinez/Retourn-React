import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import styles from "./product-card.styles";
import { colors } from "../../modal/color.modal";

const ProductCard = () => {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" backgroundColor={colors.primary} />
        <View style={styles.postWrap}>
          <Image
            source={{ uri: "https://picsum.photos/200/300" }}
            style={styles.postImage}
          ></Image>
          <View style={styles.postContentWrap}>
            <View>
              <Text style={styles.postTitle}>This is title for rent:</Text>
              <Text style={styles.postPlace}>New York</Text>
            </View>
            <Text style={styles.postValue}>$100 / Day</Text>
          </View>
        </View>
      </View>
    );
}

export default ProductCard;