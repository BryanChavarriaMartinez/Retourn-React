import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Route from "./src/navigation/Router.navigation";
import styles from "./App.styles";
import { colors } from "./src/modal/color.modal";
import "react-native-gesture-handler";
import { Amplify, Analytics, Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";
Amplify.configure({
  ...awsconfig, 
  Analytics :{
    disabled: true,
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaViewForDroid}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />
      <Route />
    </SafeAreaView>
  );
}