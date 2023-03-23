import React from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "../components/home/restaurantsDetail/About";
import MenuItems from "../components/home/restaurantsDetail/MenuItems";
import WriteReview from "../components/home/restaurantsDetail/WriteReview";


export default function RestaurantsDetail({ route, navigation }) {
  //const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <ScrollView>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems />
      <WriteReview navigation={navigation} RestaurantName={route.params.name}/>
    </ScrollView>
  );
}
//
