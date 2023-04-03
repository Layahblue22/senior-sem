import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import HeaderTabs from "../components/home/HeaderTabs";
import BottomTabs from "../components/home/BottomTabs";
import { Divider } from "react-native-elements";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems, {
  localRestaurant,
} from "../components/home/RestaurantItems";
import MenuItems from "../components/home/restaurantsDetail/MenuItems";

const YELP_API_KEY =
  "xzEdzz9IlkirgIp46AwoheO-AWjZEb89wkwcGrlwNCFvVsAQ2LCRTHQ4iACLNEm5hg1l_oJxM8qun6AbN8lfeV1SRDSX7SakPiUh4F5uPVC42Kz4XkgKE5rCx2n0Y3Yx";

export default function Favorites({ navigation }) {
  
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <Text style={{fontSize: 30, alignSelf: 'center', marginTop: 41}}> Favorites</Text>
      <View style={{ backgroundColor: "white", padding: 320 }}>
        
      </View>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
//
//
//
