import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View , Text} from "react-native";
import HeaderTabs from "../components/home/HeaderTabs";
import BottomTabs from "../components/home/BottomTabs";
import { Divider } from "react-native-elements";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems, {
  localRestaurant,
} from "../components/home/RestaurantItems";
import MenuItems from "../components/home/restaurantsDetail/MenuItems";
import About from "../components/home/restaurantsDetail/About";

export default function WriteReviews({ route, navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      
      <View style={{ backgroundColor: "white", padding: 15 }}>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: "light-grey", padding: 445 }}> 
        <Text style={{ fontSize: 82, color:"pink", fontWeight: "900" }}>hello</Text>
        </View>
      </ScrollView>
      <Divider width={1} />
      <BottomTabs/>
    </SafeAreaView>
  );
}
//
//
//
