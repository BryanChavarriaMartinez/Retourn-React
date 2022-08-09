import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home/home.screen";
import ProductDetails from "../screens/product-details/product-details.screen";
import { colors } from "../modal/color.modal";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const BottomTabNav = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.red,
        tabBarStyle: { 
          backgroundColor: colors.primary, 
          height: 55, 
        },
      }}
      sceneContainerStyle={{ backgroundColor: colors.background }}
    >
      <Tab.Screen
        name={"Explore"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-search-sharp" size={25} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={"Listing"}
        component={ProductDetails}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clipboard-search-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Inbox"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-chatbox-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="ios-person-circle-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
