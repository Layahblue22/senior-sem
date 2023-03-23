import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function WriteReview(){
    const navigation = useNavigation();
    return(
        <View style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 80,
            zIndex: 999,
            justifyContent: 'center',
            
        }}>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%'

        }}>
            <TouchableOpacity style={{
                marginTop: 20,
                backgroundColor: "black",
                alignItems: "center",
                padding:13,
                borderRadius: 30,
                width:300,
                position: "relative",
            }}
            onPress={() => navigation.navigate("WriteReviewScreen") }
            >
            <Text style={{color:"white", fontSize: 20,}}>Write Review</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}