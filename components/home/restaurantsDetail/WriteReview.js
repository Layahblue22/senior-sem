import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, TextInput, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { getAuth } from 'firebase/auth';

export default function WriteReview(props) {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [reviewText, setReviewText] = useState("");
  

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleReviewSubmit = () => {
    console.log("Review submitted:", reviewText);
    closeModal();

    navigation.navigate('FeedScreen',{ reviewText });

    const auth = getAuth();
    const user = auth.currentUser;
    fetch('http://127.0.0.1:5000/createReview', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      uid: user.uid,
      email: user.email,
      restaurantName: props.RestaurantName,
      review: reviewText
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log(response.json);
      return response.json();
    })
    .then((data) => {
      console.log(data);
    
    })
    .catch((error) => {
      console.error('There was a problem with the API request:', error);
    });
    // Add your API logic here to handle the review submission, e.g., fetch request, etc.
  };

  const characterCount = reviewText.length;
  const characterLimit = 600;

  return (
    <View>
      <TouchableOpacity
        style={{
          bottom: '-10%',
          backgroundColor: "#ffb257",
          borderRadius: 1,
          alignItems: "center",
          borderRadius: 30,
          height: 80,
          width: "80%",
          alignSelf: "center",
          alignContent: "center"
        }}
        onPress={openModal}
      >
        <Text
          style={{ color: "white", fontSize: 30, top: 15, fontWeight: "500" }}
        >
          Write Review
        </Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={closeModal}
        transparent={true}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <View style={{ backgroundColor: "white", borderRadius: 10, width: "70%", padding: 20, borderWidth: 2, borderColor: "#291B25" }}>
            <Text>Review for Restaurant</Text>
            <TextInput
              placeholder="Enter your review"
              value={reviewText}
              onChangeText={setReviewText}
              style={{ borderWidth: 1, padding: 10, marginVertical: 20 }}
              multiline
            />
            <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center", marginBottom: 10 }}>
              <Text>{characterCount} of {characterLimit} characters used</Text>
            </View>
            <Button title="Submit Review" onPress={handleReviewSubmit} />
            <TouchableOpacity onPress={closeModal} style={{ position: "absolute", top: 10, right: 10 }}>
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
