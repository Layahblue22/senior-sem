import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fastt Food",
  },
  {
    image: require("../assets/images/coffee.png"),
    text: "Coffee",
  },
];
export default function App() {
  return (
    <ScrollView horizontal showsVerticalScrollIndicator={false}>
      {/* Loop starts*/}
      {items.map((item, index) => (
        <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
          <Image
            source={item.image}
            style={{
              width: 50,
              height: 40,
              resizeMode: "contain",
            }}
          />
          <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
        </View>
      ))}
      {/* Loop starts*/}
    </ScrollView>
  );
}
