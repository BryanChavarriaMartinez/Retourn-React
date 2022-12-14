import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home/home.screen";
import ProductDetails from "../screens/product-details/product-details.screen";
import SelectPhotos from "../screens/select-photos/select-photos.screen";
import SelectCategory from "../screens/select-categories/select-categories.screen";
import SelectLocation from "../screens/select-location/select-location.screen";
import CategorySearch from "../components/category-search/category-search.component";
import LocationSearch from "../components/location-search/location-search.component";
import BottomTabNav from "./ButtomTab.navigation";
import { colors } from "../modal/color.modal";

const Route = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer
      linking={{
        prefixes: [
          "retournApp://",
          "https://retourn.casa",
          "https://*.retourn.casa",
        ],
        config: {
          screens: {
            Home: {
              screens: {
                Explore: "/Explore",
                Listing: "/Listing",
                Inbox: "/Inbox",
                Profile: "/Profile",
              },
            },
            SelectLocation: "/SelectLocation",
            ProductDetails: "/ProductDetails",
          },
        },
      }}
    >
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
        <Stack.Screen
          name="SelectLocation"
          component={SelectLocation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CategorySearch"
          component={CategorySearch}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LocationSearch"
          component={LocationSearch}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
