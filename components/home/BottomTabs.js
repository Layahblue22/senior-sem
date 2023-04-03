// import React, { useState } from "react";
// import { Text, TouchableOpacity, View,Button, Pressable } from "react-native";
// import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
// export default function BottomTabs() {
//   //const [activeTab, setActiveTab] = useState("Delivery");
//   return (
//     <View
//       style={{
//         flexDirection: "row",
//         margin: 10,
//         marginHorizontal: 30,
//         justifyContent: "space-between",
//       }}
//     >
//       <Icon icon="search" text="Browse" />
//       <Icon icon="search" text="Browse" onIconPress={() => console.log('hello')}/>
//       <Icon icon="receipt" text="Orders" onPress={() => console.log('hello')}/>
//       <Icon icon="user" text="Profile" onPress={() => console.log('hello')}/>
//     </View>
//   );
// }

// const Icon = (props) => (
//   <TouchableOpacity>
//     <View>
//       <FontAwesome5
//         name={props.icon}
//         size={25}
//         style={{
//           marginBottom: 3,
//           alignSelf: "center", 
//         }}
//       />
//       <Text>{props.text}</Text>
//     </View>
    
//   </TouchableOpacity>
// );
// //




import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
const items = [
  {
    image: require("../../assets/images/home.png"),
  },
  {
    image: require("../../assets/images/cutlery.png"),
  },
  {
    image: require("../../assets/images/user.png"),
  },
];

const likes = {
  image: require("../../assets/images/heart.png"),
}
export default function App() {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal showsVerticalScrollIndicator={false}>
      {/* Loop starts*/}
      {items.map((item, index) => (
        <View key={index} style={{ alignItems: "center", marginRight: 55 ,marginLeft:5, marginTop: 10}}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            source={item.image}
            style={{
              width: 50,
              height: 35,
              resizeMode: "contain",
            }}
          />
          </TouchableOpacity>
          
          
          <Text style={{ fontSize: 12, fontWeight: "900" }}>{item.text}</Text>
        </View>
      ))}
      {/* Loop starts*/}
      <TouchableOpacity onPress={() => navigation.navigate("Favorites")} >
        <View key={likes}>
              <Image source={likes.image} style={{
                width: 50,
                height: 35,
                resizeMode: "contain",
                marginTop: 10
              }}/>
          </View>
        </TouchableOpacity>
    </ScrollView>
  );
}

//
