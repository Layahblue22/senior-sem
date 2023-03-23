
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import HeaderTabs from "../../components/home/HeaderTabs";
import BottomTabs from "../../components/home/BottomTabs";
import { Divider } from "react-native-elements";
import SearchBar from "../../components/home/SearchBar";
import Categories from "../../components/home/Categories";
import RestaurantItems, {
  localRestaurant,
} from "../../components/home/RestaurantItems";
import MenuItems from "../../components/home/restaurantsDetail/MenuItems";

const YELP_API_KEY =
  "xzEdzz9IlkirgIp46AwoheO-AWjZEb89wkwcGrlwNCFvVsAQ2LCRTHQ4iACLNEm5hg1l_oJxM8qun6AbN8lfeV1SRDSX7SakPiUh4F5uPVC42Kz4XkgKE5rCx2n0Y3Yx";

export default function Healthy({ navigation }) {
  const [restaurantData, setrestaurantData] = useState(localRestaurant);
  const [city, setCity] = useState("Frederick");
  const [activeTab, setActiveTab] = useState("Delivery");
  const [c_reviews, setc_reviews] = useState("Reviews");
  const [category, setCategory] = useState("Chinese");
  const getRestaurantsFromYelp = () => {
    const yelpURL = `https://api.yelp.com/v3/businesses/search?term=restaurants&categories=chinese&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpURL, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setrestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories categoryHandler={setCategory} />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
        <MenuItems c_reviews={c_reviews}/>
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
//
//
//
