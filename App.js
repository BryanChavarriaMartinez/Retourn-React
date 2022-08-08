import { SafeAreaView } from "react-native";
import HeaderMobile from "./src/components/header-mobile/header-mobile.component";
import ProductCard from './src/components/product-card/product-card.component';
import styles from "./App.styles";

export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaViewForDroid}>
      <HeaderMobile />
      <ProductCard />
    </SafeAreaView>
  );
}