import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";

const image =
  "https://media.istockphoto.com/id/1211547141/photo/modern-restaurant-interior-design.jpg?b=1&s=612x612&w=0&k=20&c=c5Mfq76KDAKUN2OPsMMUEyIErd0iOKhOwHB7FUjR0ko=";
  export default function About(props) {
    const { name, id, image, price, review, rating, categories, phone, isClosed, r_Reviews } =
      props.route.params;
  // destructuring the object above to get the values of the keys and assign them to the variables with the same name as the keys

    const formattedCategories = categories.map((cat) => cat.title).join(" • "); // map through the categories array and return the title of each category and join them with " • " in between
    
    const description = `${formattedCategories}  ${
      price ? " • " + price : ""
    } • • ${rating} ⭐ • Open  🟢`; // template literal to format the description string to be displayed in the UI to the user so that it looks like the description in the About component below
    const contact = `Phone:${phone} `;
  return (
    <View>
      <RestaurantsImage image={image} />
      <RestaurantsName name={name} />
      <RestaurantsDescription description={description} />
      <RestaurantsDescription description={contact} />
    </View>
  );
}
const RestaurantsImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 280 }} />
);

const RestaurantsName = (props) => (
  <Text
    style={{
      fontSize: 39,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);
const RestaurantsDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15,
    }}
  >
    {props.description}
  </Text>
);
//
//