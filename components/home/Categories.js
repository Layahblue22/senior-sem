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

const Healthy =
  {
    image: require("../../assets/images/salad.png"),
    text: "Healthy",
  }
const Mexican = 
  {
    image: require("../../assets/images/bowl.png"),
    text: "Mexican",
  }
const Asian ={
  image: require("../../assets/images/ramen.png"),
  text: "Asian",
}
const Italian ={
  image: require("../../assets/images/pasta.png"),
  text: "Italian",
}
const FastFood ={
  image: require("../../assets/images/burger.png"),
  text: "Fast Food",
}
export default function App() {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView horizontal showsVerticalScrollIndicator={false}>
      <View key={Mexican} style={{ alignItems: "center", marginRight: 28 }}>
          <TouchableOpacity  onPress={() => navigation.navigate("CategoriesScreen") }
            >
          <Image
            source={Mexican.image}
            style={{
              width: 50,
              height: 40,
              resizeMode: "contain",
            }}
          />
          </TouchableOpacity>
          
          <Text style={{ fontSize: 12, fontWeight: "900" }}>{Mexican.text}</Text>
        </View>
        <View key={Italian} style={{ alignItems: "center", marginRight: 28 }}>
          <TouchableOpacity  onPress={() => navigation.navigate("Italian") }
            >
          <Image
            source={Italian.image}
            style={{
              width: 50,
              height: 40,
              resizeMode: "contain",
            }}
          />
          </TouchableOpacity>
          
          <Text style={{ fontSize: 12, fontWeight: "900" }}>{Italian.text}</Text>
        </View>
      <View key={Healthy} style={{ alignItems: "center", marginRight: 28 }}>
          <TouchableOpacity  onPress={() => navigation.navigate("Healthy") }
            >
          <Image
            source={Healthy.image}
            style={{
              width: 50,
              height: 40,
              resizeMode: "contain",
            }}
          />
          </TouchableOpacity>
          
          <Text style={{ fontSize: 12, fontWeight: "900" }}>{Healthy.text}</Text>
        </View>
        <View key={Asian} style={{ alignItems: "center", marginRight: 28 }}>
          <TouchableOpacity  onPress={() => navigation.navigate("Asian") }
            >
          <Image
            source={Asian.image}
            style={{
              width: 50,
              height: 40,
              resizeMode: "contain",
            }}
          />
          </TouchableOpacity>
          <Text style={{ fontSize: 12, fontWeight: "900" }}>{Asian.text}</Text>
        </View>
        <View key={FastFood} style={{ alignItems: "center", marginRight: 28 }}>
          <TouchableOpacity  onPress={() => navigation.navigate("FastFood") }
            >
          <Image
            source={FastFood.image}
            style={{
              width: 50,
              height: 40,
              resizeMode: "contain",
            }}
          />
          </TouchableOpacity>
          <Text style={{ fontSize: 12, fontWeight: "900" }}>{FastFood.text}</Text>
        </View>
    </ScrollView>
    </>
  );
}

//
