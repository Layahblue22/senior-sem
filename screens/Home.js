import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import HeaderTabs from "../components/home/HeaderTabs";
import BottomTabs from "../components/home/BottomTabs";
import { Divider } from "react-native-elements";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems, {
  localRestaurant,
} from "../components/home/RestaurantItems";
import MenuItems from "../components/home/restaurantsDetail/MenuItems";
import { Button } from "react-native-elements/dist/buttons/Button";
import { Ionicons } from "@expo/vector-icons";
import Carousel, { Pagination } from "react-native-snap-carousel";

const YELP_API_KEY =
  "xzEdzz9IlkirgIp46AwoheO-AWjZEb89wkwcGrlwNCFvVsAQ2LCRTHQ4iACLNEm5hg1l_oJxM8qun6AbN8lfeV1SRDSX7SakPiUh4F5uPVC42Kz4XkgKE5rCx2n0Y3Yx";

export default function Home({ navigation }) {
  const [restaurantData, setrestaurantData] = useState(localRestaurant);
  const [city, setCity] = useState("Frederick");
  const [id, setId] = useState("H1bkpo90eCy_gQxKVPV04g");
  const [activeTab, setActiveTab] = useState("Delivery");
  const [activeSlide, setActiveSlide] = useState(0);

  const getRestaurantsFromYelp = () => {
    const yelpURL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}/${id}/reviews`;

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

  const carouselData = [
    { id: 1, image: require("../assets/image4.jpg"), text: "Unleash Your Inner Pitmaster", buttonLabel: "Search BBQ", screen: "BBQ" },
    { id: 2, image: require("../assets/image2.jpg"), text: "Wing Lovers Unite", buttonLabel: "Search Wings", screen: "Wings" },
    { id: 3, image: require("../assets/image3.jpg"), text: "It can always be Taco Tuesday", buttonLabel: "Search Tacos", screen: "CategoriesScreen" },
  ];

  const renderCarouselItem = ({ item }) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={item.image} style={styles.carouselImage} />
        <View style={styles.carouselTextContainer}>
          <Text style={styles.carouselText}>{item.text}</Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate(item.screen)}>
            <Ionicons name="search-outline" size={20} color="black" />
            <Text style={styles.buttonText}>{item.buttonLabel}</Text>
</Pressable>
</View>
</View>
);
};

return (
<SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
<ScrollView showsVerticalScrollIndicator={false}>
<Carousel
data={carouselData}
renderItem={renderCarouselItem}
sliderWidth={Dimensions.get("window").width}
itemWidth={Dimensions.get("window").width}
onSnapToItem={(index) => setActiveSlide(index)}
/>
<Pagination
       dotsLength={carouselData.length}
       activeDotIndex={activeSlide}
       containerStyle={styles.paginationContainer}
       dotStyle={styles.paginationDot}
       inactiveDotStyle={styles.paginationInactiveDot}
       inactiveDotOpacity={0.9}
       inactiveDotScale={0.9}
     />
<SearchBar cityHandler={setCity} />
<Categories />
<RestaurantItems
       restaurantData={restaurantData}
       navigation={navigation}
     />
</ScrollView>
<Divider width={1} />
<BottomTabs bottom={20} />
</SafeAreaView>
);
}

const styles = StyleSheet.create({
carouselItem: {
flex: 1,
alignItems: "center",
justifyContent: "center",
height: 200,
},
carouselImage: {
width: "100%",
height: "100%",
resizeMode: "cover",
},
carouselTextContainer: {
position: "absolute",
top: 20,
left: 20,
right: 20,
},
carouselText: {
fontSize: 20,
fontWeight: "800",
color: "white",
marginBottom: 10,
width: '45%'
},
button: {
flexDirection: "row",
alignItems: "center",
backgroundColor: "#ffb257",
borderRadius: 12,
paddingHorizontal: 10,
paddingVertical: 6,
width: '40%'
},
buttonText: {
marginLeft: 6,
fontSize: 16,
color: "black",
},
paginationContainer: {
marginTop: 10,
marginBottom: 20,
alignItems: "center",
},
paginationDot: {
width: 9,
height: 9,
borderRadius: 4,
marginHorizontal: 8,
backgroundColor: "#ffb257",
},
paginationInactiveDot: {
backgroundColor: "#291B25",
},
});