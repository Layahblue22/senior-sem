import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';

import {signIn,createUser,createReview} from "../../../firebase.js"


function testFunc(){
signIn("ahonablue@georgestreetinc.com","Aalayah4265~~")
//reateReview({id:2},{stars:4,description:"rararqr"})

}
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
            onPress={() => testFunc()}//navigation.navigate("WriteReviewScreen") }
            >
            <Text style={{color:"white", fontSize: 20,}}>Write Review</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}