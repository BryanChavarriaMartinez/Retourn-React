import { View } from "react-native";
import HeaderMobile from "../../components/header-mobile/header-mobile.component";
import ProductCard from "../../components/product-card/product-card.component";

const Home = () => {
  return (
    <View>
      <HeaderMobile />
      <ProductCard />
    </View>
  );
};

export default Home;
