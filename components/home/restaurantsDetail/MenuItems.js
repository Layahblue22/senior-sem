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
import BouncyCheckBox from "react-native-bouncy-checkbox";

const food = [

      {
        url: "https://www.yelp.com/biz/north-india-restaurant-san-francisco?hrid=AeVAkQgueu6JtYtU4r3Jrg",
        text: "This place is really pretty and I really love this place. My friends and me came here yesterday. The food is superb, the service is impeccable (mostly) and...",
        user: {
          image_url: "https://media.istockphoto.com/id/1384357158/photo/portrait-of-a-beautiful-mexican-woman.jpg?b=1&s=170667a&w=0&k=20&c=sNzHC0E61lT6LYJ9XPmnUTGhqLxDtusrxbm8YcP1Qic=",
          name: "Hoang V."
        },
        rating: 5
      },
      {
        url: "https://www.yelp.com/biz/north-india-restaurant-san-francisco?hrid=6tsz9tl7HAiOcYj_fGrsCg",
        text: "Went there for the first time Saturday Evening,everything is great, the ambiance is outstanding for this location, tried the mulliatawny soup for starters...",
        user: {
          image_url: "http://s3-media2.fl.yelpcdn.com/photo/O1ZuPKBhwxHAT60XZksWHQ/o.jpg",
          name: "Winston P."
        },
        rating: 5
      },
      {
        url: "https://www.yelp.com/biz/north-india-restaurant-san-francisco?hrid=3b3-zDKfomV-1qR3Z0jmQw",
        text: "I came in here for the $9.95 lunch buffet the day after it opened.  It is the old Tara space and I like how it has been opened up to accommodate many more...",
        user: {
          image_url: "http://s3-media1.fl.yelpcdn.com/photo/bQRonQWaxInb7eKAtMjf3A/o.jpg",
          name: "Ronita J."
        },
        rating: 4
      }
  
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
          <FoodImage food={food} />
            <FoodInfo food={food} />
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
  <View style={{ width: 240, justifyContent: "space-evenly", flexDirection:'column'}}>
    <Text style={{fontWeight: 'bold'}}>{props.food.user.name}</Text>
    <Text>{props.food.text}</Text>
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
      source={{ uri: props.food.user.image_url }}
      style={{ width: 70, height: 70, borderRadius: 8, }}
    />
  </View>
  
);

//
//
