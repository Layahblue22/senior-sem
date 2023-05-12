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
const home = 
  {
    image: require("../../assets/images/home.png"),
  }
const cutlery = {
  image: require("../../assets/images/cutlery.png"),
}
const likes = {
  image: require("../../assets/images/heart.png"),
}
const user = {
  image: require("../../assets/images/user.png"),
}
export default function App() {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal showsVerticalScrollIndicator={false} >
      <TouchableOpacity onPress={() => navigation.navigate("Home")} >
        <View key={home}>
              <Image source={home.image} style={{
                width: 150,
                height: 35,
                resizeMode: "contain",
                marginTop: 10,
                right: 20
              }}/>
          </View>  
        </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("FeedScreen")} >
        <View key={cutlery}>
              <Image source={cutlery.image} style={{
                width: 150,
                height: 35,
                resizeMode: "contain",
                marginTop: 10,
                right: 70
              }}/>
          </View>
        </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")} >
        <View key={likes}>
              <Image source={user.image} style={{
                width: 50,
                height: 35,
                resizeMode: "contain",
                marginTop: 10,
                right: 80
              }}/>
          </View>
        </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Favorites")} >
        <View key={likes}>
              <Image source={likes.image} style={{
                width: 150,
                height: 35,
                resizeMode: "contain",
                marginTop: 10,
                right: 80
              }}/>
          </View>
        </TouchableOpacity>
    </ScrollView>
  );
}

//
