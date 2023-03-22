import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";

const yelpRestaurantsInfo = {
  name: "Farmhouse Kitchen Thai Cuisine",
  image_url:
    "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  price: "$",
  review: "391",
  rating: 4.8,
  categories: [{ title: "Thai" }, { title: "Comfort Food" }],
};
const image =
  "https://media.istockphoto.com/id/1211547141/photo/modern-restaurant-interior-design.jpg?b=1&s=612x612&w=0&k=20&c=c5Mfq76KDAKUN2OPsMMUEyIErd0iOKhOwHB7FUjR0ko=";
const { name, image_url, price, review, rating, categories } =
  yelpRestaurantsInfo; // destructuring the object above to get the values of the keys and assign them to the variables with the same name as the keys

const formattedCategories = categories.map((cat) => cat.title).join(" • "); // map through the categories array and return the title of each category and join them with " • " in between
const description = `${formattedCategories} ${
  price ? " • " + price : ""
} • 🎫 • ${rating} ⭐ (${review}+)`; // template literal to format the description string to be displayed in the UI to the user so that it looks like the description in the About component below

export default function About() {
  return (
    <View>
      <RestaurantsImage image={image} />
      <RestaurantsName name={name} />
      <RestaurantsDescription description={description} />
    </View>
  );
}
const RestaurantsImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantsName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
  </Text>
);
const RestaurantsDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
//
//