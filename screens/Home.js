import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems,{ localRestaurant, } from "../components/RestaurantItems";

const YELP_API_KEY = "xzEdzz9IlkirgIp46AwoheO-AWjZEb89wkwcGrlwNCFvVsAQ2LCRTHQ4iACLNEm5hg1l_oJxM8qun6AbN8lfeV1SRDSX7SakPiUh4F5uPVC42Kz4XkgKE5rCx2n0Y3Yx";

export default function Home() {
    const [restaurantData, setrestaurantData] = useState(localRestaurant)
    const [city,setCity] = useState("San Francisco")
    const getRestaurantsFromYelp =() => {
        const yelpURL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`
        
        const apiOptions ={
            headers:{
                Authorization:`Bearer ${YELP_API_KEY}`,
        },
    };
        return fetch(yelpURL, apiOptions)
        .then((res) => res.json())
        .then((json) => setrestaurantData(json.businesses));
    };

    useEffect(()=> {
        getRestaurantsFromYelp();
    }, [city]);
    return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar cityHandler={setCity}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
    