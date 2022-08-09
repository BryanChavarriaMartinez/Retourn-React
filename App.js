import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Route from "./src/navigation/Router.navigation";
import styles from "./App.styles";
import { colors } from "./src/modal/color.modal";
import "react-native-gesture-handler";

export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaViewForDroid}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />
      <Route />
    </SafeAreaView>
  );
}