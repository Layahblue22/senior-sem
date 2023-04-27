import React from "react"; 
import * as Yup from 'yup'
import { Text, TouchableOpacity, View, Image, StyleSheet, } from "react-native";
import SignupForm from '../components/home/SignupScreen/SignupForm'

const icon =
  {
    image: require("../assets/icon.png"),
  }


const SignupScreen = ({navigation}) => (
    <View style={StyleSheet.container}>
      <View style={StyleSheet.logocontainer}>
        <Image source= {icon.image} style={{alignSelf:'center', marginTop:40}}/>
     </View>
     <SignupForm navigation={navigation}/>
    </View>
  )

  const style = StyleSheet.create({
      container: {
          flex:1,
          backgroundColor: 'white',
          paddongTop: 50,
          paddingHorizontal: 12,

      },
      logocontainer:{
          alignItems: 'center',
          marginTop: 60,
      }
  })
  export default SignupScreen

//