import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import RestaurantsDetail from "./screens/RestaurantsDetail";
import CategoriesScreen from "./screens/CategoriesScreen";
import WriteReviews from "./screens/WriteReviewScreen";
import Asian from "./screens/Categories/Asian"
import Italian from "./screens/Categories/Italian"
import Healthy from "./screens/Categories/Healthy"
import FastFood from "./screens/Categories/FastFood"

export default function RootNavigation() {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen}/>
        <Stack.Screen name="RestaurantsDetail" component={RestaurantsDetail} />
        <Stack.Screen name="WriteReviewScreen" component={WriteReviews}/>
        <Stack.Screen name="Asian" component={Asian}/>
        <Stack.Screen name="Italian" component={Italian}/>
        <Stack.Screen name="Healthy" component={Healthy}/>
        <Stack.Screen name="FastFood" component={FastFood}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}
//
