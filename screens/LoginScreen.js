import React from "react"; 
import * as Yup from 'yup'
import { Text, TouchableOpacity, View, Image } from "react-native";
import LoginForm from '../components/home/LoginScreen/LoginForm'
const icon =
  {
    image: require("../assets/icon.png"),
  }


const LoginScreen = ({navigation}) => (
   
    <View>
      <View>
        <Image source= {icon.image} style={{alignSelf:'center', marginTop:40}}/>
     </View>
     <LoginForm navigation ={navigation}/> 
    </View>
  )

  export default LoginScreen

//
//