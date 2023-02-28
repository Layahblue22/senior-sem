import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
    const[activeTab,setActiveTab]= useState("Delivery");
  return (
    <View style={{flexDirection: "row", alignSelf:"center",}}>
      <HeaderButton 
        text="Customer" 
        btncolor="black" 
        textcolor="white" 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}/>
      <HeaderButton 
        text="Owner" 
        btncolor="white" 
        textcolor="black" 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}/>
    </View>
  );
}

const HeaderButton = (props) =>(
    <TouchableOpacity
        style={{
            backgroundColor: props.activeTab == props.text ? "black": "white",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
        }}
        onPress={()=> props.setActiveTab(props.text)}
    >
    <Text style={{color: props.activeTab == props.text ? "white": "black", }}>{props.text}</Text>
    </TouchableOpacity>
);