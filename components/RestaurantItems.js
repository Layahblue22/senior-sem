import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export const localRestaurant=[
  {
    name: 'Pistarros',
    image_url: 'https://photos.bringfido.com/restaurants/5/7/3/19375/19375_54085.jpg?size=tile&density=2x',
    categories:['Cafe','Bar'],
    price: '$',
    reviews: 1244,
    rating: 3.7
  },
  {
    name: 'Firestone',
    image_url: 'http://downtownfrederick.org/wp-content/uploads/business_firestones-culinary-tavern.jpg',
    categories:['Cafe','Bar'],
    price: '$$$',
    reviews: 2244,
    rating: 4.7
  },
];

export default function RestaurantItems(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom:30}}>
      {props.restaurantData.map((restaurant,index) => (
      <View 
      key={index}
      style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
        <RestaurantImage image={restaurant.image_url} />
        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
      </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={24} color={"white"} />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "grey" }}> 30-45 min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        borderRadius: 15,
        justifyContent: "center",
      }}
    >
      <Text> {props.rating}</Text>
    </View>
  </View>
);
