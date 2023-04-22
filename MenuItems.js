import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Divider } from "react-native-elements";

const food = [
  {
    title: "Thai Chicken",
    description: "Thai chicken, shrimp, egg, bean sprouts, and peanuts",
    price: "$9.99",
    image:
      "https://images.pexels.com/photos/15797986/pexels-photo-15797986.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Pad Thai",
    description:
      "Thai noodles with chicken, shrimp, egg, bean sprouts, and peanuts",
    price: "$9.99",
    image:
      "https://images.pexels.com/photos/12481161/pexels-photo-12481161.jpeg",
  },
  {
    title: "Pad See Ew",
    description:
      "Thai noodles with chicken, shrimp, egg, bean sprouts, and peanuts",
    price: "$9.99",
    image:
      "https://images.pexels.com/photos/13869881/pexels-photo-13869881.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Pad Kee Mao",
    description:
      "Thai noodles with chicken, shrimp, egg, bean sprouts, and peanuts",
    price: "$9.99",
    image:
      "https://www.platingsandpairings.com/wp-content/uploads/2018/06/pad-kee-mao-recipe-7-scaled.jpg",
  },
  {
    title: "Pad Woon Sen",
    description:
      "Thai noodles with chicken, shrimp, egg, bean sprouts, and peanuts",
    price: "$9.99",
    image:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Pad Kra Pao",
    description:
      "Thai noodles with chicken, shrimp, egg, bean sprouts, and peanuts",
    price: "$9.99",
    image:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "lasagna",
    description: "with butter lettuce, tomato and sauce bechamel",
    price: "$9.99",
    image:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Pad Kra Pao",
    description:
      "Thai noodles with chicken, shrimp, egg, bean sprouts, and peanuts",
    price: "$9.99",
    image:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const styles = StyleSheet.create({
  // styles is an object

  menuItemStyle: {
    // menuItemStyle is a property of styles
    flexDirection: "row", // flexDirection is a property of menuItemStyle
    justifyContent: "space-between",
    margin: 20,
  },
  // its a key value pair
  titleStyle: {
    fontSize: 20,
    fontWeight: "600",
  },
});

// MenuItems is a function that returns a component
// return is a function that returns a component
// food is an array
/* 
{food[0]} is an object that is 
a property, of food which is an array that is a property 
of MenuItems which is a function that returns a component 
*/
export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {food.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.7}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}
// FoodInfo is a function that returns a component
// food is a function that returns a component
// props is an object
// title is a property of food
// description is a property of food
// price is a property of food
const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

/////////////////////////////////////////////
// props is an object that contains food which,
//is an object that contains image which is,
// a string that contains a url to an image,
//on the internet that is a string that is a property,
// of food which is an object that is a property of props which is an object that is a parameter of FoodImage which is a function that returns a component
const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);

//
//
