import { View, Text, Pressable, Image } from "react-native";
import { withAuthenticator } from "aws-amplify-react-native";
import { Auth } from "aws-amplify";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styles from "./listing.styles";
import { colors } from "../../modal/color.modal";
import { Ionicons } from "@expo/vector-icons";

const Listing = () => {
  const navigation = useNavigation();

  Auth.currentAuthenticatedUser()
  .then((user) => {
    console.log("Email es: ", user.attributes.email)
  })
  .catch((err) => {
    console.log(err)
    throw err;
  });
  // Auth.signOut();

  return (
    <View style={{ margin: 10 }}>
      <View style={{ marginTop: 10 }}>
        <Text>Upload images [Max 5 photos]</Text>
        <Pressable 
          style={styles.image}
          onPress={() => {
            navigation.navigate("SelectPhoto");
          }}>
          <Ionicons
            name="ios-add-circle-outline"
            size={24}
            color={colors.secondary}
          />
        </Pressable>
        <View>
          <Image src={{}} />
        </View>
      </View>
      <View style={styles.category}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name="ios-options-outline"
            size={20}
            color={colors.secondary}
          />
          <Text style={{ fontSize: 16, marginLeft: 10 }}>Category</Text>
        </View>
        <Ionicons
          name="ios-arrow-forward-circle-outline"
          size={24}
          color={colors.secondary}
        />
      </View>
      <View style={styles.category}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name="ios-location-sharp"
            size={20}
            color={colors.secondary}
          />
          <Text style={{ fontSize: 16, marginLeft: 10 }}>Location</Text>
        </View>
        <Ionicons
          name="ios-arrow-forward-circle-outline"
          size={24}
          color={colors.secondary}
        />
      </View>
      <View style={styles.inputText}>
        <Ionicons name="ios-home-outline" size={24} color={colors.secondary} />
        <TextInput
          style={{ fontSize: 16, marginLeft: 10 }}
          placeholder="Location Title"
        />
      </View>
      <View style={styles.inputText}>
        <Ionicons
          name="ios-document-text-outline"
          size={24}
          color={colors.secondary}
        />
        <TextInput
          style={{ fontSize: 16, marginLeft: 10 }}
          placeholder="Write a description"
        />
      </View>
      <View style={[styles.inputText, { width: "50%" }]}>
        <Ionicons name="ios-card-outline" size={24} color={colors.secondary} />
        <TextInput
          style={{ fontSize: 16, marginLeft: 10 }}
          placeholder="Add a value $"
        />
      </View>
      <View style={styles.postButton}>
        <Text style={styles.postButtonText}>
          POST THIS LOCATION
        </Text>
      </View>
    </View>
  );
};

export default withAuthenticator(Listing);
