import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home/home.screen";
import ProductDetails from "../screens/product-details/product-details.screen";
import SelectPhotos from "../screens/select-photos/select-photos.screen";
import SelectCategory from "../screens/select-categories/select-categories.screen";
import BottomTabNav from "./ButtomTab.navigation";
import { colors } from "../modal/color.modal";

const Route = () => {
    const Stack  = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            cardStyle: {
              backgroundColor: colors.background,
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={BottomTabNav}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SelectPhotos"
            component={SelectPhotos}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SelectCategory"
            component={SelectCategory}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default Route;
