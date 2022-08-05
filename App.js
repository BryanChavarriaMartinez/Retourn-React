import { StyleSheet, SafeAreaView, View, Text, TextInput, Platform } from "react-native";
import PostItems from './src/components/postItems/index.component';
import { Feather } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaViewForDroid}>
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 20,
          marginBottom: 10,
          backgroundColor: "#fec85c",
          alignItems: "center",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            flexDirection: "row",
            margin: 10,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Feather name="search" size={24} color="black" />
          <TextInput
            placeholder="Search in our website"
            style={{ width: "100%", marginLeft: 5 }}
            multiline={false}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", paddingVertical: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <Text>Location</Text>
            <Text style={{ fontWeight: "bold", marginLeft: 5 }}>New York</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Category</Text>
            <Text style={{ fontWeight: "bold", marginLeft: 5 }}>Vehicle</Text>
          </View>
        </View>
      </View>
      <PostItems />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaViewForDroid: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
