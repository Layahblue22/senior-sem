import React from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "../components/home/restaurantsDetail/About";
import MenuItems from "../components/home/restaurantsDetail/MenuItems";
import Ratings from "../components/home/restaurantsDetail/Ratings";

export default function RestaurantsDetail({ route }) {
  console.log(route.params, "===================================");
  //const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <About route={route} data={route.params} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <Ratings data={route.params} />
    </View>
  );
}
//
//
