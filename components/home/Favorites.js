import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { UserSingleton } from '../../singleton';
import { Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { UserSingleton as Singleton } from '../../singleton';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Bottom from '../home/BottomTabs'

function Favorites() {
  const navigation = useNavigation();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user.uid);

    fetch('http://127.0.0.1:5000/getFavRestaurant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uid: user.uid,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.Success) {
          setRestaurants(data.Message);
        } else {
          console.error('There was a problem with the API request:', data.Message);
        }
      })
      .catch((error) => {
        console.error('There was a problem with the API request:', error);
      });
  }, []);

  const RestaurantImage = (props) => (
    <View>
      <Image source={{ uri: props.restaurant.image_url }} style={styles.photo} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.saved}>
        <Text style={styles.title}>Saved Restaurants</Text>
        <Text style={styles.subtitle}>A collection of deliciousness.</Text>
        {restaurants.map((restaurant) => (
          <TouchableOpacity
            key={restaurant.name}
            onPress={() =>
              navigation.navigate('RestaurantsDetail', {
                categories: restaurant.categories,
                id: restaurant.id,
                image: restaurant.image_url,
                isClosed: restaurant.is_closed,
                name: restaurant.name,
                phone: restaurant.phone,
                price: restaurant.price,
                rating: restaurant.rating,
                reviews: restaurant.review_count,
                address: restaurant.location.display_address,
              })
            }
          >
            <View style={styles.restaurant}>
              <RestaurantImage restaurant={restaurant} />
              <View style={styles.restaurantInfo}>
                <Text style={styles.restaurantName}>{restaurant.name}</Text>
                <View style={styles.restaurantPriceRating}>
                  <Text style={styles.restaurantPrice}>{restaurant.price}</Text>
                  <View style={styles.restaurantRating}>
                    <Text style={styles.restaurantStar}>{restaurant.rating}</Text>
                    <Ionicons name="star-outline" style={styles.star} />
                  </View>
                </View>
              </View>
            </View>
            <Divider width={1} marginBottom={10} color="#ffb257" />
          </TouchableOpacity>
        ))}
        
      </ScrollView>
    </SafeAreaView>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  saved: {
    width: '93%',
    height: '100%',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  subtitle: {
    fontSize: 18,
    fontWeight:'200',
    marginTop: 8,
    marginBottom: 5,
    alignSelf: 'flex-start',
    },
    restaurant: {
    backgroundColor: 'white',
    width: '100%',
    height: 330,
    borderRadius: 2,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    },
    photo: {
    width: '100%',
    height: '85%',
    borderRadius: 2,
    },
    restaurantInfo: {
    //flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    bottom: 25
    //paddingVertical: 5,
    },
    restaurantPriceRating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    },
    restaurantName: {
    fontSize: 26,
    fontWeight: '300',
    fontStyle: 'italic',
    marginTop: 0,
    },
    restaurantPrice: {
    fontSize: 16,
    fontWeight: '200',
    fontStyle: 'italic',
    marginTop: 5,
    },
    restaurantRating: {
    flexDirection: 'row',
    alignItems: 'center',
    },
    restaurantStar: {
    fontSize: 16,
    fontWeight: '200',
    fontStyle: 'italic',
    },
    star: {
    fontSize: 16,
    fontWeight: '200',
    fontStyle: 'italic',
    marginLeft: 5,
    },
    });
    
    export default Favorites;
