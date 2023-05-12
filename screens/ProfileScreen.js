import React from "react"; 
import * as Yup from 'yup'
import { Text, TouchableOpacity, View, Image } from "react-native";
import LoginForm from '../components/home/LoginScreen/LoginForm'
import Profile from '../components/home/Profile'
import BottomTabs from '../components/home/BottomTabs'

export default function ProfileScreen({ navigation }) {
   return(
    <View>
     <Profile navigation ={navigation}/> 
     <BottomTabs/>
    </View>
    
  );
   }
  

//
//