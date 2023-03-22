import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "../components/home/restaurantsDetail/About";
import MenuItems from "../components/home/restaurantsDetail/MenuItems";

export default function RestaurantsDetail({ route }) {
  //const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems />
    </View>
  );
}
//
