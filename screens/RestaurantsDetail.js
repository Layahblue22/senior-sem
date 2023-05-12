import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "../components/home/restaurantsDetail/About";
import MenuItems from "../components/home/restaurantsDetail/MenuItems";
import WriteReview from "../components/home/restaurantsDetail/WriteReview";
import BottomTabs from '../components/home/BottomTabs'

export default function RestaurantsDetail({ route, navigation }) {
  //const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <ScrollView>
      <About route={route} />
      <WriteReview navigation={navigation} RestaurantName={route.params.name}/>
      <Divider width={1} top={10} style={{ marginVertical: 20 }} />

      <BottomTabs/>
    </ScrollView>
  );
}
//
