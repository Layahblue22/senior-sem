import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { LogBox } from 'react-native';
import { Divider } from 'react-native-elements';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); // Ignore all log notifications

export const localRestaurant = [];

function addLike(data) {
  console.log(data);
  const auth = getAuth();
  const user = auth.currentUser;
  fetch('http://127.0.0.1:5000/saveRestaurant', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      uid: user.uid,
      restaurantID: data.id,
      restaurant: data,
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
}

export default function RestaurantItems({ navigation, ...props }) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={styles.restaurantContainer}
          onPress={() =>
            navigation.navigate('RestaurantsDetail', {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
              phone: restaurant.phone,
              isClosed: restaurant.is_closed,
              id: restaurant.id,
              reviewss: restaurant.id.reviews,
            })
          }
        >
          <View style={styles.restaurantContent}>
            <RestaurantImage image={restaurant.image_url} />
            <LikeButton restaurant={restaurant} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
          <Divider width={1} marginBottom={10} color="#ffb257" />
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image source={{ uri: props.image }} style={styles.restaurantImage} />
  </>
);

const LikeButton = (props) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked((isLiked) => !isLiked);
    addLike(props.restaurant);
  };

  return (
    <View style={styles.starIcon}>
      <Pressable onPress={handleLike}>
        <MaterialCommunityIcons
          name={liked ? 'heart' : 'heart-outline'}
          size={38}
          color={liked ? '#FF6B6B' : 'white'}
          marginLeft={230}
          bottom={280}
        />
      </Pressable>
    </View>
  );
};

const RestaurantInfo = (props) => (
  <View style={styles.restaurantInfoContainer}>
    <Text style={styles.restaurantName}>{props.name}</Text>
    <View style={styles.ratingContainer}>
      <Text style={styles.ratingText}>{props.rating}</Text>
      <Ionicons name="star-outline" style={styles.starIcon} />
    </View>
    <View style={styles.ratingContainer}>
</View>
</View>
);

const styles = StyleSheet.create({
restaurantContainer: {
marginBottom: 5,
backgroundColor: 'white',
borderRadius: 1,
shadowColor: '#000',
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.1,
shadowRadius: 3.84,
elevation: 5,
},
restaurantContent: {
padding: 20,
},
restaurantImage: {
width: '100%',
height: 280,
borderRadius: 1,

},
likeButtonContainer: {
position: 'absolute',
top: 15,
right: 15,
zIndex: 1,
},
restaurantInfoContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginTop: 10,
},
restaurantName: {
  fontSize: 26,
  fontWeight: '300',
  fontStyle: 'italic',
  marginTop: 0,
},
ratingContainer: {
flexDirection: 'row',
alignItems: 'center',
left: '20%',
},
starIcon: {
fontSize: 18,
//marginRight: 5,
color: '#d4af37',
marginLeft: "20%",
},
ratingText: {
  fontSize: 16,
  fontWeight: '200',
  fontStyle: 'italic',
},
});

//export default RestaurantItems;
